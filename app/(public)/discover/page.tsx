import React, { Suspense } from 'react';
import MainLayout from '@/components/common/layout';
import ErrorBoundary from '@/components/common/error-boundary';
import {
  HeroSection,
  RecommendedSection,
  TrendingMoviesSection,
  TrendingStoriesSection,
  HotNewsSection,
  LatestTrailerBanner,
} from './_components';
import { tmdbService } from '@/lib/api/tmdb';
import { I_DISCOVER_PAGE_DATA } from '@/lib/api/types';
import {
  HeroSectionSkeleton,
  SectionSkeleton,
} from '@/components/common/loading-skeleton';

// Data fetching function
async function getDiscoverPageData(): Promise<I_DISCOVER_PAGE_DATA> {
  try {
    return await tmdbService.getDiscoverPageData();
  } catch (error) {
    console.error('Error fetching discover page data:', error);
    throw new Error('Failed to fetch movie data. Please try again later.');
  }
}

// Main page component
const DiscoverPage = async () => {
  let data: I_DISCOVER_PAGE_DATA;

  try {
    data = await getDiscoverPageData();
  } catch (error) {
    // If data fetching fails, we'll let the error boundary handle it
    throw error;
  }

  return (
    <MainLayout>
      <div className="space-y-5 pb-20">
        <div className="flex w-auto gap-3 md:w-7xl md:gap-10">
          <div className="w-full md:w-7xl">
            {/* HERO SECTION */}
            <ErrorBoundary>
              <Suspense fallback={<HeroSectionSkeleton />}>
                <HeroSection data={data.topRatedMovies} />
              </Suspense>
            </ErrorBoundary>

            {/* RECOMMENDED SECTION */}
            <ErrorBoundary>
              <Suspense fallback={<SectionSkeleton />}>
                <RecommendedSection data={data.popularMovies} />
              </Suspense>
            </ErrorBoundary>
          </div>

          {/* HOT NEWS SECTION */}
          <ErrorBoundary>
            <Suspense
              fallback={<></>}
            >
              <HotNewsSection />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* TRENDING MOVIES SECTION */}
        <ErrorBoundary>
          <Suspense
            fallback={<SectionSkeleton />}
          >
            <TrendingMoviesSection data={data.topRatedMovies} />
          </Suspense>
        </ErrorBoundary>

        {/* LATEST TRAILER BANNER SECTION */}
        <ErrorBoundary>
          <Suspense
            fallback={<SectionSkeleton />}
          >
            <LatestTrailerBanner />
          </Suspense>
        </ErrorBoundary>

        {/* TRENDING STORIES SECTION */}
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="h-32 animate-pulse rounded-lg bg-gray-200" />
            }
          >
            <TrendingStoriesSection data={data.upcomingMovies} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </MainLayout>
  );
};

export default DiscoverPage;
