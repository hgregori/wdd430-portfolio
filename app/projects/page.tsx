import ProjectList from '@/components/ProjectList';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import { connection } from 'next/server';
import { Suspense } from 'react';

interface ContentProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

async function ProjectsOverviewContent({ searchParams }: ContentProps) {
  await connection();
  const resolvedParams = await searchParams;
  const query = resolvedParams.query || '';
  const currentPage = Number(resolvedParams.page) || 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <div>
      {projects.length === 0 ? (
        <p className="text-gray-500 py-6">
          No projects found matching &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <>
          <ProjectList projects={projects} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default function ProjectsOverviewPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-2xl font-bold">Projects Overview</h2>
      </div>

      {/* Client Search Component */}
      <Suspense fallback={<div className="h-10 bg-gray-100 rounded mb-6 animate-pulse" />}>
        <ProjectSearch placeholder="Search projects by title, description, or tech..." />
      </Suspense>

      {/* Dynamic streamed project list + pagination inside Suspense */}
      <Suspense
        fallback={
          <div className="grid gap-4 md:grid-cols-2 animate-pulse mt-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-5 border-l-4 border-gray-300 bg-white shadow-sm rounded-r border border-gray-100 h-44"
              >
                <div className="h-6 bg-gray-200 rounded w-48 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        }
      >
        <ProjectsOverviewContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
