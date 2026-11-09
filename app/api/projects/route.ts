import { NextRequest } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');

  const filteredProjects = getProjects(type);

  return Response.json(filteredProjects);
}

