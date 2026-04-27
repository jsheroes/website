---
title: "How Not to Use TanStack Query"
---

Three years ago, I was a state management skeptic. Too much boilerplate, business logic buried in side effects, vendor lock-in for life. So when I started my own app, I went with React Context and kept things local. It worked, until 10 developers and a wall of providers later, it didn't.

That's when I found TanStack Query and fell in love with the mental model: stop managing server state yourself, let the backend be your store, and put a smart caching layer between your API and your UI. Revolutionary. Until we used it wrong and everything went sideways.

This talk is the honest story of how we adopted TanStack Query, where we shot ourselves in the foot, and what I'd do differently. Plus the tips, tricks, and automations I wish someone had shown me on day one.
