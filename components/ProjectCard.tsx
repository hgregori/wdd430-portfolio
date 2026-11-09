import Link from 'next/link';

interface ProjectCardProps {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type?: 'opensource' | 'school';
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  link,
  type,
}: ProjectCardProps) {
  return (
    <article className="p-5 border-l-4 border-blue-600 bg-white shadow-sm rounded-r border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {type && (
            <span
              className={`text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                type === 'opensource'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {type}
            </span>
          )}
        </div>
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="text-sm text-gray-600 mb-3">
          <strong>Technologies:</strong> {technologies.join(', ')}
        </p>
      </div>

      <div className="flex gap-4 items-center pt-2 border-t border-gray-100 text-sm">
        {id && (
          <Link
            href={`/api/projects/${id}`}
            target="_blank"
            className="text-gray-500 hover:text-gray-800 hover:underline"
          >
            API Endpoint (JSON)
          </Link>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View Project &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
