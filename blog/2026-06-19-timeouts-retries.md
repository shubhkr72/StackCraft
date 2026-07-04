---
title: "Timeouts and Retries Without Storms"
description: "Propagate deadlines and retry only transient idempotent work with exponential backoff, jitter, and strict budgets."
authors: [editorial]
tags: [reliability, distributed-systems]
date: 2026-06-19
---

Propagate deadlines and retry only transient idempotent work with exponential backoff, jitter, and strict budgets.

<!-- truncate -->

## Design lens

Treat **Timeouts and Retries Without Storms** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- How does it fail?
- How quickly is failure detected?
- What user outcome defines recovery?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
