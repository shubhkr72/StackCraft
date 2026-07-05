---
title: Full Text Search
description: How search engines turn text into fast, relevant results.
---

# Full Text Search

Full-text search finds documents by their meaning-bearing terms rather than by exact field equality. A typical indexing pipeline normalizes text, tokenizes it, removes or down-weights common words, and stores each term in an inverted index.

## Read path

1. Parse and normalize the query using the same rules as the indexer.
2. Fetch posting lists for its terms.
3. Intersect or merge candidates based on the query operator.
4. Score candidates using signals such as term frequency, field importance, freshness, and popularity.
5. Return a small ranked page and a stable cursor for the next page.

## Design decisions

- **Freshness:** synchronous indexing improves read-after-write behavior but adds write latency; asynchronous indexing is faster and easier to absorb in bursts.
- **Sharding:** route by document ID for balanced writes, or by tenant when isolation matters more.
- **Ranking:** begin with BM25-style lexical relevance before adding learned ranking signals.
- **Failure handling:** keep the source database authoritative and make the search index rebuildable.

The central trade-off is simple: richer analysis and ranking improve relevance, but increase indexing cost, operational complexity, and result latency.

