import { Skeleton } from '@/components/ui/skeleton';

export const MovieCardSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="aspect-[2/3] w-full rounded-lg" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
);

export const HeroSectionSkeleton = () => (
  <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-200 md:h-[391px]">
    <Skeleton className="h-full w-full" />
    <div className="absolute bottom-0 left-0 z-2 mx-2 my-2 w-[calc(100%-1rem)] bg-black/50 p-4 text-white md:mx-6 md:my-4 md:w-[405px]">
      <Skeleton className="mb-2 h-8 w-3/4 bg-white/20" />
      <div className="mb-2 flex space-x-2">
        <Skeleton className="h-4 w-12 bg-white/20" />
        <Skeleton className="h-4 w-16 bg-white/20" />
        <Skeleton className="h-4 w-14 bg-white/20" />
      </div>
      <Skeleton className="mb-4 h-16 w-full bg-white/20" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 bg-white/20" />
        <Skeleton className="h-8 w-20 bg-white/20" />
      </div>
    </div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-6 w-48" />
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const DiscoverPageSkeleton = () => (
  <div className="space-y-5 pb-20">
    <div className="flex w-auto gap-3 md:w-7xl md:gap-10">
      <div className="w-full md:w-7xl">
        <div className="mb-8">
          <HeroSectionSkeleton />
        </div>
        <SectionSkeleton />
      </div>
      <div className="hidden md:block">
        <Skeleton className="h-96 w-64 rounded-lg" />
      </div>
    </div>
    <SectionSkeleton/>
    <Skeleton className="h-32 w-full rounded-lg" />
    <SectionSkeleton />
  </div>
);
