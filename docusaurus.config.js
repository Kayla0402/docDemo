/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '1体支付',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    // algolia: {
    //   apiKey: '25626fae796133dc1e734c6bcaaeac3c',
    //   indexName: 'docsearch',
    // },
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'document/doc',
          position: 'left',
          label: '文档',
        },
        // {
        //   to: 'exam/',
        //   activeBasePath: 'hola',
        //   label: 'exam',
        //   position: 'left'
        // },
        {
          label: 'API',
          href: 'https://www.baidu.com/',
        },
        // {
        //   docId: 'intro2',
        //   position: 'left',
        //   label: 'API',
        // },
        // {type: 'doc',
        // docId: '/Test/test1',
        // // to: '/Test', 
        // label: 'Test', position: 'left'},
        // {
        //   type: 'exam',
        //   docId: 'hello', 
        //   // to: 'hola',
        //   label: 'exam',
        //   position: 'left'
        // },
        // {
        //   docId: 'intro4',
        //   position: 'left',
        //   label: '案例展示中心',
        // },
        {
          // docId: 'intro5',
          position: 'right',
          label: '个人中心',
          href: 'https://github.com/',
        },
        {
          type: 'search',
          position: 'right',
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '新手入门',
          items: [
            {
              label: '新手指南',
              to: '/docs/intro6',
            },
            {
              label: '合作攻略',
              to: '/docs/intro5',
            },
            {
              label: '平台规则',
              to: '/docs/intro4',
            }
          ],
        },
        {
          title: '服务支持',
          items: [
            {
              label: '服务商平台',
              to: '/docs/intro2',
            },
            {
              label: '开放接口',
              to: '/docs/intro3',
            }
          ],
        },
        {
          title: '客户帮助',
          items: [
            {
              label: '在线问答',
              to: '/docs/intro7',
            }
          ],
        },
        {
          title: '更多合作',
          items: [
            {
              label: '安全保障',
              to: '/docs/intro9',
            },
            {
              label: '技术支持',
              to: '/docs/intro0',
            },
            {
              label: '其他业务',
              to: '/docs/intro1',
            }
          ],
        }
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // exam: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        // blog: {
        //   // showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
