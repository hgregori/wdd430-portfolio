'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function ProjectSearch({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());
    
    // Always reset to page 1 on a new search
    params.set('page', '1');

    if (term.trim()) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  // Lightweight debounce without external dependency
  let timer: NodeJS.Timeout;
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleSearch(val);
    }, 300);
  }

  return (
    <div className="relative mb-6">
      <label htmlFor="search" className="sr-only">
        Search Projects
      </label>
      <input
        id="search"
        type="search"
        className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-4 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString() || ''}
        onChange={onInputChange}
      />
      <svg
        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}

