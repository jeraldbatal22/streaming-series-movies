import { Skeleton } from '@/components/ui/skeleton';

const MovieDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section Skeleton */}
      <div className="relative pb-2 sm:pb-4 md:pb-10">
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[612px]">
          <Skeleton className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          
          {/* Movie Info Overlay Skeleton */}
          <div className="absolute top-0 right-0 bottom-0 left-0 p-3 sm:p-4 md:p-6 lg:p-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {/* Poster Skeleton */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-sm">
                    <Skeleton className="h-[280px] w-full rounded-lg sm:h-[350px] md:h-[400px] lg:h-[500px]" />
                  </div>
                </div>

                {/* Movie Details Skeleton */}
                <div className="space-y-3 sm:space-y-4 lg:col-span-2 lg:space-y-6">
                  {/* Title and Basic Info */}
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <Skeleton className="h-6 w-3/4 sm:h-8 md:h-10 lg:h-12 xl:h-16" />
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4">
                      <Skeleton className="h-3 w-16 sm:h-4 sm:w-20 md:h-6" />
                      <Skeleton className="h-3 w-12 sm:h-4 sm:w-16 md:h-6" />
                      <Skeleton className="h-3 w-10 sm:h-4 sm:w-12 md:h-6" />
                      <Skeleton className="h-3 w-10 sm:h-4 sm:w-12 md:h-6" />
                    </div>
                  </div>

                  {/* Genres Skeleton */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Skeleton className="h-5 w-12 rounded-full sm:h-6 sm:w-16 md:h-8 md:w-20" />
                    <Skeleton className="h-5 w-16 rounded-full sm:h-6 sm:w-20 md:h-8 md:w-24" />
                    <Skeleton className="h-5 w-10 rounded-full sm:h-6 sm:w-12 md:h-8 md:w-16" />
                  </div>

                  {/* Ratings Skeleton */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:flex md:flex-wrap md:gap-4 lg:gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-1 sm:gap-2">
                        <Skeleton className="h-5 w-5 rounded sm:h-6 sm:w-6 md:h-8 md:w-8" />
                        <div>
                          <Skeleton className="h-4 w-8 sm:h-5 sm:w-10 md:h-6 md:w-12 lg:h-8" />
                          <Skeleton className="h-3 w-6 mt-1 sm:h-4 sm:w-8" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Synopsis Skeleton */}
                  <div className="space-y-1 sm:space-y-2">
                    <Skeleton className="h-3 w-full sm:h-4 md:h-5" />
                    <Skeleton className="h-3 w-full sm:h-4 md:h-5" />
                    <Skeleton className="h-3 w-3/4 sm:h-4 md:h-5" />
                  </div>

                  {/* Action Buttons Skeleton */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-4">
                    <Skeleton className="h-9 w-full sm:h-10 md:h-[36px] md:w-[143px]" />
                    <Skeleton className="h-9 w-full sm:h-10 md:h-[36px] md:w-[143px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Skeleton */}
      <div className="border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-12">
          <div className="flex space-x-2 overflow-x-auto pb-1 sm:space-x-4 md:space-x-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-8 w-16 sm:h-10 sm:w-20 md:h-12 md:w-24" />
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Skeleton */}
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-12">
        {/* Information Tab Skeleton */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Movie Details Grid Skeleton */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-3 w-16 sm:h-4 sm:w-20 md:h-5 md:w-24" />
                  <Skeleton className="h-3 w-20 sm:h-4 sm:w-28 md:h-5 md:w-32" />
                </div>
              ))}
            </div>
            
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-3 w-16 sm:h-4 sm:w-20 md:h-5 md:w-24" />
                  <Skeleton className="h-3 w-20 sm:h-4 sm:w-28 md:h-5 md:w-32" />
                </div>
              ))}
            </div>
          </div>

          {/* Cast Section Skeleton */}
          <div>
            <Skeleton className="mb-3 h-5 w-24 sm:mb-4 sm:h-6 sm:w-32 md:mb-6 md:h-8 md:w-40" />
            <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4 md:gap-6 md:pb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="flex-shrink-0 text-center">
                  <Skeleton className="mx-auto mb-1 h-12 w-12 rounded-full sm:mb-2 sm:h-16 sm:w-16 md:mb-3 md:h-20 md:w-20" />
                  <Skeleton className="mx-auto mb-1 h-3 w-16 sm:h-3 sm:w-20 md:h-4 md:w-24" />
                  <Skeleton className="mx-auto h-3 w-12 sm:w-16 md:w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
