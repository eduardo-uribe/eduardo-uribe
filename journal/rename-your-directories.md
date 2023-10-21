---
title: How to rename our input and output directories.
date: 2020-06-23
---

In Eleventy everything is set-up for us right out of the box.

However, we can customize Eleventy to match our prefered way of working. Such as renaming our output folder from **_site** to **public**. 

Which, is what will do here.

So, let's get started on renaming our **_site** directory to **public**.

First thing we need to customize our preferences in Eleventy is a **[Configuration file](https://www.11ty.dev/docs/config/)**; by default this file is named **.eleventy.js**, and we place it in the root directory of our 11ty project.

```treeview
root_directory/
|-- .eleventy.js
|-- node_modules/
|-- package.json
`-- package-lock.json
```

Inside the **.eleventy.js** file (Configuration file) is where we override the default configuraton settings with our own preferences.

Now inside the **.eleventy.js** file we have two ways of defining our settings.

First one is using a object literal like this:

**.eleventy.js**
```js
module.exports = {
    dir: {
        output: "public"
    }
};
```

The second is using **[Eleventys Configuration API](https://www.11ty.dev/docs/config/#using-the-configuration-api)**; which is where we use a function with a parameter of **(eleventyConfig)**: 

```js
module.exports = function(eleventyConfig) {

    // Add a filter using the Config API
    eleventyConfig.addFilter("myFilter", function() {});

    // Add the syntaxHighlighting plugin into our project.
    eleventyConfig.addPlugin(syntaxHighlight);

    // Renaming the 'output' directory.
    return {
        dir: {
            output: "public"
        }
    }
}
```

The function has a parameter of **(eleventyConfig)** and Eleventy automatically passes a **config** (object) argument whose helper methods we can use.

Using this option not only allows us to rename our directory names but also allows us further customization options.

As shown in the code sample above, we can also add a filter, and/or set up syntax-highlighting, [and more](https://www.11ty.dev/docs/config/#configuration-options).

But, for now we are going to focus on renaming our output and input directories using the function.

...Alright, let's continue.

So, in our **.eleventy.js** (Configuration file) we write the following:

```js
module.exports = function(eleventyConfig) {

    // Here we rename the 'output' directory.
    return {
        dir: {
            output: "public"
        }
    }
};
```

In Eleventy the default name for our output's directory  is **_site**. But, here we have updated our output's directory name from the default **_site** to **"public"**.

So, now our compiled static files will be output to the **public** directory.

```treeview
root_directory/
|-- public/
|   |-- index.html
|   `-- blog/
|       |-- post-one.html
|       `-- post-two.html
|-- index.njk
|-- blog/
|   |-- post-one.md
|   `-- post-two.md
|-- .eleventy.js
|-- node_modules/
|-- package.json
`-- package-lock.json
```

...Awesome.

Now let's update the name of our input directory.

But, wait... in Eleventy our default input directory is actually the root directory.

Eleventy looks for any templating files in the root directory (including sub-directories) to compile into static files.

So, instead of renaming our **"input"** directory we are actually going to assign an **input** directory named **"public"**.

This **input** directory will be where we want 11ty to look for our templates files to compile into static files.

So, we add the following `key:value` pairs to our return statement.

```js
module.exports = function(eleventyConfig) {

    // Renaming the 'input' and 'output' directory.
    return {
        dir: {
            input: "private",
            output: "public"
        }
    }
};
```

**Now Eleventy will only look for template files inside our input directory named "private" to compile into static files.**

```treeview
root_directory/
|-- public/
|   |-- index.html
|   `-- blog/
|       |-- post-one.html
|       `-- post-two.html
|-- private/
|   |-- index.njk
|   `-- blog/
|      |-- post-one.md
|      `-- post-two.md
|-- willIBeCompiled.md -- This .md file will not be compiled into the output directory "public" since it is not inside the input directory "private".
|-- .eleventy.js
|-- node_modules/
|-- package.json
`-- package-lock.json
```

And, there we have it we have now customized 11ty a bit more to our liking.

We have renamed our output directory from **"_site"** to **"public"**, and defined our input directory as **"private"**.

... Nice.

**Helpful side-note:** customizing our **.eleventy.js** (Configuration file) is optional. We don't need this Configuration file to use 11ty, but can be helpful if we have a prefered way of working, or would like to add some custom filters or plugins in the future.