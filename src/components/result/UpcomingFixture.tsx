import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Team } from '@prisma/client';

type UpcomingFixtureData = {
  date: Date;
  location: String;
  competition: String;
  home_team: Team;
  away_team: Team;
};

const UpcomingFixture = ({
  date,
  location,
  competition,
  home_team,
  away_team,
}: UpcomingFixtureData) => {
  const processDate = (date: Date) =>
    date.getDay() + ' ' + date.getMonth() + ' - ' + date.getTime();

  return (
    <div className="flex flex-col shadow-md">
      <div className="w-full h-1 bg-green-600 rounded-t-sm"></div>
      <div className="flex flex-col space-y-2 divide-y divide-gray-500 bg-gray-700 pt-6 px-4 md:px-12 text-white rounded-b-sm">
        <div className="flex flex-col md:flex-row md:justify-between ">
          <p className="text-sm">{' | ' + location}</p>
          <div className="md:bg-gray-500 py-1 md:px-2 rounded-sm">
            <p className="lg:font-agencygothic text-gray-400 lg:text-white text-sm md:text-xl">
              {competition}
            </p>
          </div>
        </div>
        <div className="flex justify-around p-4 items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-around items-center">
            <Image
              src={home_team.logo}
              alt={home_team.name.toLowerCase()}
              width={78}
              height={108}
            />
            <p className="text-md md:text-xl text-gray-100">{home_team.name}</p>
          </div>
          <p className="text-4xl">V</p>
          <div className="w-full flex flex-col-reverse md:space-y-0 md:flex-row justify-around items-center">
            <p className="text-md md:text-xl text-gray-100">{away_team.name}</p>
            <Image
              src={away_team.logo}
              alt={away_team.name.toLowerCase()}
              width={78}
              height={108}
            />
          </div>
        </div>
        <div className="flex space-x-6 p-4">
          <button className="flex space-x-1 text-white font-normal items-center">
            <p className="uppercase">News & Video</p>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFixture;
