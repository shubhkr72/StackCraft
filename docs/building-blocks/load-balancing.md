---
sidebar_position: 1
title: Load Balancing
---

# Load balancing

A load balancer accepts traffic and selects a healthy backend. It improves availability, enables horizontal scaling, and gives clients a stable endpoint while servers change behind it.

## Common algorithms

- **Round robin:** simple and effective for similar requests and machines.
- **Least connections:** useful when requests have uneven duration.
- **Weighted routing:** sends more traffic to larger or healthier pools.
- **Consistent hashing:** reduces remapping when routing by a stable key.

Health checks should measure whether an instance can serve real traffic—not merely whether its process exists. Use connection draining before removal so in-flight work can finish.

Avoid sticky sessions unless they solve a demonstrated problem. They create uneven load and complicate recovery when an instance disappears.

