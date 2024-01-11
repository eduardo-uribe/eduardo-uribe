---
title: 'How to create our own "custom" collections'
date: 2022-06-08
---

Inside our Eleventy configuration file `.eleventy.js`, we can use the `addCollection` method of our `eleventyConfig` object to create our own [custom collection](https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting).

```js
module.exports = function (eleventyConfig) {
  // Custom collection
  eleventyConfig.addCollection('customCollection', function (collection) {
    // Return an array of collection items written by "me"
    return colllection.getAll().filter(function (collectionItem) {
      return collectionItem.data.author == 'me';
    });
  });
};
```

Now the collection `customCollection` is available to use in our templates: `collection.customCollection`.
