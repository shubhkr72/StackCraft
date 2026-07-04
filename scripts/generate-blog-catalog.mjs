import {mkdir, writeFile} from 'node:fs/promises';

const data = `
Clarifying System Requirements|requirements-first|fundamentals|interview|Separate essential user actions from optional scope, then rank latency, availability, consistency, durability, security, and cost.
Capacity Estimation Without False Precision|capacity-estimation|fundamentals|performance|Estimate peak requests, object sizes, retention, storage growth, and bandwidth with units and stated assumptions.
Latency, Throughput, and Concurrency|latency-throughput-concurrency|fundamentals|performance|Latency measures time, throughput measures completed work, and concurrency measures work in flight; optimize the percentile users feel.
Scale Up or Scale Out?|vertical-horizontal-scaling|fundamentals|architecture|Vertical scaling is simple but bounded; horizontal scaling raises capacity while adding partitioning and coordination.
Why Stateless Services Scale Easily|stateless-services|architecture|fundamentals|Keep durable state outside request handlers so any healthy instance can serve any request and terminate safely.
DNS in a Global Architecture|dns-global-routing|networking|reliability|Use health-aware records and regional endpoints, while designing for recursive resolvers that retain stale answers.
HTTP Keep-Alive and Multiplexing|http-connections|networking|performance|Reuse connections to avoid handshakes and measure DNS, connect, TLS, server, and transfer time separately.
Designing with a CDN|cdn-design|networking|performance|Choose cache keys and freshness deliberately, version immutable assets, and never cache private responses across identities.
Reverse Proxy vs API Gateway|proxy-api-gateway|networking|architecture|A proxy routes and terminates TLS; a gateway also owns cross-cutting API policy such as authentication and rate limits.
Choosing a Load-Balancing Algorithm|load-balancing-algorithms|networking|performance|Compare round robin, least connections, weighted routing, and consistent hashing against real request cost.
Relational or NoSQL?|relational-nosql|databases|architecture|Start from access patterns, invariants, and growth rather than database labels; relational storage is a strong default.
Database Indexes as a Trade-off|database-indexes|databases|performance|Indexes speed selected reads while consuming storage and increasing write work; validate them with query plans.
Transaction Isolation in Practice|transaction-isolation|databases|distributed-systems|Name the anomaly your invariant cannot tolerate, then choose isolation, constraints, or explicit locking.
Replication and Replica Lag|database-replication|databases|reliability|Replication improves availability and read capacity but requires explicit read freshness and failover semantics.
Sharding Without Hotspots|database-sharding|databases|distributed-systems|Choose a high-cardinality shard key used by common queries and model hot tenants before partitioning.
Consistent Hashing Explained|consistent-hashing|distributed-systems|architecture|A hash ring limits key movement during membership changes; virtual nodes improve balance but do not solve hot keys.
Cache-Aside, Write-Through, or Write-Behind?|cache-patterns|performance|architecture|Select cache ownership from acceptable staleness, write latency, failure behavior, and source of truth.
Cache Invalidation You Can Explain|cache-invalidation|performance|distributed-systems|Use bounded TTLs, explicit invalidation, versioned keys, or change events according to product consistency needs.
Bloom Filters for Expensive Misses|bloom-filters|databases|performance|A Bloom filter can prove absence cheaply, while possible matches still verify against the source of truth.
Object Storage and Large Files|object-storage|databases|architecture|Store blobs in object storage, metadata in a database, and deliver immutable versions through a CDN.
CAP Theorem Without the Slogan|cap-theorem|distributed-systems|fundamentals|During a partition, define per operation whether to reject work for consistency or accept divergence for availability.
Quorums and Tunable Consistency|quorum-consistency|distributed-systems|databases|Read and write quorums create replica overlap, but still require versioning, repair, and conflict handling.
Leader Election and Fencing Tokens|leader-election|distributed-systems|reliability|Prevent expired leaders from writing by validating monotonically increasing fencing tokens at storage.
Clocks and Distributed Ordering|distributed-clocks|distributed-systems|fundamentals|Use monotonic clocks for duration and logical versions for causality; wall-clock timestamps do not prove order.
Idempotency for Safe Retries|idempotency|distributed-systems|reliability|Bind an idempotency key to request identity and persist its result beside the state-changing operation.
Message Queue Delivery Contracts|message-queue-delivery|distributed-systems|architecture|Assume duplicate delivery, make consumers idempotent, bound retries, and provide dead-letter replay tooling.
Event Streams and Consumer Groups|event-streaming|distributed-systems|architecture|Partition by the required ordering key and treat event schemas, offsets, replay, and retention as durable contracts.
Saga Transactions Across Services|saga-pattern|distributed-systems|architecture|Coordinate local transactions with compensating business actions and model every intermediate failure state.
The Transactional Outbox|transactional-outbox|distributed-systems|databases|Commit domain data and an outbox record together, then publish asynchronously with duplicate-safe consumers.
Backpressure Prevents Collapse|backpressure|reliability|performance|Use bounded queues, admission control, and concurrency limits so overload fails fast instead of consuming all memory.
Modular Monolith Before Microservices|modular-monolith|architecture|fundamentals|Enforce business boundaries inside one deployable system and distribute only for a measured scaling or ownership need.
Versioning APIs Safely|api-versioning|architecture|reliability|Prefer additive changes, contract tests, usage telemetry, and explicit deprecation windows before creating a new version.
REST or gRPC?|rest-vs-grpc|architecture|networking|Choose based on client boundaries, interoperability, streaming, schema tooling, debugging, and latency requirements.
Service Discovery in Dynamic Systems|service-discovery|architecture|networking|Map logical names to healthy instances with defined readiness, draining, membership TTL, and registry failure behavior.
Rate Limiting Algorithms|rate-limiting|architecture|security|Compare token buckets, leaky buckets, and sliding windows; key limits by identity, tenant, endpoint, or work cost.
Timeouts and Retries Without Storms|timeouts-retries|reliability|distributed-systems|Propagate deadlines and retry only transient idempotent work with exponential backoff, jitter, and strict budgets.
Circuit Breakers and Bulkheads|circuit-breakers|reliability|architecture|Stop persistent failing calls and isolate resource pools so one dependency or workload cannot consume everything.
SLIs, SLOs, and Error Budgets|slos-error-budgets|reliability|performance|Measure user-visible successful events, set a target, and connect error-budget burn to release decisions.
Logs, Metrics, and Traces|observability-signals|reliability|architecture|Use metrics for trends, logs for events, traces for request flow, and correlation identifiers across all three.
Disaster Recovery with RPO and RTO|disaster-recovery|reliability|databases|Define acceptable data loss and restore time, then prove them through isolated backups and regular recovery drills.
Authentication and Authorization|authentication-authorization|security|architecture|Validate identity at trusted boundaries and enforce resource-level permission close to business data.
Encryption and Secret Management|encryption-secrets|security|reliability|Use TLS, managed keys, short-lived credentials, centralized secret storage, rotation, and auditable access.
Multi-Tenant Data Isolation|multi-tenant-isolation|security|databases|Carry trusted tenant context through storage, caches, jobs, logs, quotas, and every authorization decision.
Case Study: Design a URL Shortener|design-url-shortener|case-study|databases|Create unique codes, cache the read-heavy redirect path, and process click analytics asynchronously.
Case Study: Design a Chat System|design-chat-system|case-study|distributed-systems|Combine persistent connections, per-conversation ordering, offline delivery, acknowledgements, and reconnect logic.
Case Study: Design a News Feed|design-news-feed|case-study|architecture|Use hybrid fan-out to balance write amplification, read latency, ranking freshness, and celebrity accounts.
Case Study: Design Video Streaming|design-video-streaming|case-study|networking|Upload to object storage, transcode asynchronously, package segments, and deliver adaptive renditions through a CDN.
Case Study: Design Ride Hailing|design-ride-hailing|case-study|distributed-systems|Partition live locations geographically and protect the trip state machine from double assignment.
Case Study: Design a Payment System|design-payment-system|case-study|security|Use idempotent commands, an immutable ledger, explicit state transitions, and external-provider reconciliation.
A 45-Minute Interview Plan|system-design-interview-plan|interview|fundamentals|Timebox scope, estimates, APIs, a complete request path, the unique deep dive, failures, and final trade-offs.
`.trim().split('\n').map(line => line.split('|'));

const prompts = {
  fundamentals: ['What requirement makes this necessary?', 'Which assumption changes the decision?', 'What simple option works first?'],
  networking: ['Where is the latency spent?', 'What is cached or retried?', 'How does regional failure change routing?'],
  databases: ['What are the exact reads and writes?', 'Which invariant needs protection?', 'How does data grow and recover?'],
  'distributed-systems': ['What happens during a partition?', 'Can work repeat or reorder?', 'How is state repaired?'],
  architecture: ['Which boundary owns the decision?', 'What is synchronous?', 'What justifies the extra component?'],
  reliability: ['How does it fail?', 'How quickly is failure detected?', 'What user outcome defines recovery?'],
  security: ['Which identity and resource are involved?', 'Where is trust established?', 'How is access revoked and audited?'],
  'case-study': ['What is the dominant request path?', 'Where is the unique bottleneck?', 'Which work can be asynchronous?'],
  performance: ['What percentile is required?', 'Which resource saturates first?', 'What happens beyond capacity?'],
  interview: ['Which assumptions are explicit?', 'Is every component tied to a requirement?', 'What trade-off should be discussed?'],
};

await mkdir('blog', {recursive: true});
const start = new Date('2026-05-15T00:00:00Z');
for (let i = 0; i < data.length; i++) {
  const [title, slug, tag, tag2, focus] = data[i];
  const date = new Date(start); date.setUTCDate(start.getUTCDate() + i);
  const day = date.toISOString().slice(0, 10);
  const questions = prompts[tag].map(q => `- ${q}`).join('\n');
  const body = `---\ntitle: "${title}"\ndescription: "${focus}"\nauthors: [editorial]\ntags: [${tag}, ${tag2}]\ndate: ${day}\n---\n\n${focus}\n\n<!-- truncate -->\n\n## Design lens\n\nTreat **${title}** as a decision rather than a box to add to a diagram. Begin with the workload and correctness requirement, choose the smallest viable mechanism, and define what evidence would make you change it.\n\n## Questions to ask\n\n${questions}\n\n## Common failure mode\n\nThe usual mistake is adopting the pattern without naming its operational cost or failure semantics. Record the decision, reason, alternative, consequence, owner, and the metric that signals reassessment. Then test the unhappy path—not only the successful request.\n`;
  await writeFile(`blog/${day}-${slug}.md`, body, 'utf8');
}
console.log(`Generated ${data.length} technical blog posts.`);
