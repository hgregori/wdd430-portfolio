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

export const ITEMS_PER_PAGE = 2;

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

export async function fetchFilteredProjects(
  query: string,
  currentPage: number = 1,
  itemsPerPage: number = ITEMS_PER_PAGE
): Promise<Project[]> {
  const offset = (currentPage - 1) * itemsPerPage;
  const search = `%${query}%`;

  const { rows } = await sql<Project>`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE
      title ILIKE ${search} OR
      description ILIKE ${search} OR
      array_to_string(technologies, ', ') ILIKE ${search}
    ORDER BY id ASC
    LIMIT ${itemsPerPage} OFFSET ${offset};
  `;
  return rows;
}

export async function fetchProjectsPages(
  query: string,
  itemsPerPage: number = ITEMS_PER_PAGE
): Promise<number> {
  const search = `%${query}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE
      title ILIKE ${search} OR
      description ILIKE ${search} OR
      array_to_string(technologies, ', ') ILIKE ${search};
  `;

  const totalCount = Number(rows[0]?.count ?? 0);
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  return Math.max(totalPages, 1);
}
