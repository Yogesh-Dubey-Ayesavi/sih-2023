// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EsgEdu',
  tagline: 'Nurturing Change: Gateway to ESG Awareness',
  favicon: 'img/logo.png.ico',

  // Set the production url of your site here
  url: 'https://esg.edu.ayesavi.in/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ayesavi', // Usually your GitHub org/user name.
  projectName: 'sih-template', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag : {
        trackingID : "G-ZJV2GV7P1F",
        anonymizeIP:false,
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Yogesh-Dubey-Ayesavi/sih-2023/tree/main/client',
        },
        blog:false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ESG-Edu',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png.png',
        },
        items: [
  
          {
            type: 'docSidebar',
            sidebarId: 'environmentSideBar',
            position: 'left',
            label: 'Environment',
          },
          {
            type: 'docSidebar',
            sidebarId: 'socialSideBar',
            position: 'left',
            label: 'Social',
          },
          {
            type: 'docSidebar',
            sidebarId: 'governanceSideBar',
            position: 'left',
            label: 'Governance',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },

        
          {
            href: 'https://github.com/yogesh-dubey-ayesavi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Environmental',
                to: '/docs/environmental',
              }, {
                label: 'Social',
                to: '/docs/social',
              }, {
                label: 'Governance',
                to: '/docs/governance',
              },
            ],
          },
          {
            title: 'Community',
            items: [
             
            ],
          },
          {
            title: 'More',
            items: [
            
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ESG, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
