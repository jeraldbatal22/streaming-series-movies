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

interface TrendingMoviesSectionProps {
  data: I_MOVIE[];
}

const TrendingMoviesSection = ({ data }: TrendingMoviesSectionProps) => {
  return (
    <div>
      <h1 className="md:text-title-sm py-3 text-sm md:py-5">Trending Movies</h1>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {data.map((item: any) => {
            return (
              <Fragment key={item.id}>
                <CarouselItem className="basis-2/4 md:basis-1/7">
                  <CardCover
                    id={item.id}
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

export default TrendingMoviesSection;
