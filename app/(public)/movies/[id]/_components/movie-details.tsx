'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import {
  PlayIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  MessageSquareIcon,
  FlagIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { tmdbService } from '@/lib/api/tmdb';
import { I_MOVIE_DETAILS } from '@/lib/api/types';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import CardCover from '@/components/common/card-cover';

interface MovieDetailsProps {
  movieDetails: I_MOVIE_DETAILS;
}

const MovieDetails = ({ movieDetails }: MovieDetailsProps) => {
  const [activeTab, setActiveTab] = useState('information');
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [reviewScore, setReviewScore] = useState(10);
  const [spoilerWarning, setSpoilerWarning] = useState(false);

  const tabs = [
    { id: 'information', label: 'Information' },
    { id: 'episodes', label: 'Episodes' },
    { id: 'more-like-this', label: 'More Like This' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const ratings = [
    { name: 'IMDb', score: movieDetails.vote_average.toFixed(1), icon: '⭐' },
    { name: 'RT', score: '88%', icon: '🍅' },
    { name: 'MC', score: '7.8', icon: '🎯' },
    { name: 'BMW', score: '70', icon: '🏆' },
  ];

  const mockEpisodes = [
    {
      id: 1,
      title: 'The Heirs of the Dragon',
      rating: 8.1,
      thumbnail: '/assets/images/trending-movies-cover-1.png',
    },
    {
      id: 2,
      title: 'The Rogue Prince',
      rating: 8.3,
      thumbnail: '/assets/images/trending-movies-cover-2.png',
    },
    {
      id: 3,
      title: 'Second of His Name',
      rating: 8.5,
      thumbnail: '/assets/images/trending-movies-cover-3.png',
    },
    {
      id: 4,
      title: 'King of the Narrow Sea',
      rating: 8.2,
      thumbnail: '/assets/images/trending-movies-cover-4.png',
    },
    {
      id: 5,
      title: 'We Light The Way',
      rating: 8.4,
      thumbnail: '/assets/images/trending-movies-cover-5.png',
    },
  ];

  const mockCast = [
    {
      name: 'Olivia Cooke',
      character: 'Alicent Hightower',
      image: '/assets/images/recommended-cover-1.png',
    },
    {
      name: 'Matt Smith',
      character: 'Daemon Targaryen',
      image: '/assets/images/recommended-cover-2.png',
    },
    {
      name: 'Milly Alcock',
      character: 'Rhaenyra Targaryen',
      image: '/assets/images/recommended-cover-3.png',
    },
    {
      name: 'Rhys Ifans',
      character: 'Otto Hightower',
      image: '/assets/images/recommended-cover-4.png',
    },
    {
      name: "Emma D'Arcy",
      character: 'Rhaenyra Targaryen',
      image: '/assets/images/trending-movies-cover-1.png',
    },
    {
      name: 'Harry Collett',
      character: 'Jacaerys Velaryon',
      image: '/assets/images/trending-movies-cover-2.png',
    },
    {
      name: 'Bill Paterson',
      character: 'Lyman Beesbury',
      image: '/assets/images/trending-movies-cover-3.png',
    },
  ];

  const mockRecommendations = [
    {
      title: 'The Lord of the Rings...',
      genres: ['Action', 'Drama', 'Adventure'],
      rating: 7.8,
      thumbnail: '/assets/images/recommended-cover-1.png',
    },
    {
      title: 'Those About to Die',
      genres: ['Action', 'Drama', 'Adventure'],
      rating: 8.0,
      thumbnail: '/assets/images/recommended-cover-2.png',
    },
    {
      title: 'Barbarians',
      genres: ['Action', 'Drama', 'Adventure'],
      rating: 7.2,
      thumbnail: '/assets/images/recommended-cover-3.png',
    },
    {
      title: 'Rome',
      genres: ['Action', 'Drama', 'Historical'],
      rating: 8.3,
      thumbnail: '/assets/images/recommended-cover-4.png',
    },
    {
      title: 'The White Queen',
      genres: ['Action', 'Adventure', 'Romantic'],
      rating: 7.2,
      thumbnail: '/assets/images/trending-movies-cover-1.png',
    },
  ];

  const mockReviews = [
    {
      id: 1,
      user: 'Ava Anderson',
      avatar: '/assets/images/recommended-cover-1.png',
      time: '2 hours ago',
      score: 10,
      text: 'I wish season three would come out sooner. 🤩🤩🤩🤩',
      likes: 5000,
      dislikes: 0,
      replies: 12,
    },
  ];

  return (
    <div className="bg-gray-900 pb-5 text-white">
      {/* Hero Section */}
      <div className="relative h-dvh pb-2 sm:pb-4 md:h-auto md:pb-10">
        {/* Backdrop Image */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[612px]">
          <Image
            src={tmdbService.getBackdropUrl(
              movieDetails.backdrop_path,
              'original'
            )}
            alt={movieDetails.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

          {/* Movie Info Overlay */}
          <div className="absolute top-0 right-0 bottom-0 left-0 p-3 sm:p-4 md:p-6 lg:p-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {/* Poster */}
                <div className="flex justify-center lg:col-span-1 lg:justify-start">
                  <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-sm">
                    <Image
                      src={tmdbService.getImageUrl(
                        movieDetails.poster_path,
                        'w500'
                      )}
                      alt={movieDetails.title}
                      width={400}
                      height={600}
                      className="h-auto w-full rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Movie Details */}
                <div className="space-y-3 sm:space-y-4 lg:col-span-2 lg:space-y-6">
                  {/* Title and Basic Info */}
                  <div>
                    <h1 className="mb-1 text-xl leading-tight font-bold sm:mb-2 sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                      {movieDetails.title.toUpperCase()}
                    </h1>
                    <div className="mb-3 flex flex-wrap items-center gap-1 text-xs text-gray-300 sm:mb-4 sm:gap-2 sm:text-sm md:gap-4 md:text-base lg:text-lg">
                      <span>
                        ({new Date(movieDetails.release_date).getFullYear()}-)
                      </span>
                      <span>TV Series</span>
                      <span>- {movieDetails.runtime}m</span>
                      <span>- 10 epi</span>
                    </div>
                  </div>

                  {/* Genres */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {movieDetails.genres.slice(0, 3).map((genre) => (
                      <span
                        key={genre.id}
                        className="border-primary-500 text-primary-500 rounded-full border px-2 py-1 text-xs sm:px-3 sm:text-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>

                  {/* Ratings */}
                  <div className="grid grid-cols-4 gap-5 sm:gap-3 md:flex md:flex-wrap md:gap-4 lg:gap-6">
                    {ratings.map((rating) => (
                      <div
                        key={rating.name}
                        className="flex items-center gap-1 sm:gap-2"
                      >
                        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl">
                          {rating.icon}
                        </span>
                        <div className="flex items-center gap-1 md:block">
                          <div className="text-primary-500 text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            {rating.score}
                          </div>
                          <div className="text-xs text-gray-400">
                            {rating.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Synopsis */}
                  <p className="max-w-3xl text-xs leading-relaxed text-gray-300 sm:text-sm md:text-base lg:text-lg">
                    {movieDetails.overview}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-4">
                    <Button
                      variant="ghost"
                      className="hover:bg-primary-100 bg-primary-500 h-9 w-full text-xs text-black sm:h-10 sm:text-sm md:h-[36px] md:w-[143px] md:text-sm"
                    >
                      Play Movie
                    </Button>
                    <Button
                      variant="outline"
                      className="hover:bg-primary-100 border-primary-500 text-primary-500 h-9 w-full bg-transparent text-xs sm:h-10 sm:text-sm md:h-[36px] md:w-[143px] md:text-sm"
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-12">
          <div className="flex space-x-5 overflow-x-auto pb-1 sm:space-x-4 md:space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'border-b-2 py-2 text-xs font-medium whitespace-nowrap transition-colors sm:py-3 sm:text-sm md:py-4 md:text-base lg:text-lg',
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-500'
                    : 'border-transparent text-gray-400 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-12">
        {activeTab === 'information' && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Movie Details Grid */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Country:
                  </span>
                  <span className="text-xs sm:text-sm md:text-base">
                    {movieDetails.production_countries[0]?.name ||
                      'United States'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Release Date:
                  </span>
                  <span className="text-xs sm:text-sm md:text-base">
                    {new Date(movieDetails.release_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Language:
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs sm:text-sm md:text-base">
                      {movieDetails.spoken_languages[0]?.english_name ||
                        'English'}
                    </span>
                    <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Network:
                  </span>
                  <span className="text-xs sm:text-sm md:text-base">
                    {movieDetails.production_companies[0]?.name || 'HBO'}
                  </span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Director:
                  </span>
                  <span className="text-xs sm:text-sm md:text-base">
                    Ryan Condal
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Runtime:
                  </span>
                  <span className="text-xs sm:text-sm md:text-base">
                    {movieDetails.runtime}m
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                    Closed Caption:
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs sm:text-sm md:text-base">
                      English
                    </span>
                    <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cast Section */}
            <div>
              <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl md:mb-6 md:text-2xl">
                Starts (Cast)
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4 md:gap-6 md:pb-4">
                {mockCast.map((actor, index) => (
                  <div key={index} className="flex-shrink-0 text-center">
                    <Avatar className="mx-auto mb-1 h-12 w-12 sm:mb-2 sm:h-16 sm:w-16 md:mb-3 md:h-20 md:w-20">
                      <AvatarImage src={actor.image} alt={actor.name} />
                      <AvatarFallback>
                        {actor.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs font-medium sm:text-sm">
                      {actor.name}
                    </p>
                    <p className="text-xs text-gray-400">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'episodes' && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Season Selector */}
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => setSelectedSeason(1)}
                className={cn(
                  'rounded-lg px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm md:px-4',
                  selectedSeason === 1
                    ? 'bg-primary-500 text-black'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                )}
              >
                season 1
              </button>
              <button
                onClick={() => setSelectedSeason(2)}
                className={cn(
                  'rounded-lg px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm md:px-4',
                  selectedSeason === 2
                    ? 'bg-primary-500 text-black'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                )}
              >
                season 2
              </button>
            </div>

            {/* Episodes */}
            <div className="gap-3 overflow-x-auto pb-2 sm:gap-4 md:gap-6 md:pb-4">
              {/* <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10"
              >
                <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10"
              >
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </Button> */}
              <Carousel>
                <CarouselContent>
                  {mockEpisodes.map((item: any) => {
                    return (
                      <Fragment key={item.title}>
                        <CarouselItem className="basis-2/4 md:basis-1/7">
                          <CardCover
                            id={item.title}
                            coverImageUrl={item.thumbnail}
                            title={item.title}
                            genres={[]}
                          />
                        </CarouselItem>
                      </Fragment>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        )}

        {activeTab === 'more-like-this' && (
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
                More Like This
              </h3>
              <button className="text-primary-500 hover:text-primary-400 flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm">View All</span>
                <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>

            <Carousel>
              <CarouselContent>
                {mockRecommendations.map((item: any) => {
                  return (
                    <Fragment key={item.title}>
                      <CarouselItem className="basis-2/4 md:basis-1/7">
                        <CardCover
                          id={item.title}
                          coverImageUrl={item.thumbnail}
                          title={item.title}
                          genres={[]}
                        />
                      </CarouselItem>
                    </Fragment>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Post Comment Section */}
            <Card className="border-gray-700 bg-gray-800 p-3 sm:p-4 md:p-6">
              <h3 className="mb-2 text-white font-bold sm:mb-3 sm:text-lg md:mb-4 md:text-xl">
                Post a comment for this series:
              </h3>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Label
                    htmlFor="review-text"
                    className="text-xs text-gray-300 sm:text-sm"
                  >
                    Review Text
                  </Label>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Checkbox
                      id="spoiler-warning"
                      checked={spoilerWarning}
                      onCheckedChange={(checked) =>
                        setSpoilerWarning(checked === true)
                      }
                      className="h-4 w-4"
                    />
                    <Label
                      htmlFor="spoiler-warning"
                      className="text-xs text-gray-400 sm:text-sm"
                    >
                      Contains spoilers
                    </Label>
                  </div>
                </div>

                <textarea
                  id="review-text"
                  placeholder="Review Text..."
                  className="focus:border-primary-500 h-20 w-full resize-none rounded-lg border border-gray-600 bg-gray-700 p-2 text-xs text-white placeholder-gray-400 focus:outline-none sm:h-24 sm:p-3 sm:text-sm md:h-32 md:p-4"
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <Label
                    htmlFor="score-slider"
                    className="text-xs text-gray-300 sm:text-sm"
                  >
                    Your Score
                  </Label>
                  <div className="flex flex-1 items-center gap-2">
                    <input
                      type="range"
                      id="score-slider"
                      min="1"
                      max="10"
                      value={reviewScore}
                      onChange={(e) => setReviewScore(Number(e.target.value))}
                      className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-gray-700"
                    />
                    <span className="text-primary-500 min-w-[2.5rem] text-xs font-bold sm:min-w-[3rem] sm:text-sm">
                      {reviewScore}/10
                    </span>
                  </div>
                </div>

                <Button className="bg-primary-500 hover:bg-primary-600 w-full text-xs font-semibold text-black sm:text-sm md:w-auto">
                  Submit Review
                </Button>
              </div>
            </Card>

            {/* Sort Options */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 md:gap-6">
              <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                Sort by:
              </span>
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                {['Newest', 'Oldest', 'Hottest'].map((option) => (
                  <button
                    key={option}
                    className={cn(
                      'text-xs font-medium transition-colors sm:text-sm md:text-base',
                      option === 'Newest'
                        ? 'text-primary-500'
                        : 'text-gray-400 hover:text-white'
                    )}
                  >
                    {option}
                    {option === 'Hottest' && (
                      <span className="ml-1 text-gray-500 sm:ml-2">(2.2K)</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <Separator className="bg-gray-700" />

            {/* Reviews List */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {mockReviews.map((review) => (
                <Card
                  key={review.id}
                  className="border-gray-700 bg-gray-800 p-3 sm:p-4 md:p-6"
                >
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                      <AvatarImage src={review.avatar} alt={review.user} />
                      <AvatarFallback>
                        {review.user
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-1 sm:mb-2 sm:gap-2 md:gap-3">
                        <span className="text-xs font-medium sm:text-sm md:text-white">
                          {review.user}
                        </span>
                        <span className="text-xs text-gray-400 sm:text-sm">
                          {review.time}
                        </span>
                        <div className="bg-primary-500 rounded px-1.5 py-0.5 text-xs font-bold text-black sm:px-2 sm:py-1">
                          Score {review.score}/10
                        </div>
                      </div>

                      <p className="mb-2 text-xs text-gray-300 sm:mb-3 sm:text-sm md:mb-4 md:text-base">
                        {review.text}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                          <ThumbsUpIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">
                            {review.likes.toLocaleString()}
                          </span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                          <ThumbsDownIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">
                            {review.dislikes}
                          </span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                          <MessageSquareIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">
                            Reply ({review.replies})
                          </span>
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <FlagIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
