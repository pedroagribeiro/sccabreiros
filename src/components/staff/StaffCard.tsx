import React from 'react';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

type StaffMemberInfo = {
  first_name: string;
  second_name: string | null;
  photo: string;
  position: string;
  number: number;
};

const PlayerCard = ({
  first_name,
  second_name,
  photo,
  position,
  number,
}: StaffMemberInfo) => {
  return (
    <div className="flex flex-col rounded-sm shadow-md bg-white">
      <div className="w-full h-1 bg-green-600 rounded-t-sm"></div>
      <div className="w-full flex items-center justify-center bg-gray-300">
        <Image
          src={photo}
          alt={first_name + second_name + photo}
          width={199}
          height={281}
        />
      </div>
      <div className="flex justify-between px-4 bg-white rounded-b-md items-center">
        <div className="flex flex-col">
          <p className="uppercase text-gray-400 text-sm font-semibold">
            {position}
          </p>
          <p className="text-gray-700 text-2xl font-medium">
            {first_name + ' ' + second_name}
          </p>
          <div className="flex space-x-2 items-center">
            <ReactCountryFlag
              countryCode="PT"
              svg
              style={{ width: '1.7em', height: '1.7em' }}
            />
            <p className="font-thin text-sm">Portugal</p>
          </div>
        </div>
        <p className="font-teko text-8xl text-gray-400 pt-2">{number}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
