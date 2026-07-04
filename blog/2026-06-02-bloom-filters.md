---
title: "Bloom Filters for Expensive Misses"
description: "A Bloom filter can prove absence cheaply, while possible matches still verify against the source of truth."
authors: [editorial]
tags: [databases, performance]
date: 2026-06-02
---

A Bloom filter can prove absence cheaply, while possible matches still verify against the source of truth.

<!-- truncate -->

## Design lens

Treat **Bloom Filters for Expensive Misses** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What are the exact reads and writes?
- Which invariant needs protection?
- How does data grow and recover?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
