import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'StackCraft',
  tagline: 'Build systems that survive the real world.',
  favicon: 'img/favicon.ico',
  url: 'https://stack-craft-eight.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {sidebarPath: './sidebars.ts'},
        blog: {
          showReadingTime: true,
          feedOptions: {type: ['rss', 'atom'], xslt: true},
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  markdown: {mermaid: true},
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'system design, distributed systems, scalability, software architecture'},
      {name: 'Shubham Sebrin', content: 'System Design Notes'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'StackCraft',
      logo: {alt: 'System Design Notes logo', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'systemDesignSidebar', position: 'left', label: 'Learn'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/phase-7-case-studies/beginner/url-shortener', label: 'Case Studies', position: 'left'},
        {to: '/docs/contribution', label: 'Contribution', position: 'left'},
        {to: '/docs/about', label: 'About', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Learn', items: [
          {label: 'Start here', to: '/docs/intro'},
          {label: 'Fundamentals', to: '/docs/phase-1-foundations/scalability'},
        ]},
        {title: 'Explore', items: [
          {label: 'Case studies', to: '/docs/phase-7-case-studies/beginner/url-shortener'},
          {label: 'Interview checklist', to: '/docs/phase-8-interview-prep/checklist'},
          {label: 'All tags', to: '/blog/tags'},
        ]},
        {title: 'Updates', items: [
          {label: 'Blog', to: '/blog'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shubham Sebrin. Built for curious engineers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'python', 'bash', 'json', 'sql'],
    },
    mermaid: {theme: {light: 'neutral', dark: 'dark'}},
  } satisfies Preset.ThemeConfig,
};

export default config;
