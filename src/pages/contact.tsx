import React, { ReactElement } from 'react'
import { MdLabelImportant } from 'react-icons/md'
import Layout from '../components/layouts/Layout'

const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-16 text-gray-700">
      <div className="max-w-5xl flex flex-col space-y-0 items-center mx-6 md:mx-32 lg:mx-72">
        <div className="w-full flex space-x-4 bg-white ring-1 rounded-sm ring-gray-200 ">
          <div className="bg-green-600 w-2 rounded-sm" />
          <h2 className="font-bold text-2xl px-3 py-2 text-center md:text-start">
            Formulário de contacto
          </h2>
        </div>
        <form
          className="w-full flex flex-col items-center space-y-4  bg-white ring-1 ring-gray-200 rounded-sm px-8 pt-6 pb-8 mb-4"
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
                Assunto
              </label>
              <div className="text-red-600">
                <MdLabelImportant />
              </div>
            </div>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Assunto"
              required
              minLength={6}
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <div className="flex space-x-1 items-center">
              <label
                id="message"
                className="block text-gray-700 text-md font-bold"
              >
                Mensagem
              </label>
              <div className="text-red-600">
                <MdLabelImportant />
              </div>
            </div>
            <textarea
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Mensagem"
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
              Submeter contacto
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Contact.getLayout = (page: ReactElement) => (
  <Layout title="Contacte-nos">{page}</Layout>
)

export default Contact
