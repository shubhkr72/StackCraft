---
title: "Case Study: Design a Chat System"
description: "Combine persistent connections, per-conversation ordering, offline delivery, acknowledgements, and reconnect logic."
authors: [editorial]
tags: [case-study, distributed-systems]
date: 2026-06-28
---

Combine persistent connections, per-conversation ordering, offline delivery, acknowledgements, and reconnect logic.

<!-- truncate -->

## Design lens

Treat **Case Study: Design a Chat System** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- What is the dominant request path?
- Where is the unique bottleneck?
- Which work can be asynchronous?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
