---
title: 'Nunjucks built-in safe filter'
date: 2022-06-28
---

Eleventy by default has automatic escaping enabled for its Nunjucks environment.

This means all output will automatically be escaped for
security reasons, as to prevent the output of possible dangerous characters.

To mark a value as safe/trusted, we use the Nunjucks `safe` filter, which allows us to render all output as-is.

**Code input:**

```js
{%- raw %}
Input without the safe filter:
{{ "<span>" }}

Input using the safe filter:
{{ "<span>"  | safe }}
{% endraw %}
```

**Code output:**

```js
Output without the safe filter:
{{ "<span>" }}

Output using the safe filter:
{{ "<span>"  | safe }}
```

**What is escaping?**

In Nunjucks escaping converts the characters `&, <, >, ',`and `"` in strings to HTML-safe sequences. For example, the character `<` would be converted to the string `&lt;`.
