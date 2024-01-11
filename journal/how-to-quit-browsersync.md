---
title: How to quit Browsersync from the terminal
date: 2020-05-05
---

Browsersync is a useful tool that is included in the Eleventy install.

When you run Browsersync in your terminal using the command `npx @11ty/eleventy --serve`.

You will be provided a link to open up a localhost where your `\_site` files will be served.

Browsersync will be monitoring your code changes and will automatically refresh the browser when code changes are made.

So instead of having to manually reload your browser every time you make a change, Browsersync will automatically do this for you when code changes are observed.

Neat.

I would preview my site with Browsersync, but when I wanted to do something else on the terminal I couldn't figure out how to stop Browsersync from running, without having to manually close down the terminal and open it up again.

After a few days of manually closing Browsersync, I found a solution (I stopped been lazy and searched for an answer).

## Solution:

Inside your terminal press `ctrl + c`.

You will be asked if you want to `Terminate batch job (Y/N) ?`
press `y` then `enter`.

And that's it.

It exits out into your terminal where you can continue to enter any other commands like normal.

Extended tip: enter `ctrl + c` then `ctrl + c` again. This will also close down Browsersync without having to move your fingers to `y` then `enter`.

Cool.

Hope this micro 11ty tip helps some of you out.
