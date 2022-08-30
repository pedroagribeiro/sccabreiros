import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HighlightProps = {
  id: string;
};

const Highlight = ({ id }: HighlightProps) => {
  return (
    <div className='flex flex-col space-y-4'>
      <h2 className='bg-green-600 text-3xl font-agencygothic font-normal uppercase text-white p-4 rounded-sm shadow-md'>
        Início dos trabalhos e captações dos escalões de formação
      </h2>
      <div className='flex flex-col shadow-md'>
        <div className='bg-green-600 h-1 rounded-t-sm'></div>
        <div className='flex flex-col lg:flex-row bg-gray-100 rounded-sm '>
          <div className='w-full flex lg:w-3/5'>
            <Image
              src='/images/news/noticia_formacao_inicio_2022_2023.png'
              alt='noticia-formacao-inicio-2022-2023'
              width={1448}
              height={800}
              className='rounded-none'
            />
          </div>
          <div className='w-full lg:w-2/5 flex flex-col space-y-2 px-6 py-4'>
            <div></div>
            <p className='uppercase text-gray-400 text-sm'>Notícia</p>
            <h3 className='text-2xl text-gray-700 font-medium'>
              Iniciaram-se os trabalhos da formação e estão abertas as captações
            </h3>
            <p className='font-extralight text-sm text-gray-600'>
              Os escalões de formação começaram a treinar no dia 30 de agosto de
              2022. Para saber tudo e como podes fazer parte da nossa família
              consulta o artigo.
            </p>
            <div className='w-full h-full flex justify-center items-end'>
              <Link href={`/news/${id}`}>
                <button className='bg-green-600 p-3 rounded-sm text-white uppercase text-sm'>
                  Lê o artigo completo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
