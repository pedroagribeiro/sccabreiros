import React from 'react'
import Image from 'next/image'
import Description from './Description'

type OfficialPartnerProps = {
  image: string
  name: string
  description: string
  website?: string
  facebook?: string
  instagram?: string
  twitter?: string
}

const OfficialPartner = ({
  image,
  name,
  description,
  website,
  facebook,
  instagram,
  twitter,
}: OfficialPartnerProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center ring-1 ring-gray-200 bg-gray-200 rounded-md">
      <div className="px-10">
        <Image src={image} alt="cpw" width={500} height={200} />
      </div>
      <Description
        name={name}
        description={description}
        website={website}
        facebook={facebook}
        instagram={instagram}
        twitter={twitter}
      />
    </div>
  )
}

export default OfficialPartner
