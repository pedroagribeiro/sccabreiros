import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full p-4 bg-green-600 shadow md:px-6 md:py-8 text-white">
      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center justify-between sm:px-6 mb-6">
        <Link href="/">
          <div className="flex space-x-4">
            <Image src="/emblema.png" alt="emblema" width={43} height={58} />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Sporting Clube de Cabreiros
            </span>
          </div>
        </Link>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/SportingClubeCabreiros"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/sccabreiros"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 space-x-12 items-center justify-center">
        <p className="flex items-center justify-center md:justify-start">
          <FaHome className="mr-2" />
          Rua da Veiga
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <MdEmail className="mr-2" />
          sccabreiros1932@gmail.com
        </p>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <p className="block text-sm text-center ">
        © 2022 Sporting Clube de Cabreiros - Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
