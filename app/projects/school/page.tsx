import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';
import { connection } from 'next/server';
import { Suspense } from 'react';

// Skeleton fallback matching the project card layout
function SchoolProjectsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 animate-pulse">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="p-5 border-l-4 border-gray-300 bg-white shadow-sm rounded-r border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start mb-3">
              <div className="h-6 bg-gray-200 rounded w-48"></div>
              <div className="h-5 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-36 mb-3"></div>
          </div>
          <div className="pt-3 border-t border-gray-100 flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-28"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Dedicated async Server Component for School Projects
async function SchoolProjectList() {
  await connection();
  const projects = await getProjects('school');

  return projects.length === 0 ? (
    <p className="text-gray-500">No school projects found.</p>
  ) : (
    <ProjectList projects={projects} />
  );
}

export default function SchoolProjectsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">School Projects</h2>
      {/* Component-level streaming: page heading renders instantly, list streams in */}
      <Suspense fallback={<SchoolProjectsSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}
