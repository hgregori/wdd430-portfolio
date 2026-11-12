'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination Navigation" className="flex items-center justify-center gap-2 mt-8">
      {/* Previous Page Link */}
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700"
        >
          &larr; Previous
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
        >
          &larr; Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = page === currentPage;
          return (
            <Link
              key={page}
              href={createPageURL(page)}
              aria-current={isActive ? 'page' : undefined}
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next Page Link */}
      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700"
        >
          Next &rarr;
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
        >
          Next &rarr;
        </span>
      )}
    </nav>
  );
}

