# JSHeroes website

This is the new [JSHeroes](https://jsheroes.io) website built with [astro](https://astro.build/).

## Structure

Pages are mostly `.md` files with some astro components here and there for a better dx. Styling is done with scoped css in the `.astro` components.

[Homepage](/src/pages/index.astro) sections are defined as markdown or astro components in the `sections` folder.

Simple static data is taken from the `data` folder, but the vast majority of information is written in markdown and consumed using the new [content collections](https://docs.astro.build/en/guides/content-collections/) feature from `Astro 2.0`.

There's a [BaseLayout](/src/layouts/BaseLayout.astro) component which renders for all pages and a [MarkdownLayout](/src/layouts/MarkdownLayout.astro) which renders the default layout for a markdown only page.

## Contribute

[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/jsheroes/website/main)

If you prefer running it locally:

```
npm install
npm run dev
```
