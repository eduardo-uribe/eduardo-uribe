// Eleventy Syntax Highlighting Plugin
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const squash = require('./utilities/squash.js');

module.exports = function (eleventyConfig) {
  // Syntax Highlighting Plugin
  eleventyConfig.addPlugin(syntaxHighlight, {
    // init callback lets you customize Prism
    init: function ({ Prism }) {
      Prism.languages.treeview = {
        'treeview-part': {
          pattern: /(^|\n).+/,
          inside: {
            'entry-line': [
              {
                pattern: /\|-- |├── /,
                alias: 'line-h',
              },
              {
                pattern: /\|   |│   /,
                alias: 'line-v',
              },
              {
                pattern: /`-- |└── /,
                alias: 'line-v-last',
              },
              {
                pattern: / {4}/,
                alias: 'line-v-gap',
              },
            ],
            'entry-name': {
              pattern: /.*\S.*/,
              inside: {
                // symlink
                operator: / -> /,
              },
            },
          },
        },
      };

      Prism.hooks.add('wrap', function (env) {
        if (env.language === 'treeview') {
          // Remove line breaks
          if (env.type === 'treeview-part') {
            env.content = env.content.replace(/\n/g, '') + '<br />';
          }
          if (env.type === 'entry-name') {
            if (/(^|[^\\])\/\s*$/.test(env.content)) {
              env.content = env.content.slice(0, -1);
              // This is a folder
              env.classes.push('dir');
            } else {
              if (/(^|[^\\])[=*|]\s*$/.test(env.content)) {
                env.content = env.content.slice(0, -1);
              }

              var parts = env.content.toLowerCase().split('.');
              while (parts.length > 1) {
                parts.shift();
                // Ex. 'foo.min.js' would become '<span class="token keyword ext-min-js ext-js">foo.min.js</span>'
                env.classes.push('ext-' + parts.join('-'));
              }
            }

            if (env.content.charAt(0) === '.') {
              env.classes.push('dotfile');
            }
          }
        }
      });
    },
  });

  eleventyConfig.addFilter('squash', function (string) {
    return squash(string);
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
