---
title: "Relational or NoSQL?"
description: "Start from access patterns, invariants, and growth rather than database labels; relational storage is a strong default."
authors: [editorial]
tags: [databases, architecture]
date: 2026-05-25
---

Start from access patterns, invariants, and growth rather than database labels; relational storage is a strong default.

<!-- truncate -->

## Design lens

Treat **Relational or NoSQL?** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What are the exact reads and writes?
- Which invariant needs protection?
- How does data grow and recover?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
