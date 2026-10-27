interface SkillsCardProps {
  category: string;
  description?: string;
  skills: string[];
}

export default function SkillsCard({ category, description, skills }: SkillsCardProps) {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
      {description && <p className="text-gray-600 mb-4 text-sm">{description}</p>}
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
