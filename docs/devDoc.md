<!-- ---
sidebar_position: 4
--- -->

# 前端代码规范

## 添加typescript
* TypeScript 会在编译代码时，进行严格的静态类型检查。意味着可以在编码阶段发现存在的隐患，而不用把隐患带到线上去
* TypeScript 会包括来自 ES6 和未来提案中的特性，比如异步操作和装饰器，也会从其他语言借鉴特性，比如接口和抽象类
* TypeScript 编译成 JavaScript 后，可以在任何浏览器/操作系统上运行。无需任何运行时的额外开销
* TypeScript 接口定义后,可以充分利用 VSCode 的自动补全/自动提示功能.因此可以直接代替文档，同时可以提高开发效率，降低维护成本

```js
yarn add typescript   --dev
```

然后在 tsconfig.json 文件中进行 TypeScript 配置。

```js
{
  "compilerOptions": {
    "module": "esnext",
    "target": "esnext",
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "jsx": "react-jsx",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    "noEmit": true
  },
  "include": [
    "src/**/*",
    "typings/**/*",
    "config/**/*",
    ".eslintrc.js",
    ".stylelintrc.js",
    ".prettierrc.js"
  ],
  "exclude": ["node_modules", "build", "dist"]
}

```

具体详细配置参照ts官网： https://www.tslang.cn/index.html

## 添加 Eslint 代码规范校验

## 添加 Prettier 代码自动格式化工具

## 添加 EditorConfig 代码风格统一工具

## Commit Message 规范
