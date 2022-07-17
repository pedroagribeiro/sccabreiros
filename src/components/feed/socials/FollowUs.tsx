import React from 'react';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const FollowUs = () => {
  return (
    <div className="flex flex-col w-full space-y-4 text-gray-700 mt-4">
      <div className="flex flex-col">
        <p className="text-3xl font-teko uppercase">Segue-nos</p>
        <div className="w-6 h-1 bg-green-600"></div>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <button>
          <a
            href="https://www.facebook.com/SportingClubeCabreiros"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex text-white w-full bg-blue-500 items-center rounded-sm shadow-md">
              <p className="bg-blue-600 p-3 rounded-sm">
                <FaFacebookF />
              </p>
              <p className="flex p-2 w-full">Facebook</p>
            </div>
          </a>
        </button>
        <button>
          <a
            href="https://www.instagram.com/sccabreiros/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex text-white w-full bg-pink-500 items-center rounded-sm shadow-md">
              <p className="bg-pink-600 p-3 rounded-sm">
                <AiFillInstagram />
              </p>
              <p className="flex p-2 w-full">Instagram</p>
            </div>
          </a>
        </button>
        <button>
          <a
            href="https://www.youtube.com/channel/UCt6oQ8FNwHEs6MTqBupqxcA"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex text-white w-full bg-red-500 items-center rounded-sm shadow-md">
              <p className="bg-red-600 p-3 rounded-sm">
                <AiFillYoutube />
              </p>
              <p className="flex p-2 w-full">Youtube</p>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
