---
sidebar_position: 2
title: Message Queues
---

# Message queues

Queues decouple producers from consumers, absorb short traffic spikes, and move slow work out of the request path.

```mermaid
flowchart LR
  API[API] -->|job| Q[(Queue)]
  Q --> W1[Worker]
  Q --> W2[Worker]
  W1 --> D[(Database)]
  W2 --> D
  Q --> DLQ[(Dead-letter queue)]
```

Assume messages can be delivered more than once unless the technology and end-to-end workflow prove otherwise. Consumers should be idempotent: processing the same message twice must not create duplicate business effects.

Set retry limits and exponential backoff. Move permanently failing messages to a dead-letter queue with enough context to investigate and replay them safely. Monitor queue depth, age of the oldest message, processing rate, and failure rate.

