---
sidebar_position: 2
title: Scalability Basics
---

# Scalability basics

**Vertical scaling** gives a machine more CPU, memory, or storage. It is simple but eventually reaches a hardware and cost ceiling. **Horizontal scaling** adds machines. It raises the ceiling but introduces coordination, partitioning, and failure handling.

## Keep request handlers stateless

When any service instance can handle any request, a load balancer can freely distribute traffic and replace unhealthy instances. Store sessions in a shared store or encode carefully limited identity claims in signed tokens.

## Scale the bottleneck, not the diagram

Measure first. A slow system may be constrained by CPU, lock contention, database connections, disk I/O, a downstream dependency, or oversized network payloads. Adding application servers cannot repair a saturated database.

:::info A useful sequence
Optimize the query → cache repeated work → add read replicas → partition only when a single database can no longer meet the requirement.
:::

