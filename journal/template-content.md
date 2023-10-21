---
title: Learn how to display the full content of files inside your collection, on the home page.
date: 2020-05-19
---

Let's say you have created a website for a collection of **poems** that you've written.

In the **home** page of your website you would like to display the **full content** of each poem, in a list.

Like so:


![A screenshot of a list of poems in home-page](/assets/images/templateContent/templateContent.png)

Let's get started:

```js{% raw %}
<ul>
    {% for poem in collections.poems %}
        <li>
            <a href="#"> {{ poem.data.title }} </a>
            <section> {{ ? }} </section>
        </li>
    {% endfor %}
</ul>
{% endraw %}
```

![A screenshot of a list of poem titles in the home-page](/assets/images/templateContent/templateContent-02.png)

Alright, so we have set the title.

But, now how do we access the full content of each **poem** inside the **collections.poems**?

To access the full content of the **poem** we use the **templateContent** key provided in each **collection item object**.

**Collection item object?**

Let's take a closer look.

So we have the **collections** object, which contains our collections.

```js
collections: {
    all : [ {...}, {...}, {...} ],

    poems : [ {...}, {...}, {...} ]
}
```

Inside our **collections** object by default we have the **all** collection, and following the **all** collection is any collection we create by assigning key:value `tags` to our files front-matter.

Like so:
```js
---
title: The first poem.
tags: poems
---

# The first poem.

The poem content...
```

So, in this case following the **all** collection, is our **poems** collection.

```js
collections: {
    all : [ {...}, {...}, {...} ],

    poems : [ {...}, {...}, {...} ]
}
```

The **poems** collection's value is an array of objects. 

**collection item objects**.

Each file that is assigned the key:value pair of `tags: poems` becomes a **collection item object** inside the **poems** collection.

And inside each **collection item object** we have the following data:

```js
{
    inputPath: './poem1.md',

    fileSlug: 'poem1',

    outputPath: './_site/poem1/index.html',

    url: '/poem1/',

    data: { title: 'The first poem.', 
            tags:['poems']
            },

    templateContent: '<h1>The first poem.</h1><p>My poem content...</p>'
}
```

Nice... 

Theres alot of data we can use, but our focus will be on the **templateContent** key.

The **templateContent** key's value is the rendered content of the file. Not including any layout wrappers.

So in this **collection item object** it's the following content: `'<h1>The first poem.</h1><p>My poem content...</p>'`.

```js
templateContent: '<h1>The first poem.</h1><p>My poem content...</p>'
```

Knowing this, we can now access the content of each poem.

```js
{% raw %}
<ul>
    {% for poem in collections.poems %}
        <li>
            <a href="#"> {{ poem.data.title }} </a>
            <section> {{ poems.templateContent }} </section>
        </li>
    {% endfor %}
</ul>
{% endraw %}
```

![A screenshot of a list of poem titles in the home-page](/assets/images/templateContent/templateContent-03.png)

Nice.

But wait a minute.

Included in our content are html tags!

Why?

That's because **templateContent** value is the **rendered** content of the file and that includes the html tags.

Luckily, there is a simple solution in Nunjucks to remove the unwanted html tags in our content.

Inside our {%raw%}`{{ quote.templateContent }}`{%endraw%} we can add a `safe` filter.

Like this:

```js
{% raw %}
<section> {{ quote.templateContent | safe }} </section>
{% endraw %}

```

This removes any html tags from our content and only displays the content itself.

Let's update our code.

```js
{% raw %}
<ul>
    {% for poem in collections.poems %}
        <li>
            <a href="#"> {{ poem.data.title }} </a>
            <section> {{ poem.templateContent | safe }} </section>
        </li>
    {% endfor %}
</ul>
{% endraw %}
```

![A screenshot of a list of poems in home-page](/assets/images/templateContent/templateContent.png)

And there you have it.

Whether you want to display your poems or short blog articles, you now know how to access the full content of the files inside a collection.

Hope some of you find this micro 11ty tip helpful.