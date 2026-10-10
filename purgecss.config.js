module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: [/^me-/], // Travel map and gallery classes are created from JSON at runtime.
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
