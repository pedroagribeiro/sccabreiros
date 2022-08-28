import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const NextFixtureLoading = () => {
  return (
    <div className="shadow-md mb-4">
      <div className="bg-green-600 h-1 rounded-t-sm"></div>
      <div className="flex flex-col bg-gray-700 rounded-b-sm">
        <div className="flex flex-col space-y-2 divide-y divide-gray-200/30 text-white font-extralight text-xs p-4 animate-pulse">
          <div className="rounded-full bg-gray-500 h-2 w-full"></div>
          <div className="flex justify-around pt-6 pb-4 items-center">
            <div className="flex flex-col space-y-2 items-center">
              <div className="rounded-full h-20 w-20 bg-gray-600"></div>
              <div className="rounded-full bg-gray-600 h-2 w-full"></div>
            </div>
            <p className="text-4xl">V</p>
            <div className="flex flex-col space-y-2 items-center">
              <div className="rounded-full h-20 w-20 bg-gray-600"></div>

              <div className="rounded-full bg-gray-600 h-2 w-full"></div>
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

export default NextFixtureLoading;
