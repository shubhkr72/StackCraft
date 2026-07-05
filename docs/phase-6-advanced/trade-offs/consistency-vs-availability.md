---
title: Consistency vs Availability
description: Choosing behavior when a distributed system cannot reach every replica.
---

# Consistency vs Availability

During a network partition, a replicated service must choose whether to reject some operations to preserve a single agreed value, or continue serving operations that may temporarily disagree.

## Prefer consistency when

- accepting conflicting writes could lose money, inventory, or ownership;
- callers can safely retry after a temporary failure;
- stale reads would cause an invalid decision.

## Prefer availability when

- the experience must remain responsive despite partial failure;
- conflicts are rare or can be merged later;
- slightly stale data is acceptable, as with feeds, counters, or presence.

This is rarely one system-wide switch. A checkout service may require consistent inventory reservation while its recommendations and analytics remain eventually consistent. State the choice per operation, define the failure behavior, and explain how the system repairs divergence.

