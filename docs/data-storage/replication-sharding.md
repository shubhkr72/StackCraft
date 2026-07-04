---
sidebar_position: 2
title: Replication & Sharding
---

# Replication and sharding

**Replication** keeps copies of data on multiple nodes. It can improve read capacity and availability, but asynchronous replicas may return stale data after a write.

**Sharding** splits a dataset so each node owns a subset. It expands write and storage capacity, but makes cross-shard transactions, joins, rebalancing, and hotspot management harder.

## Choose a shard key carefully

A useful shard key has high cardinality, distributes load evenly, and appears in common queries. A monotonically increasing key may direct all new writes to one shard. A user ID distributes well for user-scoped workloads but makes global queries more expensive.

:::warning Partitioning is not a free speed button
Delay sharding until measurement shows that vertical scaling, indexing, caching, archiving, and replicas cannot meet the requirements.
:::

