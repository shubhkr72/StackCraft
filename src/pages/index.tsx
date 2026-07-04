import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const topics = [
  {icon: '01', title: 'Foundations', text: 'Requirements, estimation, APIs, and the language of scale.', to: '/docs/category/system-design-fundamentals'},
  {icon: '02', title: 'Building blocks', text: 'Caches, load balancers, queues, databases, and more.', to: '/docs/category/core-building-blocks'},
  {icon: '03', title: 'Case studies', text: 'Put the pieces together in realistic end-to-end designs.', to: '/docs/category/case-studies'},
];

export default function Home(): ReactNode {
  return (
    <Layout title="Practical system design" description="Clear guides, diagrams, and case studies for learning scalable system design.">
      <header className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>A PRACTICAL ENGINEERING FIELD GUIDE</span>
          <Heading as="h1">Understand the trade-offs.<br/><span>Design with confidence.</span></Heading>
          <p className={styles.lead}>A growing, searchable knowledge base for engineers who want to reason about scalable systems—not memorize diagrams.</p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">Start learning →</Link>
            <Link className="button button--outline button--secondary button--lg" to="/blog">Read the blog</Link>
          </div>
          <div className={styles.systemSketch} aria-label="Client requests flowing through a scalable system">
            <div><b>Clients</b><small>requests</small></div><i>→</i><div><b>Gateway</b><small>route</small></div><i>→</i><div><b>Services</b><small>compute</small></div><i>→</i><div><b>Data</b><small>persist</small></div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.topicSection}>
          <div className="container">
            <div className={styles.sectionHeading}><span>LEARNING PATH</span><Heading as="h2">Build your mental model</Heading></div>
            <div className={styles.grid}>{topics.map((topic) => (
              <Link className={styles.card} to={topic.to} key={topic.title}>
                <span>{topic.icon}</span><Heading as="h3">{topic.title}</Heading><p>{topic.text}</p><b>Explore topic →</b>
              </Link>
            ))}</div>
          </div>
        </section>
        <section className={styles.latest}>
          <div className="container"><span>LATEST CASE STUDY</span><Heading as="h2">Design a URL shortener</Heading><p>Start with a small API, then reason through identifiers, storage, caching, redirection latency, and failure modes.</p><Link to="/docs/case-studies/url-shortener">Open the design →</Link></div>
        </section>
      </main>
    </Layout>
  );
}
