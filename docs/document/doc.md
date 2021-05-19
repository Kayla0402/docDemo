---
sidebar_position: 2
---

# 项目使用说明

## 页面配置
项目docs文件夹用于存放所有的页面内容，关于页面配置请在docs文件夹下配置
### 左侧菜单配置(一级+二级)
* 左侧一级+二级菜单要配置在项目根目录下的docs文件夹中。
* 如果左侧一级菜单下有多个二级菜单，则需要创建一个文件夹，如果左侧的一级菜单没有任何的二级子菜单，则只需要创建单个的.md文件即可。
* 对于左侧一级菜单的排序，
  + 对于文件夹形式，可以在文件夹中创建`_category_.json`文件，设置一级菜单展示的标题和排序位次
    ```js
    // 多文件一级菜单配置
    {
      "label": "文档",
      "position": 1
    }
    // 一级菜单及多文件的二级菜单配置
    ---
      sidebar_position: 2
    ---
    ```
  + 对于仅是一级菜单的文件来说，也是同样的配置方法，只不过是该配置项写在单文件的最上边，不需要新建`_category_.json`文件.
* 侧边栏还可以通过 **sidebars.js** 文件配置，这样在每个单独的文件夹下就不需要配置`sidebar_position：1`了

```js
module.exports = {
  docs: {
    'Getting Started': [
      'what-is-docsearch',
      'how-does-it-work',
      'who-can-apply',
      'apply',
    ],
    'Adding DocSearch to your UI': ['dropdown', 'styling', 'behavior'],
    'Requirements, tips, FAQ': [
      'required-configuration',
      'tips',
      'faq',
      'integrations',
    ],
    'Under the Hood': [
      'scraper',
      'inside-the-engine',
      'config-file',
      'how-do-we-build-an-index',
      'run-your-own',
    ],
  },
};
```

## 首页配置
在 **src** 文件夹的 **page** 文件夹中可以创建如首页，展示页等独立页面，并通过 `http://localhost:3000/文件名` 进行访问。 包括首页文件也放在 **src** 文件夹下,创建页面时推荐新建一个页面文件夹。

## static文件夹用于存放一些静态文件
