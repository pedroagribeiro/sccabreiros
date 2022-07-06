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
        <p className="font-agencygothic text-8xl text-gray-400">{number}</p>
      </div>
    </div>
    // <div className=" divide-white rounded-md ring-1 ring-gray-200 shadow-sm mb-16">
    //   <div className="px-4 py-1 bg-gray-200">
    //     <Image src={photo} alt={first_name + number} width={199} height={281} />
    //   </div>
    //   <div className="flex flex-col space-y-2 p-6 justify-center">
    //     <div className="flex space-x-2 items-center">
    //       <p className="text-4xl font-bold text-green-600">{number}</p>
    //       {second_name ? (
    //         <div className="flex flex-col justify-start">
    //           <p className="text-sm uppercase">{first_name}</p>
    //           <p className="text-lg font-bold uppercase">{second_name}</p>
    //         </div>
    //       ) : (
    //         <p className="text-lg font-bold uppercase">{first_name}</p>
    //       )}
    //     </div>
    //     <p className="text-xs uppercase">{position}</p>
    //     <div className="flex space-x-1">
    //       <p className="text-xs uppercase">Idade:</p>
    //       <p className="text-xs font-extrabold">{age}</p>
    //     </div>
    //     <div className="flex space-x-2 items-center mb-6">
    //       <p className="text-xs uppercase">Nacionalidade: </p>
    //       <ReactCountryFlag countryCode={nationality} />
    //     </div>
    //     <Link
    //       href={`https://zerozero.pt/player.php?id=${zerozero}`}
    //       target="_blank"
    //     >
    //       <a target="_blank">
    //         <div className="flex space-x-2 bg-green-600 text-white items-center py-2 px-4 rounded-md mt-4 ">
    //           <GiSoccerBall />
    //           <p className="text-sm font-bold uppercase">Zerozero</p>
    //         </div>
    //       </a>
    //     </Link>
    //   </div>{' '}
    // </div>
  );
};

export default PlayerCard;
