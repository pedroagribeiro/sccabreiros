import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Partners = () => {
  return (
    <div className="flex flex-col w-full space-y-4 text-gray-700 mt-4">
      <div className="flex flex-col">
        <p className="text-3xl font-teko uppercase">Parceiros</p>
        <div className="w-6 h-1 bg-green-600"></div>
      </div>
      <div className="flex flex-col w-full space-y-2 px-14">
        <button>
          <a href="https://ledechem.pt/en/" target="_blank" rel="noreferrer">
            <Image
              src="/images/partners/ledechem.png"
              alt="ledechem"
              width={500}
              height={200}
            />
          </a>
        </button>
        <button>
          <a
            href="https://cpwengenharia.webnode.pt/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/partners/cpw.png"
              alt="cpw"
              width={500}
              height={200}
            />
          </a>
        </button>
        <button>
          <a href="https://www.lp-rr.com/?" target="_blank" rel="noreferrer">
            <Image
              src="/images/partners/lp_rr_contabilidade.png"
              alt="lp_rr_contabilidade"
              width={500}
              height={200}
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Partners;
