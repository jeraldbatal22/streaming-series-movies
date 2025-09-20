'use client';

import React, { Fragment, useRef } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import HERO_MOCK_DATA from '@/mock/hero-data';

const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {HERO_MOCK_DATA.map((data) => {
          return (
            <Fragment key={data.id}>
              <CarouselItem className="basis-2/2">
                <div
                  className={cn(
                    'relative h-64 overflow-hidden rounded-2xl bg-[#5352528e] md:h-[391px]'
                  )}
                >
                  {/* Background Image */}
                  <Image
                    src="https://dummyimage.com/950x391/575757/615e61.svg&text="
                    alt={data.coverImageUrl}
                    fill
                    className={cn(
                      'object-cover transition-all duration-300 ease-in-out'
                    )}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                    priority={false}
                  />

                  {/* Content Card - Mobile Responsive */}
                  <Card className="absolute bottom-0 left-0 z-2 mx-2 my-2 w-[calc(100%-1rem)] bg-[#0000008e] text-gray-100 md:mx-6 md:my-4 md:w-[405px]">
                    <CardHeader className="pb-2 md:pb-4">
                      <Label className="text-lg md:text-2xl">
                        Game of Thrones
                      </Label>
                      <div className="flex h-4 items-center space-x-2 text-xs md:h-5 md:space-x-4 md:text-sm">
                        <div>9.2</div>
                        <div>Action</div>
                        <Separator
                          orientation="vertical"
                          className="h-3 md:h-4"
                        />
                        <div>Adventure</div>
                        <Separator
                          orientation="vertical"
                          className="h-3 md:h-4"
                        />
                        <div>Drama</div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 md:pb-4">
                      <Label className="line-clamp-3 text-xs md:line-clamp-none md:text-sm">
                        It`s the story of the intricate and bloody battles of
                        several noble families in the fictional land of
                        Westeros. These families, including the Starks, the
                        Lannisters, and the Targaryens, fight for control of the
                        Iron Throne, the symbol of power in the Seven Kingdoms.
                      </Label>
                    </CardContent>
                    <CardFooter className="flex gap-2 pt-0 md:gap-3">
                      <CardAction>
                        <Button
                          variant="ghost"
                          className="hover:bg-primary-100 bg-primary-500 h-[32px] w-[100px] text-xs text-black md:h-[36px] md:w-[143px] md:text-sm"
                        >
                          Watch
                        </Button>
                      </CardAction>
                      <CardAction>
                        <Button
                          variant="outline"
                          className="hover:bg-primary-100 border-primary-500 text-primary-500 h-[32px] w-[100px] bg-transparent text-xs md:h-[36px] md:w-[143px] md:text-sm"
                        >
                          Trailer
                        </Button>
                      </CardAction>
                    </CardFooter>
                  </Card>

                  {/* Navigation Controls - Mobile Responsive */}
                  <div className="absolute top-7 -right-1 bottom-0 -left-1 z-4 m-1 flex items-center justify-between gap-2 md:top-auto md:right-6 md:left-auto md:m-4 md:gap-3">
                    <CarouselPrevious className="bg-primary-500 hover:bg-primary-100 static h-6 w-6 text-black md:h-10 md:w-10" />
                    <CarouselNext className="bg-primary-500 hover:bg-primary-100 static h-6 w-6 text-black md:h-10 md:w-10" />
                  </div>
                </div>
              </CarouselItem>
            </Fragment>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroSection;
