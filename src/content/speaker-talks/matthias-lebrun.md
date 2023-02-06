---
title: Leveraging (algebraic data) types to make your UI rock solid
---

As we always want to push the envelope and manage more and more on the front-end, our UI code code grew in complexity in the last few years. All of our modern application deal with three big challenges: optionality (is my data there or not?), fallibility (did my operation succeed?) and asynchronicity (when do I have my data?). Inspired by how typed functional languages treat those, we'll see how we can leverage TypeScript to deal with them and make a whole category of issues disappear, so that we can focus on the essential parts: making great, accessible interfaces.