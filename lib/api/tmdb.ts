import { TMDB_CONFIG, API_ENDPOINTS, CACHE_CONFIG } from './config';
import { 
  I_MOVIE, 
  I_TMDB_RESPONSE, 
  I_GENRE_RESPONSE, 
  I_API_ERROR, 
  I_DISCOVER_PAGE_DATA, 
  I_MOVIE_DETAILS
} from './types';

class TMDBService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = TMDB_CONFIG.TMDB_BASE_URL;
    this.apiKey = TMDB_CONFIG.TMDB_API_KEY;
  }

  private async fetchWithErrorHandling<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error: I_API_ERROR = {
          message: `HTTP error! status: ${response.status}`,
          status: response.status,
          statusText: response.statusText,
        };
        throw error;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('TMDB API Error:', error);
      throw error;
    }
  }

  private buildUrl(endpoint: string, params: Record<string, string | number> = {}): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.set('api_key', this.apiKey);
    url.searchParams.set('language', TMDB_CONFIG.DEFAULT_LANGUAGE);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });

    return url.toString();
  }

  async getPopularMovies(page: number = TMDB_CONFIG.DEFAULT_PAGE): Promise<I_TMDB_RESPONSE<I_MOVIE>> {
    const url = this.buildUrl(API_ENDPOINTS.MOVIE.POPULAR, { page });
    const response = await this.fetchWithErrorHandling<I_TMDB_RESPONSE<I_MOVIE>>(url, {
      next: { 
        revalidate: CACHE_CONFIG.REVALIDATE,
        tags: [CACHE_CONFIG.TAGS.MOVIES]
      }
    });
    
    const genres = await this.getGenres();
    return {
      ...response,
      results: response.results.map((movie: I_MOVIE) => ({
        ...movie,
        genre_names: movie.genre_ids.map(id => genres[id])
      }))
    };
  }

  async getTopRatedMovies(page: number = TMDB_CONFIG.DEFAULT_PAGE): Promise<I_TMDB_RESPONSE<I_MOVIE>> {
    const url = this.buildUrl(API_ENDPOINTS.MOVIE.TOP_RATED, { page });
    const response = await this.fetchWithErrorHandling<I_TMDB_RESPONSE<I_MOVIE>>(url, {
      next: { 
        revalidate: CACHE_CONFIG.REVALIDATE,
        tags: [CACHE_CONFIG.TAGS.MOVIES]
      }
    });
    
    const genres = await this.getGenres();
    return {
      ...response,
      results: response.results.map((movie: I_MOVIE) => ({
        ...movie,
        genre_names: movie.genre_ids.map(id => genres[id])
      }))
    };
  }

  async getUpcomingMovies(page: number = TMDB_CONFIG.DEFAULT_PAGE): Promise<I_TMDB_RESPONSE<I_MOVIE>> {
    const url = this.buildUrl(API_ENDPOINTS.MOVIE.UPCOMING, { page });
    const response = await this.fetchWithErrorHandling<I_TMDB_RESPONSE<I_MOVIE>>(url, {
      next: { 
        revalidate: CACHE_CONFIG.REVALIDATE,
        tags: [CACHE_CONFIG.TAGS.MOVIES]
      }
    });
    
    const genres = await this.getGenres();
    return {
      ...response,
      results: response.results.map((movie: I_MOVIE) => ({
        ...movie,
        genre_names: movie.genre_ids.map(id => genres[id])
      }))
    };
  }

  async getNowPlayingMovies(page: number = TMDB_CONFIG.DEFAULT_PAGE): Promise<I_TMDB_RESPONSE<I_MOVIE>> {
    const url = this.buildUrl(API_ENDPOINTS.MOVIE.NOW_PLAYING, { page });
    const response = await this.fetchWithErrorHandling<I_TMDB_RESPONSE<I_MOVIE>>(url, {
      next: { 
        revalidate: CACHE_CONFIG.REVALIDATE,
        tags: [CACHE_CONFIG.TAGS.MOVIES]
      }
    });
    
    const genres = await this.getGenres();
    return {
      ...response,
      results: response.results.map((movie: I_MOVIE) => ({
        ...movie,
        genre_names: movie.genre_ids.map(id => genres[id])
      }))
    };
  }

  async getMovieDetails(movieId: number | string): Promise<I_MOVIE_DETAILS> {
    const url = this.buildUrl(`${API_ENDPOINTS.MOVIE.DETAILS}/${movieId}`);
    return this.fetchWithErrorHandling<I_MOVIE_DETAILS>(url, {
      next: { 
        revalidate: CACHE_CONFIG.REVALIDATE,
        tags: [CACHE_CONFIG.TAGS.MOVIES]
      }
    });
  }

  async getGenres(): Promise<Record<number, string>> {
    const url = this.buildUrl(API_ENDPOINTS.GENRE.LIST);
    const response = await this.fetchWithErrorHandling<I_GENRE_RESPONSE>(url, {
      next: { 
        revalidate: CACHE_CONFIG.REVALIDATE * 24, // Cache genres for 24 hours
        tags: [CACHE_CONFIG.TAGS.GENRES]
      }
    });
    
    return Object.fromEntries(response.genres.map(genre => [genre.id, genre.name]));
  }

  async getDiscoverPageData(): Promise<I_DISCOVER_PAGE_DATA> {
    // Fetch all data in parallel for better performance
    const [popularResponse, topRatedResponse, upcomingResponse, genres] = await Promise.all([
      this.getPopularMovies(1),
      this.getTopRatedMovies(1),
      this.getUpcomingMovies(1),
      this.getGenres(),
    ]);

    return {
      popularMovies: popularResponse.results,
      topRatedMovies: topRatedResponse.results,
      upcomingMovies: upcomingResponse.results,
      genres,
    };
  }

  // Utility method to get image URL
  getImageUrl(path: string | null, size: 'w200' | 'w300' | 'w500' | 'w780' | 'original' = 'w500'): string {
    if (!path) return '/placeholder-movie.jpg';
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
  }

  // Utility method to get backdrop URL
  getBackdropUrl(path: string | null, size: 'w300' | 'w780' | 'w1280' | 'original' = 'w780'): string {
    if (!path) return '/placeholder-backdrop.jpg';
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
  }
}

// Export singleton instance
export const tmdbService = new TMDBService();
export default tmdbService;
