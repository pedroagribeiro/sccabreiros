import React, { ReactElement } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title></title>
        <meta name="description" content="Sporting Clube de Cabreiros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <div className="flex flex-col items-center justify-center space-y-4 h-screen p-10">
          <Image
            src="/images/emblema.png"
            alt="emblema"
            width={144}
            height={194}
          />
          <div className="flex flex-col items-center text-center text-green-800">
            <p className="text-2xl font-bold">Sporting Clube de Cabreiros</p>
            <p className="text-xl">desde 1932</p>
          </div>
          <div className="flex flex-col space-y-4 text-green-600 items-center">
            <p className="text-4xl text-wrap text-center">
              Página não encontrada
            </p>
            <p className="text-lg">
              Se chegaste aqui por alguma ligação disponível no site então é
              porque esta página está ainda em construção.
            </p>
            <div className="flex space-x-2 items-center">
              <p className="text-lg">Volte para a </p>
              <Link href="/" className="underline">
                <button className="underline">página inicial</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
