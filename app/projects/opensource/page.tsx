import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';
import { connection } from 'next/server';

export default async function OpenSourceProjectsPage() {
  await connection();
  const projects = await getProjects('opensource');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Open Source Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500">No open source projects found.</p>
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}
