---
title: What is a Higher-Order function in JavaScript?
date: 2020-06-23
permalink: false
eleventyExcludeFromCollections: true
---

A **Higher-Order Function** is the technical term for a function that takes in another function as an argument, or a function whose returned value is a function.

**Side note:** The function that we pass in as an argument to another function, is technically referred to as a **Callback Function**.

Now let's see two examples of Higher-Order Functions:

This Higher-Order Function takes in a Callback Function as an argument.
```js
let callBackFunction = function() {
    return `Hello.`;
};

function firstExample(callBackFunction) {
    return `Hi, I'm a Higher Order Function.`;
}
```

This Higher-Order Function returns a function.

```js
function secondExample() {
    return function() {
        return `I'm a Higher-Order Function too.`;
    }
}
```

There we have it. Now we know what are considered Higher-Order Functions.