import React from 'react';
import Image from 'next/image';

type StaffMemberInfo = {
  first_name: string;
  second_name: string | null;
  photo: string;
  position: string;
};

const PlayerCard = ({
  first_name,
  second_name,
  photo,
  position,
}: StaffMemberInfo) => {
  return (
    <div className="grid grid-cols-2 divide-white rounded-md ring-1 ring-gray-200 shadow-sm mb-16">
      <div className="px-4 py-1 bg-gray-200">
        <Image src={photo} alt={first_name + photo} width={199} height={281} />
      </div>
      <div className="flex flex-col space-y-2 p-6 justify-center">
        <div className="flex space-x-2 items-center">
          {second_name ? (
            <div className="flex flex-col justify-start">
              <p className="text-sm uppercase">{first_name}</p>
              <p className="text-lg font-bold uppercase">{second_name}</p>
            </div>
          ) : (
            <p className="text-lg font-bold uppercase">{first_name}</p>
          )}
        </div>
        <p className="text-xs uppercase">{position}</p>
      </div>{' '}
    </div>
  );
};

export default PlayerCard;
