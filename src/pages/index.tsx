import type { NextPage } from 'next';
import LandingPost from '../components/feed/LandingPost';
import LandingFeed from '../components/feed/LandingFeed';
import LandingLayout from '../components/layouts/LandingLayout';
import { ReactElement } from 'react';
import { trpc } from '../utils/trpc';

const Home = () => {
  return (
    <div>
      <LandingFeed />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <LandingLayout title="Início">{page}</LandingLayout>
);

export default Home;
