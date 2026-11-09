'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/projects', label: 'Overview' },
  { href: '/projects/opensource', label: 'Open Source' },
  { href: '/projects/school', label: 'School' },
  { href: '/projects/settings', label: 'Settings' },
];

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600 text-sm">
          Explore my open source contributions, BYU-Idaho coursework, and portfolio builds.
        </p>
      </header>

      {/* Sub-navigation tabs scoped to /projects/* */}
      <nav aria-label="Projects navigation" className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 mb-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <main>{children}</main>
    </section>
  );
}
