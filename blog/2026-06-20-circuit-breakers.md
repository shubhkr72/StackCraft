---
title: "Circuit Breakers and Bulkheads"
description: "Stop persistent failing calls and isolate resource pools so one dependency or workload cannot consume everything."
authors: [editorial]
tags: [reliability, architecture]
date: 2026-06-20
---

Stop persistent failing calls and isolate resource pools so one dependency or workload cannot consume everything.

<!-- truncate -->

## Design lens

Treat **Circuit Breakers and Bulkheads** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- How does it fail?
- How quickly is failure detected?
- What user outcome defines recovery?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
