import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
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
import MainLayout from '@/components/common/layout';
import MovieDetailsSkeleton from '@/components/common/movie-details-skeleton';
import MovieDetails from './_components/movie-details';

interface MovieDetailsPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: MovieDetailsPageProps): Promise<Metadata> {
  const movieId = (await params).id;

  if (!movieId) {
    return {
      title: 'Movie Not Found',
      description: 'The movie you are looking for does not exist.',
    };
  }

  try {
    const movieDetails = await tmdbService.getMovieDetails(movieId as string);
    
    return {
      title: `${movieDetails.title} - Movie Details`,
      description: movieDetails.overview || `Watch ${movieDetails.title} - ${movieDetails.genres.map(g => g.name).join(', ')}`,
      openGraph: {
        title: movieDetails.title,
        description: movieDetails.overview || `Watch ${movieDetails.title}`,
        images: movieDetails.backdrop_path ? [tmdbService.getBackdropUrl(movieDetails.backdrop_path, 'w780')] : [],
        type: 'video.movie',
      },
      twitter: {
        card: 'summary_large_image',
        title: movieDetails.title,
        description: movieDetails.overview || `Watch ${movieDetails.title}`,
        images: movieDetails.backdrop_path ? [tmdbService.getBackdropUrl(movieDetails.backdrop_path, 'w780')] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Movie Not Found',
      description: 'The movie you are looking for does not exist.',
    };
  }
}

async function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const movieId = (await params).id;

  if (!movieId) {
    notFound();
  }

  let movieDetails: I_MOVIE_DETAILS;
  
  try {
    movieDetails = await tmdbService.getMovieDetails(movieId);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    notFound();
  }

  return (
    <MainLayout>
      <Suspense fallback={<MovieDetailsSkeleton />}>
        <MovieDetails movieDetails={movieDetails} />
      </Suspense>
    </MainLayout>
  );
};

export default MovieDetailsPage;
