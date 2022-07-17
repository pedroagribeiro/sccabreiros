import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MembershipHighlight = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="bg-green-600 text-3xl font-agencygothic uppercase text-white p-4 rounded-sm shadow-md">
        Ajuda o teu clube!
      </h2>
      <div className="flex flex-col shadow-md">
        <div className="bg-green-600 h-1 rounded-t-sm"></div>
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-sm ">
          <div className="w-full flex lg:w-3/5">
            <Image
              src="/images/membership/fazte_socio.png"
              alt="interview_telmo"
              width={1448}
              height={800}
            />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col space-y-2 px-6 py-4">
            <div></div>
            <p className="uppercase text-gray-400 text-sm">Informação</p>
            <h3 className="text-2xl text-gray-700">
              Faz parte da nossa família e apoia o clube da tua terra!
            </h3>
            <p className="font-extralight text-sm text-gray-600">
              Como sabes os tempos que correm são difíceis para todos e isso não
              é diferente para o <strong>Sporting Clube de Cabreiros</strong>.
              Tendo isso em conta, o que pedimos aos nossos conterrâneos é que
              considerem a possibilidade de se tornarem sócios do nosso clube e
              dessa forma colabararem connosco. Para que possas contribuir
              preenche o formulário disponível através do seguinte butão.
            </p>
            <div className="w-full h-full flex justify-center items-end">
              <Link href="/membership">
                <button className="bg-green-600 p-3 rounded-sm text-white uppercase text-sm">
                  Formulário
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHighlight;
