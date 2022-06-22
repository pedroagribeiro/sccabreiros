import React, { ReactElement } from 'react'
import { MdLabelImportant } from 'react-icons/md'
import Layout from '../../components/layouts/Layout'

const Membership = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-16 text-gray-700">
      <div className="max-w-6xl flex flex-col space-y-0 items-center mx-6 md:mx-32 lg:mx-72 ">
        <div className="w-full flex space-x-4 bg-white ring-1 rounded-sm ring-gray-200 ">
          <div className="bg-green-600 w-2 rounded-sm" />
          <h2 className="font-bold text-2xl px-3 py-2 text-center md:items-start">
            Formulário de adesão de novo sócio
          </h2>
        </div>
        <form
          className="w-full flex flex-col items-center space-y-4 bg-white ring-1 ring-gray-200 rounded-sm px-8 pt-6 pb-8 mb-4"
          action="/send-data-here"
          method="post"
        >
          <div className="w-full flex flex-col space-y-2">
            <div className="flex space-x-1 items-center">
              <label
                id="fullname"
                className="block text-gray-700 text-md font-bold"
              >
                Nome completo
              </label>
              <div className="text-red-600">
                <MdLabelImportant />
              </div>
            </div>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Nome completo"
              required
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <div className="flex space-x-1 items-center">
              <label
                id="subject"
                className="block text-gray-700 text-md font-bold"
              >
                Data de nascimento
              </label>
              <div className="text-red-600">
                <MdLabelImportant />
              </div>
            </div>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="birthdate"
              type="date"
              required
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <div className="flex space-x-1 items-center">
              <label
                id="address"
                className="block text-gray-700 text-md font-bold"
              >
                Morada
              </label>
              <div className="text-red-600">
                <MdLabelImportant />
              </div>
            </div>
            <textarea
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Address"
              placeholder="(Rua, número de porta)"
              required
            />
          </div>
          <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 items-center">
            <div className="w-full flex flex-col space-y-2">
              <div className="flex space-x-1 items-center">
                <label
                  id="postal_code"
                  className="block text-gray-700 text-md font-bold"
                >
                  Código-postal
                </label>
                <div className="text-red-600">
                  <MdLabelImportant />
                </div>
              </div>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="postal_code"
                type="text"
                placeholder="ex: 4700-000"
                required
              />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <div className="flex space-x-1 items-center">
                <label
                  id="locality"
                  className="block text-gray-700 text-md font-bold"
                >
                  Localidade
                </label>
                <div className="text-red-600">
                  <MdLabelImportant />
                </div>
              </div>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="locality"
                type="text"
                placeholder="ex: Cabreiros, Braga"
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 items-center">
            <div className="w-full flex flex-col space-y-2">
              <div className="flex space-x-1 items-center">
                <label
                  id="locality"
                  className="block text-gray-700 text-md font-bold"
                >
                  Contacto telefónico
                </label>
                <div className="text-red-600">
                  <MdLabelImportant />
                </div>
              </div>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="telephonic_contact"
                type="number"
                placeholder="ex: 919999999"
                required
                maxLength={9}
                minLength={9}
              />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <div className="flex space-x-1 items-center">
                <label
                  id="photo"
                  className="block text-gray-700 text-md font-bold"
                >
                  Carregar foto
                </label>
                <div className="text-red-600">
                  <MdLabelImportant />
                </div>
              </div>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="photo"
                type="file"
                accept="image/png, image/jpeg"
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <div className="flex space-x-1 items-center">
              <label
                id="locality"
                className="block text-gray-700 text-md font-bold"
              >
                Email
              </label>
              <div className="text-red-600">
                <MdLabelImportant />
              </div>
            </div>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="ex: sccabreiros@1932@gmail.com"
              required
            />
          </div>
          <div className="w-full flex space-x-6 justify-start items-center">
            <div className="text-red-600">
              <MdLabelImportant />
            </div>
            <p className="text-md">
              Os campos marcados com este símbolo são de preenchimento
              obrigatório
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="mt-8 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
            >
              Submeter dados
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Membership.getLayout = (page: ReactElement) => (
  <Layout title="Faz-te sócio">{page}</Layout>
)

export default Membership
