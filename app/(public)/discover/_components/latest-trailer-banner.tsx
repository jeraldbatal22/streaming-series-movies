'use client';

import React from 'react';
import Image from 'next/image';

const LatestTrailerBanner = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/assets/images/latest-trailer-banner-cover.png"
        alt="Latest Trailer Banner"
        width={1280}
        height={200}
        className="w-full max-w-7xl"
      />
    </div>
  );
};

export default LatestTrailerBanner;
