import React from 'react';
import Image from 'next/image';

const Highlight = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="bg-green-600 text-3xl font-agencygothic uppercase text-white p-4 rounded-sm shadow-md">
        Bem-vindo Telmo!
      </h2>
      <div className="flex flex-col shadow-md">
        <div className="bg-green-600 h-1 rounded-t-sm"></div>
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-sm ">
          <div className="w-full flex lg:w-3/5">
            <Image
              src="/images/interviews/telmo.png"
              alt="interview_telmo"
              width={1448}
              height={800}
            />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col space-y-2 px-6 py-4">
            <p className="uppercase text-gray-400 text-sm">Entrevista</p>
            <h3 className="text-2xl text-gray-700">
              Telmo está ansioso pelo início da época
            </h3>
            <p className="font-extralight text-sm text-gray-600">
              Lê aquilo que o jogador comunicou ao clube no momento da
              oficialização do vínculo, momento em que expressou o seu
              entusiasmo pelo início dos trabalhos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
