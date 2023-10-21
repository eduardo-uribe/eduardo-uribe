---
title: How to add our paginated pages to a collection. 
date: 2022-03-22
---

In Eleventy we can add our paginated pages to a collection by inserting the key : value pair `addAllPagesToCollections: true` to our pagination object in our front matter.

First, we make sure we have assigned a `tags` key with the name of the collection we would like our paginated pages to belong to.

```js/1
---
tags: articles
pagination:
    data: testdata
    size: 2
testdata:
    - item1
    - item2
    - item3
    - item4
---
```

Then, we add the key : value pair `addAllPagesToCollections: true` to the pagination object in our front matter.

```js/5
---
tags: articles
pagination:
    data: testdata
    size: 2
    addAllPagesToCollections: true
testdata:
    - item1
    - item2
    - item3
---
```

Now, all our paginated pages belong to a collection named articles. Which we can access as follows `collections.articles`.