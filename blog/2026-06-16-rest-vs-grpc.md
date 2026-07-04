---
title: "REST or gRPC?"
description: "Choose based on client boundaries, interoperability, streaming, schema tooling, debugging, and latency requirements."
authors: [editorial]
tags: [architecture, networking]
date: 2026-06-16
---

Choose based on client boundaries, interoperability, streaming, schema tooling, debugging, and latency requirements.

<!-- truncate -->

## Design lens

Treat **REST or gRPC?** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.

## Questions to ask

- Which boundary owns the decision?
- What is synchronous?
- What justifies the extra component?

## Common failure mode

The usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.
