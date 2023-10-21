---
title: htmlTemplateEngine
date: 2022-02-02
---

Did you know that Eleventy allows us to use Nunjucks in our `.html` files?

```html/2
<body>
    <main>
        <h1>{% raw %} {{ title }} {% endraw %}</h1>
    </main>
</body>
```

All that is required from us is to set the returned object property `htmlTemplateEngine` to `"njk"` or [any valid template engine short name](https://www.11ty.dev/docs/languages/) in our Eleventy configuration file (`.eleventy.js`).

```js/2
module.exports = function(eleventyConfig) {
    return {
        htmlTemplateEngine: "njk"
    };
};
```

Once set our `.html` files will run through our selected template engine and output an .html file with our Nunjucks syntax processed.

```html/2
<body>
    <main>
        <h1>htmlTemplateEngine</h1>
    </main>
</body>
```

Cool, now we can use Nunjucks in our `.html` file without having to convert it to a `.njk` file.