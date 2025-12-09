import {themes as prismThemes} from 'prism-react-renderer';

const announcementBar = {
  //id: '',   // def: announcement-bar
  content: 'annunsment',  //HTML will be interpolated.
  //backgroundColor: '#000',  //def: #fff
  //color: '#eee',  // def: #000
  isCloseable: true  //def: true
} 

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kevindybeck.com',
  tagline: 'System developer',
  favicon: 'img/favicon.ico',

  url: 'https://kevindybeck.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // { sidebarPath: './sidebars.js', },
        theme: { customCss: './src/css/custom.css' },
        blog: false,
                /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /**
       * The meta image URL for the site.
       * Relative to your site's "static" directory.
       * Cannot be SVGs. Can be external URLs too.
       * Default image that will be used for your meta tag,
       * in particular og:image and twitter:image
       * "Replace with your project's social card"
      */
      //image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        //respectPrefersColorScheme: true,
        //disableSwitch: true,
        defaultMode: 'dark',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Home Logo',
          src: 'img/home.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },*/
          {to: '/resume', label: 'Resumé', position: 'left'},
          //{type: 'localeDropdown', position: 'right'},
          {
            href: 'mailto:kevindybeck@yahoo.com',
            label: 'Email',
            position: 'right',
          },
          {
            href: 'https://github.com/ruckel',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://linkedin.com/in/kevindybeck',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      //announcementBar,
    }),
  // https://docusaurus.io/docs/api/docusaurus-config#future
  future: { v4: true, /* Improve compatibility with the upcoming Docusaurus v4 */ },
};

const footer = {
        style: 'dark',
        //copyright: ``,
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        links: [
          {
            //title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
               },
              {
                label: 'seo (external)',
                to: 'https://docusaurus.io/docs/seo',
               },
              {
                label: 'seo blog post',
                to: ' #https://johnnyreilly.com/how-we-fixed-my-seo#conclusion',
               },
             ],
          }
        ]
      }

  const gitHubPagesConf = {
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  }

export default config;
