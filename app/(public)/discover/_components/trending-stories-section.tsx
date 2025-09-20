'use client';

import React, { Fragment } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import CardCover from '@/components/common/card-cover';
import { tmdbService } from '@/lib/api/tmdb';
import { I_MOVIE } from '@/lib/api/types';

interface TrendingStoriesSectionProps {
  data: I_MOVIE[];
}

const TrendingStoriesSection = ({ data }: TrendingStoriesSectionProps) => {
  return (
    <div>
      <h1 className="md:text-title-sm py-3 text-sm md:py-5">
        Trending Stories
      </h1>
      <Carousel>
        <CarouselContent>
          {data.map((item: any) => {
            return (
              <Fragment key={item.id}>
                <CarouselItem className="basis-2/4 md:basis-1/7">
                  <CardCover
                    coverImageUrl={tmdbService.getImageUrl(item.poster_path, 'w500')}
                    title={item.title}
                    genres={item.genre_names}
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
