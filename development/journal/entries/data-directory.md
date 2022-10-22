---
title: "Renaming our directory for global data files"
date: 2022-06-21
---

We can rename our [directory for global data files](https://www.11ty.dev/docs/config/#directory-for-global-data-files).

Inside our Eleventy configuration file: `.eleventy.js` we write the following.

```js
module.exports = function(eleventyConfig) {

    return {
        dir: {
            // Renaming our data directory from "_data" to "global-data"
            data: "global-data"
        }
    };
};
```

Now all our global data template files can be found in our `global-data` directory instead of the default `_data`.