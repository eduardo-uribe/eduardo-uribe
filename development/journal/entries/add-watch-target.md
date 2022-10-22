---
title: 'Adding our own "watch targets"'
date: 2022-05-30
---

Inside the [addWatchTarget](https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets) method of our "`eleventyConfig`" object we can specify a file or directory for Eleventy to watch.

When the file or the files in the provided directory change Eleventy will trigger a build.


```js
module.exports = function(eleventyConfig) {

    // Copy the "css/" directory to "_site/css/"
    eleventyConfig.addPassthroughCopy("css/");

    /* Watch for changes to files in the "css/" directory 
     and then trigger a build */
    eleventyConfig.addWatchTarget("css/");
};
```