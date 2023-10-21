---
title: "Passthrough by file extension"
date: 2022-06-06
---

We can passthrough file formats that are not recognized by Eleventy.

Alternative, to `addPassthroughCopy` method.

```js
module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "css"
    ]);
};
```

Eleventy will search for any `*.css` files inside of our input directory and copy them to output - keeping directory structure.