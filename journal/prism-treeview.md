---
title: "Learn how to display a directory treeview with your 11ty syntax highlighter"
date: 2021-06-23
---

<!-- Initial idea by [James Brumond](https://github.com/kbjr) and improved into an official [PrismJS](https://prismjs.com/plugins/treeview/) plugin by [Golmote](https://github.com/Golmote). -->

First, a quick thank you to the contributor(s) of this [treeview plugin](https://github.com/Golmote/prism-treeview).

We can now communicate our directory structures more clearly, just by setting our syntax-highlighting language to `treeview`.

We can go from this:

```text
root-directory/
`-- _site/
	|-- about.html
	`-- index.html
```

To this:

```treeview
root-directory/
`-- _site/
	|-- about.html
	`-- index.html
```

## Overview

Before we continue make sure you have installed the [11ty syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/).

Alright, so to visually display a directory treeview inside our syntax-highlighted blocks we will complete the following steps:
1. Copy over the custom prism language: treeview.
2. Copy over the CSS that will style our syntax-highlighted treeview(s).

## First

Inside `eleventyConfig.addPlugin(syntaxHighlight);` we have the option to pass in an "options" object as the second argument to the `addPlugin` method. This allows us to further customize the 11ty syntax highlighting plugin.

```js/3
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {...});
};
```

There are various `key: value` pairs that we can pass into our "options" object, which you can view here: [options](https://www.11ty.dev/docs/plugins/syntaxhighlight/#options).

But, the `key: value` pair we will enter into our "options" object will be the following:

```js/2-4
eleventyConfig.addPlugin(syntaxHighlight, {
  // init callback lets you customize Prism
  init: function({ Prism }) {
    Prism.languages.myCustomLanguage = /* */;
  }
});
```

This `init` function will allow us to pass in our own custom language, which in our case will be the "treeview" language that we will copy over.

So, inside the `init` function we [copy and paste the following JavaScript](https://raw.githubusercontent.com/Golmote/prism-treeview/master/prism-treeview.js):

```js/4
eleventyConfig.addPlugin(syntaxHighlight, {

  // init callback lets you customize Prism
  init: function({ Prism }) {
    Prism.languages.treeview = {
	"treeview-part": {
		pattern: /(^|\n).+/,
		inside: {
			"entry-line": [
				{
					pattern: /\|-- |├── /,
					alias: "line-h"
				},
				{
					pattern: /\|   |│   /,
					alias: "line-v"
				},
				{
					pattern: /`-- |└── /,
					alias: "line-v-last"
				},
				{
					pattern: / {4}/,
					alias: "line-v-gap"
				}
			],
			"entry-name": {
				pattern: /.*\S.*/,
				inside: {
					// symlink
					"operator": / -> /,
				}
			}
		}
	}
};

Prism.hooks.add('wrap', function(env) {
	if (env.language === 'treeview') {
		// Remove line breaks
		if(env.type === 'treeview-part') {
			env.content = env.content.replace(/\n/g,'')+'<br />';
		}
		if(env.type === 'entry-name') {
			if(/(^|[^\\])\/\s*$/.test(env.content)) {
				env.content = env.content.slice(0,-1);
				// This is a folder
				env.classes.push('dir');
			} else {

				if(/(^|[^\\])[=*|]\s*$/.test(env.content)) {
					env.content = env.content.slice(0,-1);
				}
				
				var parts = env.content.toLowerCase().split('.');
				while (parts.length > 1) {
					parts.shift();
					// Ex. 'foo.min.js' would become '<span class="token keyword ext-min-js ext-js">foo.min.js</span>'
					env.classes.push('ext-' + parts.join('-'));
				}
			}

			if(env.content.charAt(0)==='.') {
				env.classes.push('dotfile');
			}
		}
	}
});
  }
});
```

Wonderful, we have copied over the **treeview** language into the `init` function. Next, we will copy over the CSS styles.

## Second

Now it's time to [copy over the CSS](https://raw.githubusercontent.com/Golmote/prism-treeview/master/prism-treeview.css) that will style our treeview.
```treeview
css/
|-- prism.css
`-- prism-treeview.css
```

## Lastly

So we have:
- inserted an "options" object into our `addPlugin(syntaxHighlight, {...});` method
- and we have copied over the **treeview** CSS styles.

Great... we can now use the **treeview** language in our syntax-highlighed blocks.

Let's look at an example implementing treeview inside a markdown syntax-highlighted block.

Firstly, we specify our language as **treeview** in our syntax-highlighted block.

```text/0
	```treeview
		root_folder/
		|-- a first folder/
		|   |-- holidays.mov
		|   |-- javascript-file.js
		|   `-- some_picture.jpg
		|-- documents/
		|   |-- spreadsheet.xls
		|   |-- manual.pdf
		|   |-- document.docx
		|   `-- presentation.ppt
		|       `-- test    
		`-- empty_folder/
	```
```

Then, we just make sure to use the characters (`/`, `|--`) used above to represent the **tree**.

And with this the following directory structure will be converted from this:

```text
root_folder/
|-- a first folder/
|   |-- holidays.mov
|   |-- javascript-file.js
|   `-- some_picture.jpg
|-- documents/
|   |-- spreadsheet.xls
|   |-- manual.pdf
|   |-- document.docx
|   `-- presentation.ppt
|       `-- test    
`-- empty_folder/
```

To this:
```treeview
root_folder/
|-- a first folder/
|   |-- holidays.mov
|   |-- javascript-file.js
|   `-- some_picture.jpg
|-- documents/
|   |-- spreadsheet.xls
|   |-- manual.pdf
|   |-- document.docx
|   `-- presentation.ppt
|       `-- test    
`-- empty_folder/
```

A visually clear directory structure.