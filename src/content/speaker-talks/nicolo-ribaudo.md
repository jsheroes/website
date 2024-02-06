---
title: A deep dive into Source Maps
---

Modern JavaScript application are built on top of an immense stack of tools: transpilers, bundlers, minifiers… The code we write goes through multiple transforms before being sent to the browser. Yet, Source Maps let us debug our application and decode errors as if we were directly running our original source files.

How are they able to undo any transformation applied to your code? Can they actually do it, or is there something that they cannot represent? How do different tools decide what to encode to and decode from source maps?

We will explore together how the source maps format works and which data they encode, as well as a new standardization effort to align all tools and expand what source maps are capable of.