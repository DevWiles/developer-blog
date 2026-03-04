export type SkillCategory = 'frontend' | 'backend' | 'tools'

export type Skill = {
  id: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced'
  category: SkillCategory
}

export const skills: Skill[] = [
  { id: 'react', name: 'React', level: 'advanced', category: 'frontend' },
  { id: 'ts', name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
  { id: 'node', name: 'Node.js', level: 'intermediate', category: 'backend' },
  { id: 'express', name: 'Express', level: 'intermediate', category: 'backend' },
  { id: 'git', name: 'Git', level: 'advanced', category: 'tools' },
  { id: 'vite', name: 'Vite', level: 'advanced', category: 'tools' },
]

