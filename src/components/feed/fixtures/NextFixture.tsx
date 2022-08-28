import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { Fixture, Team } from '@prisma/client';

type FixtureInfo = {
  textDate: string;
  venue: string;
  homeTeam: Team;
  awayTeam: Team;
};

const NextFixture = ({ textDate, venue, homeTeam, awayTeam }: FixtureInfo) => {
  return (
    <div className="shadow-md mb-4">
      <div className="bg-green-600 h-1 rounded-t-sm"></div>
      <div className="flex flex-col bg-gray-700 rounded-b-sm">
        <div className="flex flex-col space-y-2 divide-y divide-gray-200/30 text-white font-extralight text-xs p-4">
          <p>
            {textDate} | {venue}
          </p>
          <div className="flex justify-around pt-6 pb-4 items-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={homeTeam.logo}
                alt={homeTeam.name}
                width={56}
                height={75}
              />
              <p className="text-sm text-gray-100">{homeTeam.shorthand_name}</p>
            </div>
            <p className="text-4xl">V</p>
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={awayTeam.logo}
                alt={awayTeam.name}
                width={56}
                height={75}
              />
              <p className="text-sm text-gray-100">{awayTeam.shorthand_name}</p>
            </div>
          </div>
          <div className="flex space-x-4 pt-4 uppercase">
            <Link href="/news">
              <button className="flex text-white items-center uppercase">
                <p className="text-md">Notícias</p>
                <MdOutlineKeyboardArrowRight className="text-xl" />
              </button>
            </Link>
            <Link href="/games/classification">
              <button className="flex text-white items-center uppercase">
                <p className="text-md">Classificação</p>
                <MdOutlineKeyboardArrowRight className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextFixture;
