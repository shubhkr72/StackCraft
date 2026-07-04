---
title: "Designing with a CDN"
description: "Choose cache keys and freshness deliberately, version immutable assets, and never cache private responses across identities."
authors: [editorial]
tags: [networking, performance]
date: 2026-05-22
---

Choose cache keys and freshness deliberately, version immutable assets, and never cache private responses across identities.

<!-- truncate -->

## Design lens

Treat **Designing with a CDN** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- Where is the latency spent?
- What is cached or retried?
- How does regional failure change routing?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
