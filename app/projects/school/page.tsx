'use client';

import { useEffect, useState } from 'react';
import ProjectList from '@/components/ProjectList';
import { Project } from '@/lib/projects-db';

export default function SchoolProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/projects?type=school')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch school projects');
        return res.json();
      })
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">School Projects</h2>
      {loading && <p className="text-gray-500">Loading school projects...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && projects.length === 0 && (
        <p className="text-gray-500">No school projects found.</p>
      )}
      {!loading && !error && projects.length > 0 && (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}
