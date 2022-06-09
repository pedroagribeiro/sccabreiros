import React from 'react'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'

type PlayerInfo = {
  fullname: string
  photo: string
  nationality: string
  age: number
  number: number
}

const PlayerCard = ({
  fullname,
  photo,
  nationality,
  age,
  number,
}: PlayerInfo) => {
  return (
    <div className="grid grid-cols-2 gap-2 didide-x-8 divide-white rounded-md ring-2 ring-green-600 shadow-md ">
      <div className="px-4 py-1">
        <Image src={photo} alt={fullname} width={199} height={281} />
      </div>
      <div className="flex flex-col space-y-2 p-6 bg-green-600 text-white">
        <p className="text-4xl">{number}</p>
        <p className="text-xl">{fullname}</p>
        <p className="text-md">Idade: {age}</p>
        <div className="flex space-x-2 items-center">
          <p className="text-md">Nacionalidade: </p>
          <ReactCountryFlag countryCode={nationality} />
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
