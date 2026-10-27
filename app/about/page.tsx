import SkillsCard from '@/components/SkillsCard';

const skillAreas = [
  {
    category: 'Web Development',
    description: 'Building responsive, accessible, and high-performance modern web apps.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Software & Backend',
    description: 'Designing server logic, RESTful APIs, and full-stack solutions.',
    skills: ['Node.js', 'Express', 'REST APIs', 'Git & GitHub']
  },
  {
    category: 'Mobile Development',
    description: 'Crafting intuitive and cross-platform mobile user experiences.',
    skills: ['React Native', 'Mobile UI/UX', 'Responsive Design']
  }
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Welcome to my portfolio! I&apos;m a software development student at BYU-Idaho with a passion
          for building responsive web applications and modern software solutions.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded text-gray-800">
          <p className="font-semibold mb-1">Key Highlights:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>BYU-Idaho Student in Web and Software Development</li>
            <li>Experienced with React, Next.js, and TypeScript</li>
            <li>Focusing on clean component architecture and accessible design</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Technical Expertise</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skillAreas.map((area) => (
            <SkillsCard
              key={area.category}
              category={area.category}
              description={area.description}
              skills={area.skills}
            />
          ))}
        </div>
      </section>
    </main>
  );
}