import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import LatestBlog from '@site/src/components/Latest_blog/latest_blog';
const phases = [
  {icon: '01', title: 'Foundations', text: 'Scalability, networking, operating systems, and the language of reliability.', to: '/docs/phase-1-foundations/scalability'},
  {icon: '02', title: 'Data layer', text: 'Databases, storage internals, replication, sharding, and consistency.', to: '/docs/phase-2-data-layer/databases/sql'},
  {icon: '03', title: 'Scaling', text: 'Caches, load balancers, APIs, queues, and backpressure.', to: '/docs/phase-3-scaling/caching/cache-aside'},
  {icon: '04', title: 'Distributed systems', text: 'Consensus, clocks, discovery, microservices, and communication patterns.', to: '/docs/phase-4-distributed-systems/basics/consensus'},
  {icon: '05', title: 'Reliability', text: 'Retries, failover, observability, recovery, and security.', to: '/docs/phase-5-reliability/fault-tolerance/retry'},
  {icon: '06', title: 'Advanced concepts', text: 'Search, cloud primitives, design patterns, and engineering trade-offs.', to: '/docs/phase-6-advanced/search-systems/elasticsearch'},
  {icon: '07', title: 'Case studies', text: 'Put the pieces together in realistic end-to-end system designs.', to: '/docs/phase-7-case-studies/beginner/url-shortener'},
  {icon: '08', title: 'Interview preparation', text: 'Requirements, estimation, APIs, bottlenecks, and mock interviews.', to: '/docs/phase-8-interview-prep/requirement-gathering'},
];

export default function Home(): ReactNode {
  return (
    <Layout title="Practical system design" description="Clear guides, diagrams, and case studies for learning scalable system design.">
      <header className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>A PRACTICAL ENGINEERING FIELD GUIDE</span>
          <Heading as="h1">Understand the trade-offs.<br/><span>Design with confidence.</span></Heading>
          <p className={styles.lead}>A growing, searchable knowledge base for engineers who want to reason about scalable systems, not memorize diagrams.</p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">Start learning →</Link>
          <Link className={`button button--outline button--secondary button--lg ${styles.readBlogBtn}`}to="/blog"> Read the blog</Link>        
            </div>
          <div className={styles.systemSketch} aria-label="Client requests flowing through a scalable system">
            <div><b>Clients</b><small>requests</small></div><i>→</i><div className="container"><b>Gateway</b><small>route</small></div><i>→</i><div className="container"><b>Services</b><small>compute</small></div><i>→</i><div className="container"><b>Data</b><small>persist</small></div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.topicSection}>
          <div className="container">
            <div className={styles.sectionHeading}><span>LEARNING PATH</span><Heading as="h2">Build your mental model</Heading></div>
            <div className={styles.grid}>{phases.map((phase) => (
              <Link className={styles.card} to={phase.to} key={phase.title}>
                <span>{phase.icon}</span><Heading as="h3">{phase.title}</Heading><p>{phase.text}</p><b>Explore phase →</b>
              </Link>
            ))}</div>
          </div>
        </section>
        <LatestBlog latestClass={styles.latest} />
      </main>
    </Layout>
  );
}
