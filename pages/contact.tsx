import React, { ReactElement } from 'react'
import Layout from '../components/layouts/Layout'

const Contact = () => {
  return (
    <div className="h-full flex justify-center items-center mt-14">
      <form
        className="w-full flex flex-col items-center space-y-4 mx-6 md:mx-32 lg:mx-72 bg-white ring-2 ring-gray-200 shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        action="/send-data-here"
        method="post"
      >
        <h2 className="text-2xl mb-6">✍🏻 Contacte-nos</h2>
        <div className="w-full flex flex-col space-y-2">
          <label
            id="fullname"
            className="block text-gray-700 text-md font-bold"
          >
            Nome completo
          </label>
          <input
            className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            type="text"
            placeholder="Nome completo"
            required
          />
        </div>
        <div className="w-full flex flex-col space-y-2">
          <label id="subject" className="block text-gray-700 text-md font-bold">
            Assunto
          </label>
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
          <label id="message" className="block text-gray-700 text-md font-bold">
            Mensagem
          </label>
          <textarea
            className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Assunto"
            required
          />
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
  )
}

Contact.getLayout = (page: ReactElement) => (
  <Layout title="Contacte-nos">{page}</Layout>
)

export default Contact
