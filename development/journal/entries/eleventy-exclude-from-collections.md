---
title: How to exclude your index.html file from your post collections.
date: 2020-05-05
---

So, we have a **blog** folder which contains our:
- posts,
- index file,
- and a directory data file.

```treeview
blog/
|-- first-post.md
|-- second-post.md
|-- third-post.md
|-- index.njk
`-- blog.11tydata.js
```

Inside of our **index.njk** file we create a `for` loop that will pass through all of our **post**'s and will display a link for each post on on the page.

```js
<ul>
{%- raw %}
    {% for post in collections.post %}
        <li>
        <a href="#"> {{ post.data.title }} </a>
        </li>
    {% endfor %}
{% endraw %}
</ul>
```

![Image of our blog/index.html file viewed in the browser](/assets/images/eleventyExcludeFromCollections.png)

But when we view our index.html file we see that not only are we getting our blog posts on this list but also a link to our **blog/index.html** file (itself!)...

Why?

The reason is that in our **blog.11tydata.js** directory data file we have data that gets passed on to all files in this directory.

```js
module.exports = function() {
    return {
        tags: "post";
    }
};
```

This adds a `tags` key with a value of `post` to all files in this directory, including the index.html file.

Which creates a **collection** of **post** that includes the index file.

Okay, so how do we prevent the index from been assigned the post tag and included in the collections.post?

Here's how:

Inside the front-matter of the index.njk page we add this *key:value* pair: **`eleventyExcludeFromCollections: true`**.

```json
---
title: Blog
eleventyExlcudeFromCollections: true
---
```

This will exclude the index file from the post.collections. So when we loop through our list of post collection to create our `ul` list the index file will be excluded.

![Image of our blog/index.html file viewed in the browser](/assets/images/ExcludeFromCollectionsTrue.png)

**Good to know side-note**: by applying `eleventyExcludeFromCollections: true` to the index it also excludes it from the `collections.all` array.

Also note that any file can be excluded from a collection with the *key:value* pair: `eleventyExcludeFromCollections: true` inside the front-matter.

Nice.

Now you know how to exclude your index file from your post collections, or any collection.

Hope this micro 11ty tip helps some of you out.