import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Team } from '@prisma/client';
import { text } from 'stream/consumers';

type UpcomingFixtureData = {
  date: Date;
  textDate: String;
  venue: String;
  competition: String;
  home_team: Team;
  away_team: Team;
  home_team_goals?: number;
  away_team_goals?: number;
};

const UpcomingFixture = ({
  date,
  textDate,
  venue,
  competition,
  home_team,
  away_team,
  home_team_goals,
  away_team_goals,
}: UpcomingFixtureData) => {
  return (
    <div className="flex flex-col shadow-md">
      <div className="w-full h-1 bg-green-600 rounded-t-sm"></div>
      <div className="flex flex-col space-y-2 divide-y divide-gray-500 bg-gray-700 pt-6 px-4 md:px-12 text-white rounded-b-sm">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <p className="text-sm">{textDate + ' | ' + venue}</p>
          <div className="md:bg-gray-500 py-1 md:px-2 rounded-sm">
            <p className="lg:font-agencygothic text-gray-400 lg:text-white text-sm md:text-xl">
              {competition}
            </p>
          </div>
        </div>
        <div className="flex px-4 py-4 md:px-12 items-center">
          <div className="w-full flex flex-col space-y-2 justify-start items-center">
            <Image
              src={home_team.logo}
              alt={home_team.name.toLowerCase()}
              width={78}
              height={108}
            />
            <p className="text-xs md:text-xl text-gray-100 md:hidden">
              {home_team.shorthand_name}
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-md md:text-xl text-gray-100 hidden md:inline md:pr-10">
              {home_team.shorthand_name}
            </p>
            <div className="flex space-x-2 items-center">
              <p className="text-3xl">{home_team_goals}</p>
              <p className="text-lg text-gray-400">V</p>
              <p className="text-3xl">{away_team_goals}</p>
            </div>
            <p className="text-md md:text-xl text-gray-100 hidden md:inline md:pl-10">
              {away_team.shorthand_name}
            </p>
          </div>
          <div className="w-full flex flex-col md:space-y-0 justify-end items-center">
            <Image
              src={away_team.logo}
              alt={away_team.name.toLowerCase()}
              width={78}
              height={108}
            />
            <p className="text-xs md:text-xl text-gray-100 md:hidden">
              {away_team.shorthand_name}
            </p>
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
