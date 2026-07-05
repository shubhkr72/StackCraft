---
sidebar_position: 1
title: Choosing a Database
---

# Choosing a database

Start from access patterns and guarantees, not database labels.

| Need | Strong starting point |
| --- | --- |
| Transactions and relational queries | Relational database |
| Simple key lookup at very large scale | Key-value store |
| Flexible aggregate-shaped records | Document database |
| Relationship traversal | Graph database |
| Metrics ordered by time | Time-series database |
| Full-text relevance ranking | Search engine |

Relational databases are a dependable default because constraints, indexes, and transactions protect correctness. Add specialized stores when a specific workload justifies their operational cost.

Every index accelerates some reads while consuming storage and increasing write work. Design indexes from concrete queries and verify them with query plans.

