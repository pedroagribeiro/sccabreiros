import React from 'react';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

type PlayerInfo = {
  fullname: string;
  nickname: string;
  photo: string;
  nationality: string;
  age: number;
  number: number;
  position: string;
  zerozero: number;
};

const PlayerCard = ({
  fullname,
  nickname,
  photo,
  nationality,
  age,
  number,
  position,
  zerozero,
}: PlayerInfo) => {
  return (
    <div className="flex flex-col rounded-sm shadow-md bg-white">
      <div className="w-full h-1 bg-green-600 rounded-t-sm"></div>
      <div className="w-full flex items-center justify-center bg-gray-300">
        <Image src={photo} alt={fullname + number} width={199} height={281} />
      </div>
      <div className="flex justify-between px-4 bg-white rounded-b-md items-center">
        <div className="flex flex-col">
          <p className="uppercase text-gray-400 text-sm font-semibold">
            {fullname}
          </p>
          <p className="text-gray-700 text-2xl font-medium">{nickname}</p>
          <div className="flex space-x-2 items-center">
            <ReactCountryFlag
              countryCode={nationality}
              svg
              style={{ width: '1.7em', height: '1.7em' }}
            />
            <p className="font-thin text-sm">Portugal</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-teko text-8xl text-gray-400 pt-2">{number}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
