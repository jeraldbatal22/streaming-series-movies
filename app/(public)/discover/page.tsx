import React, { Suspense } from 'react';
import MainLayout from '@/components/common/layout';
import ErrorBoundary from '@/components/common/error-boundary';
import { DiscoverPageSkeleton } from '@/components/common/loading-skeleton';
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
  console.log(data)
  return (
    <MainLayout>
      <div className="space-y-5 pb-20">
        <div className="flex w-auto gap-3 md:w-7xl md:gap-10">
          <div className="w-full md:w-7xl">
            {/* HERO SECTION */}
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="mb-8 h-64 animate-pulse rounded-2xl bg-gray-200 md:h-[391px]" />
                }
              >
                <HeroSection data={data.topRatedMovies} />
              </Suspense>
            </ErrorBoundary>

            {/* RECOMMENDED SECTION */}
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="mb-8 h-64 animate-pulse rounded-lg bg-gray-200"
                      />
                    ))}
                  </div>
                }
              >
                <RecommendedSection data={data.popularMovies} />
              </Suspense>
            </ErrorBoundary>
          </div>

          {/* HOT NEWS SECTION */}
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                  {[...Array(1)].map((_, i) => (
                    <div
                      key={i}
                      className="mb-8 h-64 animate-pulse rounded-lg bg-gray-200"
                    />
                  ))}
                </div>
              }
            >
              <HotNewsSection />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* TRENDING MOVIES SECTION */}
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="mb-8 h-64 animate-pulse rounded-lg bg-gray-200"
                  />
                ))}
              </div>
            }
          >
            <TrendingMoviesSection data={data.topRatedMovies} />
          </Suspense>
        </ErrorBoundary>

        {/* LATEST TRAILER BANNER SECTION */}
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="mb-8 h-64 animate-pulse rounded-lg bg-gray-200"
                  />
                ))}
              </div>
            }
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
