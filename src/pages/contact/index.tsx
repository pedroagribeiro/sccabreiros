import React, { ReactElement, useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Layout from '../../components/layouts/Layout';
import PageHeader from '../../components/navigation/PageHeader';
import { Formik, Form, Field } from 'formik';
import InfoModal from '../../components/navigation/InfoModal';
import { inferQueryResponse } from '../api/trpc/[trpc]';
import { trpc } from '../../utils/trpc';

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

  const contactMutation = trpc.useMutation(['contact.submit-contact'], {
    async onSuccess() {},
  });

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
      <div>
        <InfoModal
          onClick={onClose}
          display={displayModal}
          title={modalInfo.title}
          text={modalInfo.text}
          success={modalInfo.success}
        />
        <div className="flex justify-center items-center mt-16 mb-16">
          <div className="max-w-5xl w-5/6 flex flex-col space-y-0 items-center md:w-3/5 lg:w-2/5">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                await contactMutation.mutateAsync(values);
                setDisplayModal(true);
                {
                  contactMutation.isSuccess &&
                    setModalInfo({
                      title: 'Contacto submetido',
                      text: 'O seu contacto foi submetido com sucesso e tentaremos responder com a maior brevidade possível',
                      success: true,
                    });
                }
                {
                  contactMutation.isError &&
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
              <Form className="w-full flex flex-col items-center space-y-4 bg-white rounded-sm shadow-md px-8 pt-6 pb-8 mb-4">
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex space-x-1 items-center">
                    <label
                      htmlFor="fullName"
                      className="block text-gray-700 text-lg font-semibold"
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
                      className="block text-gray-700 text-lg font-semibold"
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
                      className="block text-gray-700 text-md font-semibold"
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
                      className="block text-gray-700 text-lg font-semibold"
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
                  <p className="text-sm text-gray-700">
                    Preenchimento obrigatório
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-8 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
                    disabled={contactMutation.isLoading}
                  >
                    Submeter contacto
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.getLayout = (page: ReactElement) => (
  <Layout
    title="Contacte-nos"
    subpages={[{ title: 'Contacta-nos', url: '/contact' }]}
  >
    {page}
  </Layout>
);

export default Contact;
