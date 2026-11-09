import { NextRequest } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  const { id } = await context.params;
  const parsedId = Number(id);

  // Validate ID: check if it's an integer / positive number
  if (isNaN(parsedId) || !Number.isInteger(parsedId) || parsedId <= 0) {
    return Response.json(
      { error: 'Invalid ID. ID must be a positive integer.' },
      { status: 400 }
    );
  }

  const project = getProjectById(parsedId);

  if (!project) {
    return Response.json(
      { error: `Project with ID ${parsedId} not found.` },
      { status: 404 }
    );
  }

  return Response.json(project);
}

