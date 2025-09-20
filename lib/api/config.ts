export const TMDB_CONFIG = {
  TMDB_API_KEY: process.env.TMDB_API_KEY || "",
  TMDB_BASE_URL: `${process.env.TMDB_API_BASE_URL}/3`,
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p",
  DEFAULT_LANGUAGE: "en-US",
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
} as const;

export const API_ENDPOINTS = {
  MOVIE: {
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    NOW_PLAYING: "/movie/now_playing",
    DETAILS: "/movie",
  },
  GENRE: {
    LIST: "/genre/movie/list",
  },
} as const;

export const CACHE_CONFIG = {
  REVALIDATE: 3600, // 1 hour
  TAGS: {
    MOVIES: "movies",
    GENRES: "genres",
  },
} as const;
