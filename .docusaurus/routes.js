import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sv/__docusaurus/debug',
    component: ComponentCreator('/sv/__docusaurus/debug', '735'),
    exact: true
  },
  {
    path: '/sv/__docusaurus/debug/config',
    component: ComponentCreator('/sv/__docusaurus/debug/config', 'b74'),
    exact: true
  },
  {
    path: '/sv/__docusaurus/debug/content',
    component: ComponentCreator('/sv/__docusaurus/debug/content', '929'),
    exact: true
  },
  {
    path: '/sv/__docusaurus/debug/globalData',
    component: ComponentCreator('/sv/__docusaurus/debug/globalData', '5e4'),
    exact: true
  },
  {
    path: '/sv/__docusaurus/debug/metadata',
    component: ComponentCreator('/sv/__docusaurus/debug/metadata', '4d6'),
    exact: true
  },
  {
    path: '/sv/__docusaurus/debug/registry',
    component: ComponentCreator('/sv/__docusaurus/debug/registry', 'f04'),
    exact: true
  },
  {
    path: '/sv/__docusaurus/debug/routes',
    component: ComponentCreator('/sv/__docusaurus/debug/routes', '79d'),
    exact: true
  },
  {
    path: '/sv/blog',
    component: ComponentCreator('/sv/blog', 'e79'),
    exact: true
  },
  {
    path: '/sv/blog/archive',
    component: ComponentCreator('/sv/blog/archive', '3cd'),
    exact: true
  },
  {
    path: '/sv/blog/authors',
    component: ComponentCreator('/sv/blog/authors', '241'),
    exact: true
  },
  {
    path: '/sv/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/sv/blog/authors/all-sebastien-lorber-articles', '289'),
    exact: true
  },
  {
    path: '/sv/blog/authors/yangshun',
    component: ComponentCreator('/sv/blog/authors/yangshun', 'f7b'),
    exact: true
  },
  {
    path: '/sv/blog/first-blog-post',
    component: ComponentCreator('/sv/blog/first-blog-post', '492'),
    exact: true
  },
  {
    path: '/sv/blog/long-blog-post',
    component: ComponentCreator('/sv/blog/long-blog-post', 'e4e'),
    exact: true
  },
  {
    path: '/sv/blog/mdx-blog-post',
    component: ComponentCreator('/sv/blog/mdx-blog-post', 'bb4'),
    exact: true
  },
  {
    path: '/sv/blog/tags',
    component: ComponentCreator('/sv/blog/tags', '02a'),
    exact: true
  },
  {
    path: '/sv/blog/tags/docusaurus',
    component: ComponentCreator('/sv/blog/tags/docusaurus', '019'),
    exact: true
  },
  {
    path: '/sv/blog/tags/facebook',
    component: ComponentCreator('/sv/blog/tags/facebook', 'e23'),
    exact: true
  },
  {
    path: '/sv/blog/tags/hello',
    component: ComponentCreator('/sv/blog/tags/hello', '9fc'),
    exact: true
  },
  {
    path: '/sv/blog/tags/hola',
    component: ComponentCreator('/sv/blog/tags/hola', '99d'),
    exact: true
  },
  {
    path: '/sv/blog/welcome',
    component: ComponentCreator('/sv/blog/welcome', '95f'),
    exact: true
  },
  {
    path: '/sv/resume',
    component: ComponentCreator('/sv/resume', 'cb0'),
    exact: true
  },
  {
    path: '/sv/docs',
    component: ComponentCreator('/sv/docs', 'f51'),
    routes: [
      {
        path: '/sv/docs',
        component: ComponentCreator('/sv/docs', '1ab'),
        routes: [
          {
            path: '/sv/docs',
            component: ComponentCreator('/sv/docs', '5c2'),
            routes: [
              {
                path: '/sv/docs/',
                component: ComponentCreator('/sv/docs/', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/sv/',
    component: ComponentCreator('/sv/', 'f3e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
