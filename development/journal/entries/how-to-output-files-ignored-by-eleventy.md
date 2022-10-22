---
title: "How to output files ignored by Eleventy"
date: 2022-05-03
---

When files in our input directory are not of a valid [Eleventy template language](https://www.11ty.dev/docs/languages/) extension, they will be ignored and not output into our output directory.

If we would like Eleventy to copy over our ignored files or a directory of ignored files into our output directory.

Then inside our Eleventy configuration file (`.eleventy.js`) we use the `addPassthroughCopy` method to specify the files or directories we want Eleventy to copy into our output directory.

```js
module.exports = function(eleventyConfig) {

    // Copy "styles.css" to "_site/styles.css"
    eleventyConfig.addPassthroughCopy("styles.css");

    // Copy the "css" directory to "_site/css"
    eleventyConfig.addPassthroughCopy("css/");
};
```

Now, our output folder will contain both the previously ignored `styles.css` file and the `css` directory.

```treeview
root-directory /
|-- _site /
|    |-- index.html
|    |-- styles.css
|    `-- css /
|       |-- home.css
|       `-- about.css
|-- .eleventy.js
|-- index.html
|-- styles.css
`-- css /
    |-- home.css
    `-- about.css

```

... Now, we know.