---
title: "How to ignore files or directories from being processed into our output directory"
date: 2022-06-06
---

We can tell Eleventy to ignore specific files or directories from being processed into our output directory.

First, we add an `.eleventyignore` file inside our input directory or project root directory. 

Inside, we then write a new line-separated list of files or "globs" that we don't want processed by Eleventy.

```text
README.md
_drafts/
testingNunjucksTemplates/**/*.njk
```