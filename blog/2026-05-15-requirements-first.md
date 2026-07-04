---
title: "Clarifying System Requirements"
description: "Separate essential user actions from optional scope, then rank latency, availability, consistency, durability, security, and cost."
authors: [editorial]
tags: [fundamentals, interview]
date: 2026-05-15
---

Separate essential user actions from optional scope, then rank latency, availability, consistency, durability, security, and cost.

<!-- truncate -->

## Design lens

Treat **Clarifying System Requirements** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What requirement makes this necessary?
- Which assumption changes the decision?
- What simple option works first?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
