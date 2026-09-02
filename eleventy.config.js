const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
  const md = markdownIt({ html: true }).use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("date", function(date, format) {
    return DateTime.fromJSDate(date).toFormat(format);
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};