import React from 'react'
import { AiOutlineGlobal, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

type DescriptionProps = {
  name: string
  description: string
  website?: string
  facebook?: string
  instagram?: string
  twitter?: string
}

const Description = ({
  name,
  description,
  website,
  facebook,
  instagram,
  twitter,
}: DescriptionProps) => {
  return (
    <div className="w-full p-6  flex flex-col space-y-4 bg-gray-100 text-gray-700">
      <p className="text-2xl">{name}</p>
      <p className="text-lg">{description}</p>
      <div className="flex space-x-6">
        {website ? (
          <a href={website} target="_blank" rel="noreferrer">
            <AiOutlineGlobal />
          </a>
        ) : (
          <></>
        )}
        {facebook ? (
          <a href={facebook} target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        ) : (
          <></>
        )}
        {instagram ? (
          <a href={instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        ) : (
          <></>
        )}
        {twitter ? (
          <a href={twitter} target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Description
