# TMDB API Integration

This directory contains the optimized TMDB API integration for the streaming platform.

## Setup

1. Create a `.env.local` file in your project root
2. Add your TMDB API key:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

## Features

- **Type Safety**: Full TypeScript support with proper interfaces
- **Error Handling**: Comprehensive error handling with fallbacks
- **Caching**: Built-in Next.js caching with revalidation
- **Parallel Fetching**: Optimized data fetching using Promise.all
- **Image Optimization**: Automatic image URL generation with different sizes
- **Error Boundaries**: Graceful error handling in UI components

## Usage

```typescript
import { tmdbService } from '@/lib/api/tmdb';

// Get popular movies
const popularMovies = await tmdbService.getPopularMovies();

// Get discover page data (all sections)
const discoverData = await tmdbService.getDiscoverPageData();

// Get optimized image URL
const imageUrl = tmdbService.getImageUrl(movie.poster_path, 'w500');
```

## API Endpoints

- `getPopularMovies()` - Popular movies
- `getTopRatedMovies()` - Top rated movies  
- `getUpcomingMovies()` - Upcoming movies
- `getNowPlayingMovies()` - Now playing movies
- `getMovieDetails(id)` - Movie details
- `getGenres()` - Movie genres
- `getDiscoverPageData()` - All data for discover page

## Caching Strategy

- Movies: 1 hour revalidation
- Genres: 24 hours revalidation
- Uses Next.js cache tags for selective revalidation
