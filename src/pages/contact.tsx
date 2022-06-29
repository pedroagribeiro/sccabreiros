import React, { ReactElement, useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Layout from '../components/layouts/Layout';
import { Formik, Form, Field } from 'formik';
import InfoModal from '../components/navigation/InfoModal';
import { inferQueryResponse } from './api/trpc/[trpc]';
import { trpc } from '../utils/trpc';

type ContactFormContentType = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const initialValues: ContactFormContentType = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  };

  const contactMutation = trpc.useMutation(['contact.submit-contact']);

  const handleContact = async (values: ContactFormContentType) => {
    await contactMutation.mutateAsync(values);
  };

  const [displayModal, setDisplayModal] = useState(false);
  const onClose = () => {
    setDisplayModal(false);
  };

  const [modalInfo, setModalInfo] = useState({
    title: '',
    text: '',
    success: false,
  });

  return (
    <div>
      <InfoModal
        onClick={onClose}
        display={displayModal}
        title={modalInfo.title}
        text={modalInfo.text}
        success={modalInfo.success}
      />
      <div className="flex justify-center items-center mt-16 mb-16 text-gray-700">
        <div className="max-w-5xl w-5/6 flex flex-col space-y-0 items-center md:w-3/5 lg:w-2/5">
          <div className="w-full flex space-x-4 bg-white ring-1 rounded-sm ring-gray-200 ">
            <div className="bg-green-600 w-2 rounded-sm" />
            <h2 className="font-bold text-2xl px-3 py-2 text-center md:text-start">
              Formulário de contacto
            </h2>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
              await handleContact(values);
              setDisplayModal(true);
              console.log(contactMutation.status);
              console.log('LOADING: ' + contactMutation.isLoading);
              console.log('ERROR: ' + contactMutation.isError);
              if (contactMutation.isSuccess) {
                console.log(contactMutation.status);
                setModalInfo({
                  title: 'Contacto submetido',
                  text: 'O seu contacto foi submetido com sucesso e tentaremos responder com a maior brevidade possível',
                  success: true,
                });
              } else if (contactMutation.isError) {
                console.log(contactMutation.status);
                setModalInfo({
                  title: 'Ocorreu um erro!',
                  text: 'Ocorreu um erro ao submeter o seu contacto. Tente novamente e se continuar a obter este erro tente mais tarde',
                  success: false,
                });
              }

              actions.resetForm({
                values: { fullName: '', email: '', subject: '', message: '' },
              });
            }}
          >
            <Form className="w-full flex flex-col items-center space-y-4  bg-white ring-1 ring-gray-200 rounded-sm px-8 pt-6 pb-8 mb-4">
              <div className="w-full flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 text-md font-bold"
                  >
                    Nome completo
                  </label>
                  <div className="text-green-600">
                    <BsFillPatchCheckFill className="w-3 h-3" />
                  </div>
                </div>
                <Field
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  name="fullName"
                  placeholder="Nome completo"
                  type="text"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-md font-bold"
                  >
                    Email
                  </label>
                  <div className="text-green-600">
                    <BsFillPatchCheckFill className="w-3 h-3" />
                  </div>
                </div>
                <Field
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-md font-bold"
                  >
                    Assunto
                  </label>
                  <div className="text-green-600">
                    <BsFillPatchCheckFill className="w-3 h-3" />
                  </div>
                </div>
                <Field
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  name="subject"
                  placeholder="Assunto"
                  type="text"
                  required
                  minLength={6}
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-md font-bold"
                  >
                    Mensagem
                  </label>
                  <div className="text-green-600">
                    <BsFillPatchCheckFill className="w-3 h-3" />
                  </div>
                </div>
                <Field
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  placeholder="Mensagem"
                  type="text"
                  as="textarea"
                  required
                />
              </div>
              <div className="w-full flex space-x-2 justify-start items-center ">
                <div className="text-green-600">
                  <BsFillPatchCheckFill className="w-3 h-3" />
                </div>
                <p className="text-sm">Preenchimento obrigatório</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-8 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
                >
                  Submeter contacto
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

Contact.getLayout = (page: ReactElement) => (
  <Layout title="Contacte-nos">{page}</Layout>
);

export default Contact;
