import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Team } from '@prisma/client';

type FixtureData = {
  date: Date;
  textDate: String;
  venue: String;
  competition: String;
  home_team: Team;
  away_team: Team;
  home_team_goals?: number;
  away_team_goals?: number;
};

const Fixture = ({
  date,
  textDate,
  venue,
  competition,
  home_team,
  away_team,
  home_team_goals,
  away_team_goals,
}: FixtureData) => {
  return (
    <div className="flex flex-col shadow-md">
      <div className="w-full h-1 bg-green-600 rounded-t-sm"></div>
      <div className="flex flex-col space-y-2 divide-y divide-gray-500 bg-gray-700 pt-6 px-4 md:px-12 text-white rounded-b-sm">
        <div className="flex flex-col lg:flex-row md:justify-between items-start lg:items-center">
          <p className="text-sm">{textDate + ' | ' + venue}</p>
          <div className="lg:bg-gray-500 py-1 lg:px-2 rounded-sm">
            <p className="lg:font-teko lg:uppercase text-gray-400 lg:text-white text-sm md:text-xl">
              {competition}
            </p>
          </div>
        </div>
        <div className="flex px-4 py-4 md:px-6 items-center">
          <div className="w-4/5 h-full md:w-2/5 flex flex-col space-y-1 justify-start items-center">
            <div className="md:hidden">
              <Image
                src={home_team.logo}
                alt={home_team.name.toLowerCase()}
                width={56}
                height={78}
                className="hidden"
              />
            </div>
            <div className="hidden md:inline">
              <Image
                src={home_team.logo}
                alt={home_team.name.toLowerCase()}
                width={78}
                height={108}
                className="hidden"
              />
            </div>
            <p className="text-xs text-gray-100 px-2 text-center md:hidden">
              {home_team.shorthand_name}
            </p>
          </div>
          <div className="w-3/5 md:w-full flex items-center justify-center">
            <p className="text-md md:text-lg text-gray-100 hidden md:inline md:pr-8">
              {home_team.shorthand_name}
            </p>
            <div className="flex space-x-2 items-center">
              <p className="text-3xl">{home_team_goals}</p>
              <p className="text-lg text-gray-400">V</p>
              <p className="text-3xl">{away_team_goals}</p>
            </div>
            <p className="text-md md:text-lg text-gray-100 hidden md:inline md:pl-8">
              {away_team.shorthand_name}
            </p>
          </div>
          <div className="w-4/5 md:w-2/5 h-full flex flex-col md:space-y-0 justify-end items-center">
            <div className="md:hidden">
              <Image
                src={away_team.logo}
                alt={away_team.name.toLowerCase()}
                width={56}
                height={78}
                className="hidden"
              />
            </div>
            <div className="hidden md:inline">
              <Image
                src={away_team.logo}
                alt={away_team.name.toLowerCase()}
                width={78}
                height={108}
                className="hidden"
              />
            </div>
            <p className="text-xs md:text-xl text-gray-100 px-2 text-center md:hidden">
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

export default Fixture;
