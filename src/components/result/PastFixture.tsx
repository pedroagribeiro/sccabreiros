import React from 'react';
import Image from 'next/image';
import { GrMapLocation } from 'react-icons/gr';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { Team } from '.prisma/client';

type PastFixtureProps = {
  date: Date;
  location: string;
  venue_name: string;
  home_team: Team;
  away_team: Team;
  home_scored_goals: number;
  away_scored_goals: number;
  competition: string;
  round: string;
};

const PastFixture = (props: PastFixtureProps) => {
  return (
    <div className="w-full flex bg-white ring-1 rounded-sm ring-gray-200">
      <div className="bg-green-600 w-2 rounded-sm" />
      <div className="w-full flex flex-col">
        <p className="text-2xl font-bold px-4 pt-4 text-center md:text-start">
          {props.competition} - {props.round}
        </p>
        <div className="flex flex-col space-y-10 items-center p-6">
          <div className="flex space-x-4 items-center pt-4">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={props.home_team.logo}
                alt="home_team_symbol"
                width={43}
                height={58}
              />
              <p className="text-md">{props.home_team.shorthand_name}</p>
              <p className="text-3xl font-bold">{props.home_scored_goals}</p>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={props.away_team.logo}
                alt="away_team_symbol"
                width={43}
                height={58}
              />
              <p className="text-md">{props.away_team.shorthand_name}</p>
              <p className="text-3xl font-bold">{props.away_scored_goals}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 my-auto">
            <div className="flex space-x-2 justify-start">
              <GrMapLocation />
              <p className="text-md">{props.venue_name}</p>
            </div>
            <div className="flex space-x-2 justify-start">
              <BsFillCalendarDateFill />
              <p className="text-md">
                {new Date(props.date).toLocaleDateString('pt-PT')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastFixture;
