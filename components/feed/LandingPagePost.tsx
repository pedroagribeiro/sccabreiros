import React from 'react'
import Image from 'next/image'

const LandingPagePost = () => {
  return (
    <div className="mb-16 w-full flex flex-col justify-center md:flex-row md:space-x-24 space-y-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 items-center">
      <Image
        src="/contratacoes/luiz_alberto.png"
        alt="contratacao_luiz_alberto"
        width={284}
        height={401}
      />
      <div className="px-6 pb-3 pt-4 md:max-w-xl bg-white rounded-lg ring-2 ring-green-700 shadow-md lg:px-8 lg:pt-8">
        <div>
          <h3 className="text-xl font-semibold tracking-wide text-green-600 uppercase">
            Luiz Alberto é leão
          </h3>
          <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start">
            <div className="flex flex-col space-y-4 items-center mt-3">
              <p className="text-md font-extrabold tracking-tight text-green-600">
                O Sporting Clube de Cabreiros tem o prazer de informar que
                conseguiu assegurar os serviços do jogador Luiz Alberto Leite
                Sousa, que no mundo do futebol é mais conhecido como
                simplesmente Luiz Alberto.
              </p>
              <p className="text-md font-extrabold tracking-tight text-green-600">
                Tens à tua disposição um artigo em que te damos a conhecer um
                pouco melhor o percurso do jogador até ao momento e quais as
                suas expectativas neste novo clube e numa divisão nova para ele.
              </p>
            </div>
            <a
              href="#"
              className="inline-block py-2 px-8  mb-2 w-full text-sm font-medium text-center text-white bg-green-600 rounded-md border border-transparent shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full hover:bg-green-700"
            >
              Vê o artigo completo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagePost
