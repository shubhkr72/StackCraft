---
title: "Replication and Replica Lag"
description: "Replication improves availability and read capacity but requires explicit read freshness and failover semantics."
authors: [editorial]
tags: [databases, reliability]
date: 2026-05-28
---

Replication improves availability and read capacity but requires explicit read freshness and failover semantics.

<!-- truncate -->

## Design lens

Treat **Replication and Replica Lag** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What are the exact reads and writes?
- Which invariant needs protection?
- How does data grow and recover?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
