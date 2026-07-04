---
title: "Scale Up or Scale Out?"
description: "Vertical scaling is simple but bounded; horizontal scaling raises capacity while adding partitioning and coordination."
authors: [editorial]
tags: [fundamentals, architecture]
date: 2026-05-18
---

Vertical scaling is simple but bounded; horizontal scaling raises capacity while adding partitioning and coordination.

<!-- truncate -->

## Design lens

Treat **Scale Up or Scale Out?** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What requirement makes this necessary?
- Which assumption changes the decision?
- What simple option works first?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
