---
sidebar_position: 1
title: Requirements & Estimation
description: Turn a vague prompt into measurable design constraints.
---

# Requirements and estimation

Before choosing technology, define what the system must do and how well it must do it.

## Functional requirements

Write the three or four user actions that define the product. For a video service: upload, process, watch, and search. Keep secondary features out of the first design pass.

## Non-functional requirements

Ask for explicit targets:

| Quality | Useful question |
| --- | --- |
| Availability | What downtime is acceptable? |
| Latency | What should p95 response time be? |
| Consistency | Must every reader see the latest write? |
| Durability | Can acknowledged data ever be lost? |
| Security | What data requires special protection? |

## Back-of-the-envelope estimation

Estimate average and peak requests per second, storage growth, and bandwidth. If 10 million daily users each make 20 reads, average read traffic is roughly `10M × 20 / 86,400 ≈ 2,315 requests/second`. A peak multiplier of 3–10 is common enough to discuss, but it must be labeled as an assumption.

The goal is not false precision. The goal is to discover whether you need one machine, a replicated service, partitioned storage, a CDN, or all four.

