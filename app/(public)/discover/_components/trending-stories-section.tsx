'use client';

import React, { Fragment } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import CardCover from '@/components/common/card-cover';
import RECOMMENDED_MOCK_DATA from '@/mock/recommended-data';

const TrendingStoriesSection = () => {
  return (
    <div>
      <h1 className="md:text-title-sm py-3 text-sm md:py-5">
        Trending Stories
      </h1>
      <Carousel>
        <CarouselContent>
          {RECOMMENDED_MOCK_DATA.map((data) => {
            return (
              <Fragment key={data.id}>
                <CarouselItem className="basis-2/4 md:basis-1/7">
                  <CardCover
                    coverImageUrl={data.coverImageUrl}
                    title="Greedy People"
                    genres="Crime, Comedy"
                  />
                </CarouselItem>
              </Fragment>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TrendingStoriesSection;
