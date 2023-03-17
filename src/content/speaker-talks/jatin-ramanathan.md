---
title: Scaling Resumability
---

The amount of JS in web applications keeps increasing. Mobile phones are ubiquitous and many users often experience slow or congested networks. How can we build web applications that continue to feel snappy even as the amount of JS goes into multiple MBs?

Resumable web applications are designed to be interactive in milliseconds regardless of how much JS is actually present in the full application. Google has been building web applications using this paradigm for nearly 10 years now. This has impacted the full stack - ranging from bundling & serving to code authoring and data fetching. In this talk we’ll explore ideas that have allowed developers to build nearly a 1000 resumable web apps on a single cohesive platform. We’ll see how you can try out some of these ideas using open source frameworks today.