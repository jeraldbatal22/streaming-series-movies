'use client';

import React from 'react';
import Image from 'next/image';

const HotNewsSection = () => {
  return (
    <div className="hidden md:block">
      <Image
        src="/assets/images/hot-news.png"
        alt="Hot News"
        width={408}
        height={734}
        className="w-[408px]"
      />
    </div>
  );
};

export default HotNewsSection;
