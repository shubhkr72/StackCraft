import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {usePluginData} from '@docusaurus/useGlobalData';

type LatestBlog = {
  title: string;
  description: string;
  permalink: string;
  date: string;
};

interface Props {
  latestClass: string;
}

export default function LatestBlog({ latestClass }: Props) {
  const latest = usePluginData('latest-blog-plugin') as LatestBlog | null;

  if (!latest) return null;

  return (
    <section className={latestClass}>
      <div className="container">
        <span>LATEST FROM THE BLOG</span>

        <Heading as="h2">{latest.title}</Heading>

        <p>{latest.description}</p>

        <Link to={latest.permalink}>
          Read post →
        </Link>
      </div>
    </section>
  );
}