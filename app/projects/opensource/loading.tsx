export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Title skeleton */}
      <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>

      {/* Grid of project card skeletons */}
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="p-5 border-l-4 border-gray-300 bg-white shadow-sm rounded-r border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="h-6 bg-gray-200 rounded w-48"></div>
                <div className="h-5 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-40 mb-3"></div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-28"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
