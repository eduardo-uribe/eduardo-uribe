---
title: queueMicrotask()
date: 2024-02-29
---

The `queueMicrotask()` method is an object available in the global `Window` object.

It queues a microtask to be executed when the browser engine determines it is safe to call our code.

```js
queueMicrotask(function () {
  // function body
});
```
