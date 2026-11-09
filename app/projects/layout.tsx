import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex gap-4 border-b border-gray-200 pb-4 mb-6 text-blue-600 font-medium">
        <Link href="/projects" className="hover:underline">Overview</Link>
        <Link href="/projects/opensource" className="hover:underline">Open Source</Link>
        <Link href="/projects/school" className="hover:underline">School</Link>
        <Link href="/projects/settings" className="hover:underline">Settings</Link>
      </nav>
      {children}
    </section>
  );
}

