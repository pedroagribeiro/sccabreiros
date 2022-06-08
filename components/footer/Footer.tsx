import React from 'react'
import { FaFacebookF, FaInstagram, FaHome, FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

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
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cubes"
                className="w-4 mr-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                ></path>
              </svg>
              Tailwind ELEMENTS
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
