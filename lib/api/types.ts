export interface I_MOVIE {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  genre_ids: number[];
  genre_names?: string[];
}

export interface I_GENRE {
  id: number;
  name: string;
}

export interface I_TMDB_RESPONSE<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface I_GENRE_RESPONSE {
  genres: I_GENRE[];
}

export interface I_MOVIE_DETAILS extends I_MOVIE {
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  genres: I_GENRE[];
  production_companies: I_PRODUCTION_COMPANY[];
  production_countries: I_PRODUCTION_COUNTRY[];
  spoken_languages: I_SPOKEN_LANGUAGE[];
}

export interface I_PRODUCTION_COMPANY {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface I_PRODUCTION_COUNTRY {
  iso_3166_1: string;
  name: string;
}

export interface I_SPOKEN_LANGUAGE {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface I_API_ERROR {
  message: string;
  status: number;
  statusText: string;
}

export interface I_DISCOVER_PAGE_DATA {
  popularMovies: I_MOVIE[];
  topRatedMovies: I_MOVIE[];
  upcomingMovies: I_MOVIE[];
  genres: Record<number, string>;
}
