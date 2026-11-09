// lib/projects-db.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'My First Open Source Contribution',
    description: 'A bug fix contributed to a popular library.',
    type: 'opensource',
    technologies: ['TypeScript', 'React'],
    link: 'https://github.com/example/repo',
  },
  {
    id: 2,
    title: 'Database Design Final Project',
    description: 'An ER diagram and normalized schema for a library system.',
    type: 'school',
    technologies: ['PostgreSQL', 'SQL'],
  },
  {
    id: 3,
    title: 'Frontend Portfolio Website',
    description: 'A modern portfolio created using Next.js 16, React 19, and Tailwind CSS.',
    type: 'school',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com/hgregori/wdd430-portfolio',
  },
  {
    id: 4,
    title: 'Accessible Component Library',
    description: 'Accessible UI components complying with WCAG 2.1 AA standards.',
    type: 'opensource',
    technologies: ['React', 'ARIA', 'CSS'],
    link: 'https://github.com/example/accessible-components',
  },
];

export function getProjects(type?: string | null): Project[] {
  if (type) {
    return projects.filter((p) => p.type === type);
  }
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((p) => p.id === id) ?? null;
}

