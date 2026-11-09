'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
}

const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6 items-center">
      {navLinks.map((link) => {
        const isActive =
          link.href === '/'
            ? pathname === '/'
            : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={`transition-colors font-medium ${
                isActive
                  ? 'text-white underline underline-offset-4 font-semibold'
                  : 'text-blue-100 hover:text-white hover:underline'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

