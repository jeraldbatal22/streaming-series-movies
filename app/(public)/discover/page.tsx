'use client';

import React from 'react';
import MainLayout from '@/components/common/layout';
import {
  HeroSection,
  RecommendedSection,
  TrendingMoviesSection,
  TrendingStoriesSection,
  HotNewsSection,
  LatestTrailerBanner,
} from './_components';

const DiscoverPage = () => {
  return (
    <>
      <MainLayout>
        <div className="space-y-5 pb-20">
          <div className="flex w-auto gap-3 md:w-7xl md:gap-10">
            <div className="w-full md:w-7xl">
              {/* HERO SECTION */}
              <HeroSection />

              {/* RECOMMENDED SECTION */}
              <RecommendedSection />
            </div>

            {/* HOT NEWS SECTION */}
            <HotNewsSection />
          </div>

          {/* TRENDING MOVIES SECTION */}
          <TrendingMoviesSection />

          {/* LATEST TRAILER BANNER SECTION */}
          <LatestTrailerBanner />

          {/* TRENDING STORIES SECTION */}
          <TrendingStoriesSection />
        </div>
      </MainLayout>
    </>
  );
};

export default DiscoverPage;
