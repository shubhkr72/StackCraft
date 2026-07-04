---
sidebar_position: 1
title: Consistency & CAP
---

# Consistency and CAP

In the CAP model, when a network partition prevents nodes from communicating, a distributed system must choose between always returning a response and preserving a single consistent view of the data.

This is not a permanent choice between only two database categories. Different operations can use different consistency levels. A payment ledger may reject writes when quorum is unavailable, while a product recommendation feed may serve an older result.

Useful questions are concrete:

- Must a user read their own latest write?
- Can two users temporarily see different values?
- Can conflicts be merged later?
- What happens when quorum is unavailable?

Name the anomaly the product can tolerate instead of saying merely “eventual consistency.”

