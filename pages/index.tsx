import type { NextPage } from 'next'
import Image from 'next/image'
import LandingPagePost from '../components/feed/LandingPagePost'
import LandingLayout from '../components/layouts/LandingLayout'
import { ReactElement } from 'react'

const Home = () => {
  return (
    <>
      <div className="relative bg-green-600 mb-20">
        <div className="relative px-4 pt-8 mx-auto max-w-2xl text-center sm:px-6 sm:pt-12 lg:px-8 lg:max-w-7xl">
          <div className="w-full flex justify-center pb-8">
            <Image src="/emblema.png" alt="emblema" width={111} height={149} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block lg:inline">
              Só está vencido aquele que admite ter sido derrotado
            </span>
          </h1>
          <p className="mt-4 text-xl text-green-100">
            Aqui vamos sempre por mais!
          </p>
        </div>
        <div className="relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl">
          <div
            aria-hidden="true"
            className="hidden absolute inset-0 top-4 right-8 left-8 bg-green-700 rounded-tl-lg rounded-tr-lg lg:block"
          ></div>
          <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
            <div className="px-6 pt-6 pb-3 rounded-lg lg:px-8 lg:pt-12 lg:bg-transparent">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                  Jornada 11
                </h3>
                <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start">
                  <div className="flex items-center mt-3">
                    <p className="text-2xl font-extrabold tracking-tight text-white">
                      A.D Esposende vs S.C Cabreiros
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block top-6 py-2 px-8 mt-6 w-full text-sm font-medium text-center text-green-600 bg-white rounded-md border border-transparent shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full hover:bg-green-50"
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
            </div>

            <div className="px-6 pt-6 pb-3 bg-white rounded-lg ring-2 ring-green-700 shadow-md lg:px-8 lg:pt-12">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-green-600 uppercase">
                  Próxima jornada - Jornada 12
                </h3>
                <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start">
                  <div className="flex items-center mt-3">
                    <p className="text-2xl font-extrabold tracking-tight text-green-600">
                      S.C Cabreiros vs A.F.C Martim
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block py-2 px-8 mt-6 w-full text-sm font-medium text-center text-white bg-green-600 rounded-md border border-transparent shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full hover:bg-green-700"
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
            </div>

            <div className="px-6 pt-6 pb-3 bg-green-700 rounded-lg lg:px-8 lg:pt-12 lg:bg-transparent">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                  Jornada 13
                </h3>
                <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start">
                  <div className="flex items-center mt-3">
                    <p className="text-2xl font-extrabold tracking-tight text-white">
                      Forjães S.C vs S.C Cabreiros
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block py-2 px-8 mt-6 w-full text-sm font-medium text-center text-green-600 bg-white rounded-md border border-transparent shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full hover:bg-green-50"
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingPagePost />
    </>
  )
}

Home.getLayout = (page: ReactElement) => <LandingLayout>{page}</LandingLayout>

export default Home
