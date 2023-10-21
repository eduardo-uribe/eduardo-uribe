---
title: Enhance your code samples with the Eleventy Syntax Highlighting Plugin
date: 2020-06-12
---

## First, what is Syntax Highlighting?

You might recognize syntax highlighting as a feature found on your code-editor.

Something like this:
```js
module.exports = function(data) {
    return data;
};
```

Depending on your color theme choice, syntax-highlighting displays code in different colors and fonts; which helps improve the readability and context of your code.

With the **[Eleventy Syntax Highlighting Plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/)** we can use this familiar presentation of code in our code samples.

With the plugin we can render code samples like this:
```js
module.exports = function() {
    return `Hey there! Nice to meet you.
            I am a code sample formatted and styled using the syntax-highlighting-plugin.`;
};
```

And, in addition to having nicely styled code samples, another bonus is that our code samples are output as static code. There is no need to rely on client-side JavaScript to enable the highlighting transformation.

The highlighting transformation is done when we run 11ty and as a result get static styled code samples as output.

Nice...

**A note before we continue:** As of now the **syntax-highlighting-plugin** can only be used on Nunjuck (.njk), Liquid (.liquid), and Markdown (.md) files.

## ...Alrighty. How do we install the **Eleventy Syntax Highlighting Plugin**?

The first thing will do is install the **syntax-highlighting-plugin** into our Eleventy project with the following terminal command:

```js
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

Which, saves it into our **node-modules** directory.

Next, we open up our Eleventy Configuration File (by default named **.eleventy.js**) and:
- `require` the syntax highlighting module.
- then, use the `addPlugin()` method to let Eleventy know we want to use the Syntax-Highlighting plugin.

```js
let syntaxHighlight = require ("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
};
```

Last thing will need to do is install the styling/.css file that will give the syntax-highlighting it's beauty.

In the background of the **eleventy-syntax-highlighting-plugin** it uses the [PrismJS](https://prismjs.com/) module.

So, we can also use the styling/.css files provided by PrismJS.

Luckily, PrismJS provides several sources where we can find styling/.css files for our syntax-highlighted code-samples:

**One source:**

Where we can find multiple themes is in the [Prism Themes Repository](https://github.com/PrismJS/prism-themes). You can scroll thru the list of available themes and once you find the one you like copy the css file and add it into your project directory.

**Another source:**

Will be in the [PrismJS](https://prismjs.com/) website. You can download one of the styling/.css files that you like (Default, Dark, Funky, Okaidia, etc...), then add it into your project repository.

So that the pages that use the syntax-highligting-plugin can link to the styling resource to transform the code samples.

```treeview
css/
`-- prism.css - The theme styles copied over from the available sources.
```

...cool, we have now installed and set-up everything needed to use the syntax-highlighting plugin.

## Now that we've installed the plugin, how do we use it in our code samples?

**Quick note:** In the following examples, I will only focus on using the syntax-highlighting-plugin with Markdown (.md) and Nunjucks (.njk) files. But you can read more about using it in Liquid, Nunjucks, and Markdown [here in the Documentation](https://www.11ty.dev/docs/plugins/syntaxhighlight/).

So, we've:
- installed the plugin, 
- updated our configuration file to include syntax-highlighting,
- and installed the styling/.css file that will style our code-samples.

Now we can get to the fun part of applying the syntax-highlighting in our content.

Will start with using syntax-highlighting in a Markdown (.md) file.

So in Markdown we use fenced code blocks to display code samples.

This is done with three back-ticks on the lines before and after the code block.

```js
    ```
    module.exports = function(data) {
        return data;
    };
    ```
```

Now to convert this code sample into a syntax-highlighted code sample we just have to **insert the language name right after the opening back-ticks**.

In this case JavaScript or js.

Like this:
```js
    ```js
```

So the above code block will now include the language name of code been displayed.

```js
    ```js
    module.exports = function(data) {
        return data;
    }
    ```
```

Which, will now render as a syntax-highlighted code block like this:
```js
module.exports = function(data) {
    return data;
};
```

Cool...

Now to use the syntax-highlighter with Nunjucks (.njk) we use the paired shortcode {%raw%}`{% highlight %}`{%endraw%}:

{%raw%}
```js
{% highlight %}
    module.exports = function(data) {
        return data;
    };
{% endhighlight %}
```
{%endraw%}

Which, will render as this:
```js
module.exports = function(data) {
    return data;
};
```

And there you have it.

You now know how to enhance your code samples with the **Eleventy Syntax Highlighting Plugin**.

...Great job.