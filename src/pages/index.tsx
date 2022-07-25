import type { NextPage } from 'next';
import LandingFeed from '../components/feed/LandingFeed';
import LandingLayout from '../components/layouts/LandingLayout';
import { ReactElement } from 'react';

const Home = () => {
  return (
    <div>
      <LandingFeed />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <LandingLayout
    title="Início"
    description="Este é o espaço do nosso querido clube. Fica a saber mais sobre a nossa instituição e participa ativamente no seu desenvolvimento."
  >
    {page}
  </LandingLayout>
);

export default Home;
