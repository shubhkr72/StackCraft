---
title: "Logs, Metrics, and Traces"
description: "Use metrics for trends, logs for events, traces for request flow, and correlation identifiers across all three."
authors: [editorial]
tags: [reliability, architecture]
date: 2026-06-22
---

Use metrics for trends, logs for events, traces for request flow, and correlation identifiers across all three.

<!-- truncate -->

## Design lens

Treat **Logs, Metrics, and Traces** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- How does it fail?
- How quickly is failure detected?
- What user outcome defines recovery?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
