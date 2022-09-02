const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy({'src/assets': 'assets'});
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });
  config.setTemplateFormats(['md', 'html', 'njk']);
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true
  });
  config.setDataDeepMerge(true);
  config.addPlugin(eleventyNavigationPlugin);
  config.addFilter("formatDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}