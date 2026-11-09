// lib/projects-db.ts
import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT id, title, description, type, technologies, link
      FROM projects
      WHERE type = ${type}
      ORDER BY id ASC;
    `;
    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT id, title, description, type, technologies, link
    FROM projects
    ORDER BY id ASC;
  `;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE id = ${id};
  `;
  return rows[0] ?? null;
}
