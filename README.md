# 我的个人博客

欢迎来到我的个人博客！这里记录我的技术分享、学习笔记和项目实践。

---

## 博客目录

1. [关于我](#关于我)
2. [技术栈](#技术栈)
3. [项目分享](#项目分享)
4. [学习笔记](#学习笔记)
5. [文章示例](#文章示例)
6. [多篇文章](#多篇文章)
7. [联系方式](#联系方式)

---

## 关于我

我是一个前端开发爱好者，专注于 React、TypeScript 以及前端工程化。  
> “学无止境，技术日新月异。”

- 年龄：22  
- 城市：四川、成都  
- 爱好：阅读、编程、旅行  

---

## 技术栈

- **前端**：
  - React 18
  - TypeScript
  - Vite / Webpack
  - CSS / SCSS / Tailwind
- **后端**：
  - Node.js
  - Express
  - MySQL
- **工具**：
  - Git / GitHub
  - Docker
  - VS Code

---

## 项目分享

### 项目 1：React + TypeScript Todo 应用

- **功能**：
  1. 添加 / 删除任务
  2. 状态管理使用 Redux Toolkit
  3. 支持本地存储
- **技术亮点**：
  - TypeScript 类型安全
  - React Hooks + 函数组件
  - 响应式布局

### 项目 2：个人博客网站

- **功能**：
  1. Markdown 博客文章渲染
  2. 文章目录自动生成
  3. 代码高亮、复制功能
- **技术亮点**：
  - highlight.js 渲染代码块
  - GitHub 风格 Markdown 样式
  - 可折叠 / 粘性侧边栏 TOC

---

## 学习笔记

### React Hooks

- `useState`：状态管理  
- `useEffect`：副作用处理  
- `useMemo` / `useCallback`：性能优化  

### TypeScript 类型

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}

function greet<T extends { name: string }>(user: T) {
  return `Hello, ${user.name}`;
}

```
# test only !

这篇md是由PAI测试写出，仅为测试文档渲染。