---
title: "Saga Transactions Across Services"
description: "Coordinate local transactions with compensating business actions and model every intermediate failure state."
authors: [editorial]
tags: [distributed-systems, architecture]
date: 2026-06-11
---

Coordinate local transactions with compensating business actions and model every intermediate failure state.

<!-- truncate -->

## Design lens

Treat **Saga Transactions Across Services** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What happens during a partition?
- Can work repeat or reorder?
- How is state repaired?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
