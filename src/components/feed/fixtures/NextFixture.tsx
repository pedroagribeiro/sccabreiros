import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const NextFixture = () => {
  return (
    <div className="shadow-md mb-4">
      <div className="bg-green-600 h-1 rounded-t-sm"></div>
      <div className="flex flex-col bg-gray-700 rounded-b-sm">
        <div className="flex flex-col space-y-2 divide-y divide-gray-200/30 text-white font-extralight text-xs p-4">
          <p>Sexta-Feira 8 de Julho | Complexo de Cabreiros</p>
          <div className="flex justify-around pt-6 pb-4 items-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src="/emblema.png"
                alt="cabreiros"
                width={56}
                height={75}
              />
              <p className="text-sm text-gray-100">S.C Cabreiros</p>
            </div>
            <p className="text-4xl">V</p>
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src="/emblema.png"
                alt="cabreiros_fora"
                width={56}
                height={75}
              />
              <p className="text-sm text-gray-100">F.C Marinhas</p>
            </div>
          </div>
          <div className="flex space-x-4 pt-4 uppercase">
            <div className="flex text-white items-center">
              <p className="text-md">Notícias</p>
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </div>
            <div className="flex text-white items-center">
              <p className="text-md">Classificação</p>
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextFixture;
