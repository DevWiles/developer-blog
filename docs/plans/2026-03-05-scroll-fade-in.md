# 滚动触发渐进式淡入 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为 About、Skills、Projects、Contact 四个 section 添加滚动触发的整体淡入动画效果。

**Architecture:** 复用已有的 `useIntersectionObserver` hook，在每个 section 上挂载 ref，当 section 进入视口时切换 Tailwind CSS class，触发 `opacity` + `translateY` 的 CSS 过渡动画。Hero 和 Footer 不做处理。

**Tech Stack:** React 19, TypeScript, Tailwind CSS v3, IntersectionObserver API (via 已有 hook)

---

### Task 1: 修改 About.tsx

**Files:**
- Modify: `src/components/About.tsx`

**Step 1: 在 About.tsx 中引入 hook**

在文件顶部添加 import：

```tsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
```

**Step 2: 在组件内调用 hook**

在 `const About = () => {` 后的函数体首行添加：

```tsx
const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
```

**Step 3: 给 section 绑定 ref 并添加动画 class**

将：
```tsx
<section
  id="about"
  className="bg-background px-4 py-20"
>
```
改为：
```tsx
<section
  id="about"
  ref={ref}
  className={`bg-background px-4 py-20 transition-all duration-700 ease-out ${
    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
```

**Step 4: 在浏览器中验证**

运行 `npm run dev`，刷新页面后向下滚动到 About 区块，确认从下方淡入出现。

**Step 5: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add scroll fade-in animation to About section"
```

---

### Task 2: 修改 Skills.tsx

**Files:**
- Modify: `src/components/Skills.tsx`

**Step 1: 在 Skills.tsx 中引入 hook**

在文件顶部已有 import 之后添加：

```tsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
```

**Step 2: 在 Skills 组件内调用 hook**

在 `const Skills = () => {` 后的 `const [activeCategory, ...]` 之前添加：

```tsx
const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
```

**Step 3: 给 section 绑定 ref 并添加动画 class**

将：
```tsx
<section
  id="skills"
  className="bg-background px-4 py-20"
>
```
改为：
```tsx
<section
  id="skills"
  ref={ref}
  className={`bg-background px-4 py-20 transition-all duration-700 ease-out ${
    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
```

**Step 4: 验证 Skills 交互不受影响**

确认：
- 技能卡片 hover 放大效果正常
- 分类 tab（全部/前端/后端/工具）切换正常

**Step 5: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "feat: add scroll fade-in animation to Skills section"
```

---

### Task 3: 修改 Projects.tsx

**Files:**
- Modify: `src/components/Projects.tsx`

**Step 1: 在 Projects.tsx 中引入 hook**

```tsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
```

**Step 2: 在 Projects 组件内调用 hook**

```tsx
const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
```

**Step 3: 给 section 绑定 ref 并添加动画 class**

找到 Projects 的根 `<section>` 元素，修改为：

```tsx
<section
  id="projects"
  ref={ref}
  className={`... 保留原有 className ... transition-all duration-700 ease-out ${
    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
```

（注意保留原有 className，仅在末尾追加动画相关 class）

**Step 4: 验证**

确认项目卡片正常显示，无布局异常。

**Step 5: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add scroll fade-in animation to Projects section"
```

---

### Task 4: 修改 Contact.tsx

**Files:**
- Modify: `src/components/Contact.tsx`

**Step 1: 在 Contact.tsx 中引入 hook**

```tsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
```

**Step 2: 在 Contact 组件内调用 hook**

```tsx
const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
```

**Step 3: 给 section 绑定 ref 并添加动画 class**

找到 Contact 的根 `<section>` 元素，修改为：

```tsx
<section
  id="contact"
  ref={ref}
  className={`... 保留原有 className ... transition-all duration-700 ease-out ${
    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
```

**Step 4: 验证复制邮箱功能**

点击邮箱地址，确认复制提示消息弹出正常。

**Step 5: 最终整体验收**

从顶部刷新页面，缓慢向下滚动，确认：
- Hero：无动画，直接显示
- About → Skills → Projects → Contact：依次触发淡入
- 各 section 动画只触发一次（滚回去后不重置）

**Step 6: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add scroll fade-in animation to Contact section"
```
