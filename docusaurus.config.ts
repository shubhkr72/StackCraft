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
          blogSidebarCount: 'ALL',
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
  plugins: [
    require.resolve('./plugins/latestBlogPlugin'),
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
        {title: 'Build for Developers', items: [
          {html: `
            <div style="line-height:1.6">
              <strong>StackCraft</strong> is an open-source platform for mastering
              System Design through structured roadmaps and real-world case studies.
            </div>
          `},
        ]},

        {title: 'Learn', items: [
          {label: 'Getting Started', to: '/docs/intro'},
          {label: 'Fundamentals', to: '/docs/phase-1-foundations/scalability'},
          {label: 'Case Studies', to: '/docs/phase-7-case-studies/beginner/url-shortener'},
          {label: 'Interview Prep', to: '/docs/phase-8-interview-prep/checklist'},
        ]},

        {title: 'Resources', items: [
          {label: 'Blog', to: '/blog'},
          {label: 'All Tags', to: '/blog/tags'},
          {label: 'GitHub', href: 'https://github.com/shubhkr72/stackcraft'},
          {label: 'Contributing', href: 'https://github.com/shubhkr72/StackCraft/blob/main/docs/contribution.md'},
        ]},

        {title: 'GitHub', items: [
          {html: '<a href="https://github.com/shubhkr72/stackcraft" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/shubhkr72/stackcraft?style=social" alt="GitHub Stars"/></a>'},
          {html: '<a href="https://github.com/shubhkr72/stackcraft" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/shubhkr72/stackcraft?style=social" alt="GitHub Forks"/></a>'},
          {html: '<a href="https://github.com/shubhkr72/stackcraft" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/shubhkr72/stackcraft" alt="Contributors"/></a>'},
          {label: 'Star StackCraft →', href: 'https://github.com/shubhkr72/stackcraft'},
        ]},

        {title: 'Support', items: [
          {html: 'Help keep StackCraft free for everyone.'},
          // {label: 'Sponsor', href: 'https://github.com/sponsors/shubhkr72'},
          {html: '<a href="#top">↑ Back to top</a>'},
        ]},
      ],

      copyright: `
        © ${new Date().getFullYear()} <strong>StackCraft</strong>.
        Built with ❤️ for the developer community.
      `
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
