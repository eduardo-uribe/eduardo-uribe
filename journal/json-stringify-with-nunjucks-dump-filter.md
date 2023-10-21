---
title: 'JSON.stringify() with Nunjucks built-in "dump" filter'
date: 2022-04-26
---

We can use the Nunjucks `dump` filter to call `JSON.stringify` on an object and "dump" the result(s) into our template.

For example, we can view information about our current page with the Eleventy supplied `page` variable.

If we try to output the `page` variable directly, it renders `[object Object]`.

```yaml
{%- raw %}
{{ page }}
{% endraw %}
# Outputs:
{{ page }}
```

But using Nunjucks `dump` filter on the `page` variable  outputs the object as a JSON string.
```yaml
{%- raw %} 
{{ page | dump }} 
{% endraw %}
# Outputs the Eleventy provided `page` data as a string
{{ page | dump(2) | safe }}
```
... Cool, now we know.