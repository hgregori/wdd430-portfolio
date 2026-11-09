import { NextRequest } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');

    const filteredProjects = await getProjects(type);

    return Response.json(filteredProjects);
  } catch (error) {
    console.error('Error fetching projects from database:', error);
    return Response.json(
      { error: 'Failed to fetch projects from database.' },
      { status: 500 }
    );
  }
}
