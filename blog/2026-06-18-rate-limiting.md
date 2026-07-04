---
title: "Rate Limiting Algorithms"
description: "Compare token buckets, leaky buckets, and sliding windows; key limits by identity, tenant, endpoint, or work cost."
authors: [editorial]
tags: [architecture, security]
date: 2026-06-18
---

Compare token buckets, leaky buckets, and sliding windows; key limits by identity, tenant, endpoint, or work cost.

<!-- truncate -->

## Design lens

Treat **Rate Limiting Algorithms** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- Which boundary owns the decision?
- What is synchronous?
- What justifies the extra component?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
