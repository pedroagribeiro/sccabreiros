import React from 'react';
import NextFixture from './fixtures/NextFixture';
import NextFixtureLoading from './fixtures/NextFixtureLoading';
import { BiDownload } from 'react-icons/bi';
import Highlight from './news/Highlight';
import MembershipHighlight from './membership/MembershipHighlight';
import FollowUs from './socials/FollowUs';
import { trpc } from '../../utils/trpc';
import Partners from './partners/Partners';

const LandingFeed = () => {
  const {
    data: fixture,
    refetch,
    isLoading,
  } = trpc.useQuery(['fixture.getUpcomingFixture']);

  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-8">
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 justify-center lg:justify-between mb-4">
        <div className="flex flex-col space-y-6 h-max w-full lg:w-9/12">
          <Highlight id={3} />
          <MembershipHighlight />
        </div>
        <div className="w-full lg:w-3/12 flex flex-col">
          {!isLoading && fixture ? (
            <NextFixture
              textDate={fixture!.fixture.textDate}
              venue={fixture!.fixture.venue}
              homeTeam={fixture!.fixture.homeTeam}
              awayTeam={fixture!.fixture.awayTeam}
            />
          ) : (
            <NextFixtureLoading />
          )}
          <button className="flex bg-green-600 p-4 rounded-sm justify-center shadow-md mb-4">
            <div className="flex space-x-2 items-center text-white">
              <p className="uppercase text-sm">
                Sincroniza com o teu calendário
              </p>
              <BiDownload className="text-xl" />
            </div>
          </button>
          <FollowUs />
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default LandingFeed;
