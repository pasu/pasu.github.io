---
layout: post
title: Traits
date: 2025-01-06 10:27:00
tags: ModernC++ Pbrt
categories: C++
giscus_comments: true
related_posts: true
---

# Designing Traits in C++

> "Think of a trait as a small object whose main purpose is to carry information used by another object or algorithm to determine 'policy' or 'implementation details'." - Bjarne Stroustrup

Traits are a powerful design pattern in C++ that allow you to associate compile-time metadata and behaviors with specific types. This tutorial explores how traits are used in the `pbrt` project to handle parameter parsing for various types, illustrating how traits can simplify type-specific behavior and make code cleaner and more extensible.

---

## Example Overview: Parameter Dictionary

The `ParameterDictionary` class manages parameters of various types, such as integers and floats. Each type has unique behaviors for conversion, retrieval, and metadata. Using traits, we can define these behaviors in a type-safe and organized way.

---

## Step 1: Define the Traits Template

Begin by creating a generic template for traits:

```cpp
template <ParameterType PT>
struct ParameterTypeTraits {};
```

This serves as the base structure. Specializations of this template will define type-specific behavior.

---

## Step 2: Create Specializations for Each Type

For every supported type, provide a specialization of `ParameterTypeTraits` to define its behavior and metadata. For example:

```cpp
template <>
struct ParameterTypeTraits<ParameterType::Integer> {
    static constexpr char typeName[] = "integer";
    static constexpr int nPerItem = 1;
    using ReturnType = int;

    static int Convert(const int *i, const FileLoc *loc) {
        return *i;  // Example conversion logic
    }

    static const auto &GetValues(const ParsedParameter &param) {
        return param.ints;  // Retrieve integer values
    }
};

template <>
struct ParameterTypeTraits<ParameterType::Float> {
    static constexpr char typeName[] = "float";
    static constexpr int nPerItem = 1;
    using ReturnType = float;

    static float Convert(const float *f, const FileLoc *loc) {
        return *f;  // Example conversion logic
    }

    static const auto &GetValues(const ParsedParameter &param) {
        return param.floats;  // Retrieve float values
    }
};
```

### Key Components:

- **`typeName`**: Describes the parameter type.
- **`nPerItem`**: Specifies how many elements are in one item.
- **`ReturnType`**: Defines the return type for retrieved values.
- **`Convert`**: Handles type-specific conversion logic.
- **`GetValues`**: Retrieves values from a `ParsedParameter` object.

---

## Step 3: Use Traits in Generic Functions

The `ParameterDictionary` class can now leverage these traits to implement type-specific logic. For instance:

```cpp
template <ParameterType PT>
std::vector<typename ParameterTypeTraits<PT>::ReturnType>
ParameterDictionary::lookupArray(const std::string &name) const {
    using traits = ParameterTypeTraits<PT>;
    return lookupArray<typename traits::ReturnType>(
        name, PT, traits::typeName, traits::nPerItem, traits::GetValues, traits::Convert);
}
```

This function:

- Extracts type-specific details from the corresponding `ParameterTypeTraits` specialization.
- Passes these details to another function for further processing.

---

## Step 4: Implement Helper Functions Using Traits

To implement core logic, a helper function can use the traits' members:

```cpp
template <typename ReturnType, typename G, typename C>
std::vector<ReturnType> ParameterDictionary::lookupArray(const std::string &name,
                                                         ParameterType type,
                                                         const char *typeName,
                                                         int nPerItem, G getValues,
                                                         C convert) const {
    for (const ParsedParameter *p : params) {
        if (p->name == name && p->type == typeName)
            return returnArray<ReturnType>(getValues(*p), *p, nPerItem, convert);
    }
    return {};
}
```

### Explanation:

- **`getValues`** and **`convert`** are passed as arguments derived from the traits.
- They enable type-specific operations without requiring hard-coded logic.

---

## Step 5: Ensure Traits Members Are Static

For this design to work seamlessly, traits' functions such as `Convert` and `GetValues` should be `static`. This allows them to be called without creating an instance of `ParameterTypeTraits`:

```cpp
traits::GetValues(*p);  // Works because GetValues is static
```

---

## Why Use Traits?

### Advantages of the Traits Pattern:

1. **Decoupling Logic**: Each type’s behavior is encapsulated within its specialization.
2. **Compile-Time Optimizations**: Decisions based on type occur at compile time, improving efficiency.
3. **Reusability**: Shared logic for type-specific operations can be reused across functions.
4. **Extensibility**: Adding support for a new type requires only a new specialization.

---

## Extending the Traits

For instance, to support `std::string` parameters, add another specialization:

```cpp
template <>
struct ParameterTypeTraits<ParameterType::String> {
    static constexpr char typeName[] = "string";
    static constexpr int nPerItem = 1;
    using ReturnType = std::string;

    static std::string Convert(const char *s, const FileLoc *loc) {
        return std::string(s);  // Example conversion logic
    }

    static const auto &GetValues(const ParsedParameter &param) {
        return param.strings;  // Retrieve string values
    }
};
```

This integrates seamlessly with functions like `lookupArray` without requiring further changes.

---

## Conclusion

The traits pattern offers a clean and extensible approach to managing type-specific behavior in C++. By encapsulating type logic in traits, you can achieve strong type safety, separation of concerns, and efficient compile-time operations. Use this tutorial as a guide to designing your own traits for robust and maintainable C++ code.
