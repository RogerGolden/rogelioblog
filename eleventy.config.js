const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", function(date, format) {
    return DateTime.fromJSDate(date).toFormat(format);
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

eleventyConfig.addPassthroughCopy("src/css");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};