---
title: "Reverse Proxy vs API Gateway"
description: "A proxy routes and terminates TLS; a gateway also owns cross-cutting API policy such as authentication and rate limits."
authors: [editorial]
tags: [networking, architecture]
date: 2026-05-23
---

A proxy routes and terminates TLS; a gateway also owns cross-cutting API policy such as authentication and rate limits.

<!-- truncate -->

## Design lens

Treat **Reverse Proxy vs API Gateway** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- Where is the latency spent?
- What is cached or retried?
- How does regional failure change routing?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
