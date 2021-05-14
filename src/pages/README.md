# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# 项目使用说明

## 一级菜单配置
docs文件夹下新建一级菜单文件夹，在该一级菜单文件夹下创建名为 **_category_.json** 文件，该文件用于配置一级菜单的标题名称和菜单的排放顺序。

## 二级菜单配置
在一级菜单文件夹下创建 `.md` 二级文件,该二级文件要配置该二级菜单的排放顺序，和对应的页面内容
```js
// 二级菜单书序设置
---
sidebar_position: 1
---
```
