import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type {LoadContext, Plugin} from '@docusaurus/types';

interface LatestBlogData {
  title: string;
  description: string;
  permalink: string;
  date: string;
}

export default function latestBlogPlugin(
  _context: LoadContext,
): Plugin<LatestBlogData | null> {
  return {
    name: 'latest-blog-plugin',

    async loadContent() {
      const blogDir = path.join(process.cwd(), 'blog');

      const posts = fs
        .readdirSync(blogDir)
        .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
        .sort()
        .reverse();

      if (posts.length === 0) {
        return null;
      }

      const latestFile = posts[0];

      const fileContent = fs.readFileSync(
        path.join(blogDir, latestFile),
        'utf8',
      );

      const {data} = matter(fileContent);

      const slug =
        typeof data.slug === 'string'
          ? data.slug
          : latestFile
              .replace(/^\d{4}-\d{2}-\d{2}-/, '')
              .replace(/\.mdx?$/, '');

      return {
        title: (data.title as string) ?? 'Untitled',
        description: (data.description as string) ?? '',
        date: latestFile.substring(0, 10),
        permalink: `/blog/${slug}`,
      };
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
}