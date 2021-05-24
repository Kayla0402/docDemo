/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    'sandbox',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['document/doc', 'document/功能介绍'],
    },
    'devDoc',
    'intro'
  ],
  api: [
    {
      type: 'category',
      label: 'api/Test',
      collapsed: false,
      items: ['Test/test1', 'Test/test2'],
    }
  ],
};
