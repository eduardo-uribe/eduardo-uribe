---
title: "Output a .json file with the permalink key"
date: 2022-04-20
---

In our front matter we set the `permalink` key to a value that ends with a `.json` extension.

```yaml
---
permalink: "./searchable-data.json"
---
```

So, a file named `searchable-data.njk` will be output as a `.json` file in our output directory.

```treeview
root-directory/
|-- _site/
|   |-- searchable-data.json
|   `-- index.html
|-- searchable-data.njk
`-- index.html
```

... Cool, now we know.