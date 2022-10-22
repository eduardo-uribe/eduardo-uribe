---
title: "Nunjucks built-in filter block tag"
date: 2022-07-05
---

In addition, to calling a filter on a variable or directly provided data with a pipe symbol `|` followed by the filter name: {% raw %}`{{ variable | filter }}`{% endraw %}.

Nunjucks has a built-in block tag named `filter`, which allows us to call a `filter` on the content in-between the blocks.

```nunjucks
{%- raw %}
{% filter replace("harder", "simpler") %}
Eleventy is a harder static site generator.
{% endfilter %}

Outputs: Eleventy is a simpler static site generator.
{% endraw %}
```