---
title: "Caching, Payloads, and Other Dark Arts: Optimizing UX in Suboptimal Conditions"
---

This talk breaks down real world data fetching challenges at scale and how to solve them with modern patterns like the BFF layer, granular payload shaping, prefetching, and critical versus optimal queries. We walk through progressively improving an architecture that starts with five parallel client side requests against a bloated API, then move the work to a proxy handler, and finally to a fully optimized TanStack Query setup with server prefetching and resilient fallbacks.

All demos were recorded on a long haul flight using in flight WiFi, showing how these patterns behave under real latency, unstable bandwidth, and failure conditions. The goal is to prove that these techniques are not academic. They directly affect reliability, performance, and user experience in harsh environments where debugging, caching strategy, and payload discipline make or break your product.
