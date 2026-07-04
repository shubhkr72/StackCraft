---
title: "Leader Election and Fencing Tokens"
description: "Prevent expired leaders from writing by validating monotonically increasing fencing tokens at storage."
authors: [editorial]
tags: [distributed-systems, reliability]
date: 2026-06-06
---

Prevent expired leaders from writing by validating monotonically increasing fencing tokens at storage.

<!-- truncate -->

## Design lens

Treat **Leader Election and Fencing Tokens** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What happens during a partition?
- Can work repeat or reorder?
- How is state repaired?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
