import React, { ReactElement } from 'react';
import Image from 'next/image';
import Layout from '../layouts/Layout';

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

LandingPost.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default LandingPost;
