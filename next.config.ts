import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dummyimage.com"],
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
