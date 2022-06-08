import React from 'react'
import { FaFacebookF, FaInstagram, FaHome, FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { GiLion } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-green-600 text-white">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div className="mr-12 hidden lg:block">
          <span>
            Utiliza as nossas redes sociais para entrar em contacto connosco
          </span>
        </div>
        <div className="flex justify-center">
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
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              <GiLion className="mr-4" />
              Sporting Clube de Cabreiros
            </h6>
            <p>
              O Sporting Clube de Cabreiros é uma instituição com quase 90 anos
              de história que procura representar e honrar a freguesia.
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Laravel
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Pricing
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Help
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contactos
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <FaHome className="mr-2" />
              Rua da Veiga
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <MdEmail className="mr-2" />
              sccabreiros1932@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <AiFillPhone className="mr-2" />
              +351 253 000 000
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-green-600">
        <span>© 2022 Todos os direitos reservados - </span>
        <a className="font-semibold">Sporting Clube de Cabreiros</a>
      </div>
    </footer>
  )
}

export default Footer
