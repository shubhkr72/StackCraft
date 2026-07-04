---
title: "Latency, Throughput, and Concurrency"
description: "Latency measures time, throughput measures completed work, and concurrency measures work in flight; optimize the percentile users feel."
authors: [editorial]
tags: [fundamentals, performance]
date: 2026-05-17
---

Latency measures time, throughput measures completed work, and concurrency measures work in flight; optimize the percentile users feel.

<!-- truncate -->

## Design lens

Treat **Latency, Throughput, and Concurrency** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What requirement makes this necessary?
- Which assumption changes the decision?
- What simple option works first?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
