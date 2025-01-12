---
title: Invisible Hand of React Performance
---

From `React.createClass` to `PureComponent` to hooks – React has changed a lot. Each of these changes was driven by a desire for better architecture. But under the hood, each of these changes also pushed us to write faster apps – often, without us even noticing that.

In this talk, let's look at how React's invisible hand has been making our apps faster over the past 10 years:

- `useEffect`, and how it's faster than `componentDidMount`
- Batching, and how it improved from version 0.4 to 0.12 to 18
- `<Suspense>`, and some of the less obvious effects of using it
- and possibly more
