---
layout: post
title: Array
date: 2025-01-08 10:27:00
tags: ModernC++ Pbrt
categories: C++
giscus_comments: true
related_posts: true
---

# Array in PBRT

Arrays are fundamental in C++ programming, especially in performance-critical applications like PBRT. In PBRT's utility library, `pstd::array` reimagines `std::array` with specific tweaks for rendering needs. This post delves into the features of `pstd::array`, its differences from `std::array`, the advantages of arrays over raw pointers, and using arrays with modern C++ techniques, including `std::move` and `std::span`.

---

## Understanding `pstd::array`

The `pstd::array` class in PBRT mirrors much of the functionality of `std::array` but is customized to meet the demands of rendering workflows. Here’s a glimpse of its structure:

```cpp
template <typename T, int N>
class array {
  public:
    using value_type = T;
    using iterator = value_type *;
    using const_iterator = const value_type *;

    array() = default;

    array(std::initializer_list<T> v) {
        size_t i = 0;
        for (const T &val : v)
            values[i++] = val;
    }

    void fill(const T &v) {
        for (int i = 0; i < N; ++i)
            values[i] = v;
    }

    T &operator[](size_t i) { return values[i]; }
    const T &operator[](size_t i) const { return values[i]; }

    iterator begin() { return values; }
    iterator end() { return values + N; }
    const_iterator begin() const { return values; }
    const_iterator end() const { return values + N; }

    size_t size() const { return N; }

  private:
    T values[N] = {};
};
```

### Key Features of `pstd::array`

1. **Static Size**: Provides a fixed-size, stack-allocated array, similar to `std::array`.
2. **Initializer List Support**: Enables initialization with syntax like:
   ```cpp
   pstd::array<int, 4> arr = {1, 2, 3, 4};
   ```
3. **Iterator Support**: Works seamlessly with range-based loops.
4. **Environment Adaptability**: Compatibility across CPU and GPU environments through `PBRT_CPU_GPU` macros.

---

## Differences Between `pstd::array` and `std::array`

### 1. **Initializer List Constructor**

`pstd::array` explicitly defines a constructor for `std::initializer_list`, making syntax like:

```cpp
pstd::array<int, 3> arr = {1, 2, 3};
```

possible. However, it does not enforce bounds checking, so mismatched list sizes can result in undefined behavior. By contrast, `std::array` relies on compiler mechanisms for safer initialization without explicitly defining such a constructor.

### 2. **Minimal Dependencies**

`pstd::array` avoids STL dependencies, keeping it lightweight and tailored to PBRT’s performance-focused requirements.

### 3. **CPU-GPU Compatibility**

`pstd::array` ensures cross-platform compatibility using the `PBRT_CPU_GPU` macros, a feature absent in `std::array`.

---

## Arrays vs. Pointers for Memory Management

In rendering systems, raw pointers often manage memory blocks like image or texture data. Replacing pointers with fixed-size arrays brings notable advantages:

### Benefits of Arrays over Pointers

1. **Safety**: Arrays encapsulate their size, reducing out-of-bounds errors.
2. **Optimization**: Known size at compile time allows for better compiler optimizations.
3. **Readability**: Range-based loops and STL integration make code clearer and less error-prone.

### Example: Using `pstd::array` for Image Data

```cpp
pstd::array<uint8_t, 256 * 256> image;
image.fill(0); // Initialize all pixels to black

// Set a pixel value
image[128 * 256 + 128] = 255; // Center pixel set to white

// Iterate over pixels
for (auto pixel : image) {
    // Process each pixel
}
```

This approach is safer and easier to maintain compared to raw pointer-based alternatives.

---

## Arrays and `std::span`

Introduced in C++20, `std::span` provides a non-owning view over a contiguous memory block, making it an excellent alternative to raw pointers when passing arrays to functions.

### Benefits of `std::span`

1. **Safety**: Encapsulates size information, minimizing out-of-bounds access risks.
2. **Flexibility**: Works with `std::array`, `std::vector`, raw arrays, or custom containers like `pstd::array`.
3. **Simplicity**: Simplifies function parameters by removing the need for separate size arguments.

### Example: Using `std::span` as a Function Parameter

#### Raw Pointer Version

```cpp
void processArray(const int *data, size_t size) {
    for (size_t i = 0; i < size; ++i) {
        std::cout << data[i] << " ";
    }
}
```

The caller must provide both the pointer and size, which can lead to errors.

#### Using `std::span`

```cpp
#include <span>

void processArray(std::span<const int> data) {
    for (auto value : data) {
        std::cout << value << " ";
    }
}
```

This version is safer and more versatile. It allows:

```cpp
std::array<int, 4> arr = {1, 2, 3, 4};
processArray(arr);

std::vector<int> vec = {1, 2, 3, 4};
processArray(vec);
```

The encapsulated size improves safety and readability while maintaining compatibility with legacy APIs using pointers.

---

## Modern C++ Techniques with Arrays

### Using `std::move`

`std::move` transfers ownership of resources. However, for fixed-size arrays like `pstd::array`, explicit `std::move` is unnecessary in many cases due to:

1. **Stack Allocation**: Data is not dynamically managed.
2. **Return Value Optimization (RVO)**: Modern compilers eliminate redundant copies when returning arrays.

#### Example: Leveraging RVO

```cpp
pstd::array<int, 3> createArray() {
    return {1, 2, 3};
}

pstd::array<int, 3> arr = createArray();
```

RVO ensures the array is constructed directly in its final location.

### Range-Based Loops

Both `pstd::array` and `std::array` integrate seamlessly with range-based loops:

```cpp
pstd::array<int, 4> arr = {10, 20, 30, 40};
for (const auto &value : arr) {
    std::cout << value << " ";
}
```

### Passing Arrays to Functions

Always pass arrays by reference to avoid unnecessary copies:

```cpp
void processArray(const pstd::array<int, 4> &arr) {
    for (auto value : arr) {
        std::cout << value << " ";
    }
}
```

---

## Conclusion

The `pstd::array` in PBRT offers a flexible, lightweight alternative to `std::array` while catering to the specialized needs of rendering. Combining this with modern C++ tools like `std::span` and techniques like RVO enables developers to write safer, more efficient, and expressive code without resorting to raw pointers.

When I began using C++ around 2006, pointers were highly encouraged as an alternative to C-style arrays for achieving high performance. At the time, the programming community was enamored with pointers, often likening them to a sharp knife—capable of causing harm if mishandled but far more effective than a blunt tool. Fast forward to today, much has changed in programming practices, and fortunately, C++ continues to thrive.
