import ProjectList from '@/components/ProjectList';
import { Project } from '@/lib/projects-db';

const projects: Project[] = [
  {
    id: 101,
    title: 'Software Dev',
    description: 'A full-stack Next.js app for managing products.',
    type: 'school',
    technologies: ['node.js', 'react', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/hgregori/wdd430-portfolio',
  },
  {
    id: 102,
    title: 'Weather Everyday',
    description: 'A React app that fetches and displays weather data.',
    type: 'school',
    technologies: ['react', 'javascript', 'css', 'apis', 'html'],
    link: 'https://github.com/hgregori/weather-everyday',
  },
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
