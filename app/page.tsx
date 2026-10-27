import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Software Dev',
    description: 'A full-stack Next.js app for managing products.',
    technologies: ['node.js', 'react', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/hgregori/wdd430-portfolio'
  },
  {
    title: 'Weather Everyday',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['react', 'javascript', 'css', 'apis', 'html'],
    link: 'https://github.com/hgregori/weather-everyday'
  }
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