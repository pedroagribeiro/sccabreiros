import React, { ReactElement } from 'react';
import Image from 'next/image';

const LandingPost = () => {
  return (
    <div>
      <div className="flex w-full justify-center">
        <Image
          src="/news/telmo_news.png"
          alt="breaking"
          width={1600}
          height={800}
        />
      </div>
    </div>
  );
};

export default LandingPost;
