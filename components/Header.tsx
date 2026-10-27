import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/" id="header-title" className="text-2xl font-bold hover:text-blue-100 transition-colors">
            Henrique Gregorio
          </Link>
          <span className="block text-xs text-blue-200">Portfolio</span>
        </div>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline transition-all">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline transition-all">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}