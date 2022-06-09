import React from 'react'
import Image from 'next/image'

type PlayerInfo = {
  fullname: string
  photo: string
  nationality: string
  age: number
}

const PlayerCard = ({ fullname, photo, nationality, age }: PlayerInfo) => {
  return (
    <div className="flex flex-col space-y-4 p-4 rounded-md ring-2 ring-green-600 shadow-sm">
      <Image src={photo} alt={fullname} width={199} height={281} />
      <p className="text-xl font-bold">{fullname}</p>
      <p className="text-md">Nacionalidade: {nationality}</p>
      <p className="text-md">Idade: {age}</p>
    </div>
  )
}

export default PlayerCard
