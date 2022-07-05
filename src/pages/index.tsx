import type { NextPage } from 'next';
import LandingPost from '../components/feed/LandingPost';
import LandingFeed from '../components/feed/LandingFeed';
import LandingLayout from '../components/layouts/LandingLayout';
import { ReactElement } from 'react';
import { trpc } from '../utils/trpc';

const Home = () => {
  const {
    data: roster,
    refetch,
    isLoading,
  } = trpc.useQuery(['roster.getRoster']);
  return (
    <div>
      <LandingPost />
      <LandingFeed />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <LandingLayout title="Início">{page}</LandingLayout>
);

export default Home;
