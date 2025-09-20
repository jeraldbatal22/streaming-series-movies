import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMDB_API_BASE_URL: process.env.TMDB_API_BASE_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
  images: {
    domains: ["dummyimage.com", "image.tmdb.org"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/discover",
  //       permanent: true, // or false depending on SEO needs
  //     },
  //   ]
  // },
};

export default nextConfig;
