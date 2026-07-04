---
title: "Case Study: Design a News Feed"
description: "Use hybrid fan-out to balance write amplification, read latency, ranking freshness, and celebrity accounts."
authors: [editorial]
tags: [case-study, architecture]
date: 2026-06-29
---

Use hybrid fan-out to balance write amplification, read latency, ranking freshness, and celebrity accounts.

<!-- truncate -->

## Design lens

Treat **Case Study: Design a News Feed** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What is the dominant request path?
- Where is the unique bottleneck?
- Which work can be asynchronous?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
