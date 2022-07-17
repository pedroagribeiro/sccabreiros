import React from 'react';
import { ImYoutube, ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col divide-y divide-white shadow-md">
      <div className="flex flex-col">
        <div className="w-full h-1 bg-green-600"></div>
        <div className="flex flex-col divide-y divide-white">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-10 justify-center items-center py-10 bg-gray-700 text-white">
            <div className="flex space-x-2">
              <a
                href="https://www.youtube.com/channel/UCt6oQ8FNwHEs6MTqBupqxcA"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-xl bg-green-600/40"
              >
                <ImYoutube />
              </a>
              <a
                href="https://www.facebook.com/SportingClubeCabreiros"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-xl bg-green-600/40"
              >
                <ImFacebook />
              </a>
              <a
                href="https://www.instagram.com/sccabreiros/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-xl bg-green-600/40"
              >
                <FiInstagram />
              </a>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0">
              <button className="uppercase text-white text-sm rounded-full border-2 border-white px-6 py-3">
                <p>Notícias</p>
              </button>
              <button className="uppercase text-white text-sm rounded-full bg-green-600 px-6 py-3">
                Faz-te sócio!
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row font-sm items-center lg:justify-between bg-gray-700 text-white py-2 px-6 text-sm pt-4">
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
              <button>Accessibilidade</button>
              <Link href="/contact">Contacte-nos</Link>
              <button>Privacidade</button>
              <button>Termos de utilização</button>
            </div>
            <div className="flex space-x-4">
              <p>@ Sporting Clube de Cabreiros - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
