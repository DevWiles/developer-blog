export type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  link: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '个人作品集网站',
    description: '使用 React、TypeScript 和 Tailwind CSS 构建的单页个人作品集网站。',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageUrl: 'https://via.placeholder.com/600x360?text=Portfolio',
    link: '#',
  },
]

