import React, { ReactElement, useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Layout from '../../components/layouts/Layout';
import { Formik, Form, Field, validateYupSchema } from 'formik';
import InfoModal from '../../components/navigation/InfoModal';
import { inferQueryResponse } from '../api/trpc/[trpc]';
import { trpc } from '../../utils/trpc';

type MembershipFormContentType = {
  fullName: string;
  birthdate: Date;
  address: string;
  postalCode: string;
  location: string;
  phone: string;
  photo: string;
  email: string;
};

const Membership = () => {
  const initialValues: MembershipFormContentType = {
    fullName: '',
    birthdate: new Date(),
    address: '',
    postalCode: '',
    location: '',
    phone: '',
    photo: '',
    email: '',
  };

  const memberMutation = trpc.useMutation(['membership.submit-membership']);

  const [displayModal, setDisplayModal] = useState(false);
  const onClose = () => setDisplayModal(false);
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
        <div className="max-w-6xl flex flex-col space-y-0 items-center mx-6 md:mx-32 lg:mx-72 ">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values: MembershipFormContentType, actions) => {
              values.birthdate = new Date(values.birthdate);
              values.phone = values.phone.toString();
              await memberMutation.mutateAsync(values);
              // Extremely dangerous and wrong
              // TODO: Check this
              {
                (memberMutation.status == 'success' ||
                  memberMutation.status == 'idle') &&
                  setModalInfo({
                    title: 'Candidatura submetida',
                    text: 'A sua candidatura a sócio foi submetida com sucesso',
                    success: true,
                  });
              }
              {
                memberMutation.status == 'error' &&
                  setModalInfo({
                    title: 'Ocorreu um erro com a candidatura',
                    text: 'Ocorreu um erro ao submeter a sua candidatura. Por favor reveja os seus dados e tente de novo. Se o problema persistir contacte-nos.',
                    success: false,
                  });
              }
              setDisplayModal(true);
              actions.resetForm({
                values: {
                  fullName: '',
                  birthdate: new Date(),
                  address: '',
                  postalCode: '',
                  location: '',
                  phone: '',
                  photo: '',
                  email: '',
                },
              });
            }}
          >
            <Form
              className="w-full flex flex-col items-center space-y-4 bg-white ring-1 ring-gray-200 rounded-sm shadow-md px-8 pt-6 pb-8 mb-4"
              action="/send-data-here"
              method="post"
            >
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
                  id="fullname"
                  name="fullName"
                  type="text"
                  placeholder="Nome completo"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <label
                    htmlFor="birthdate"
                    className="block text-gray-700 text-lg font-semibold"
                  >
                    Data de nascimento
                  </label>
                  <div className="text-green-600">
                    <BsFillPatchCheckFill className="w-3 h-3" />
                  </div>
                </div>
                <Field
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-lg font-semibold"
                  >
                    Morada
                  </label>
                  <div className="text-green-600">
                    <BsFillPatchCheckFill className="w-3 h-3" />
                  </div>
                </div>
                <Field
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  name="address"
                  placeholder="(Rua, número de porta)"
                  type="text"
                  as="textarea"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 items-center">
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex space-x-1 items-center">
                    <label
                      htmlFor="postalCode"
                      className="block text-gray-700 text-lg font-semibold"
                    >
                      Código-postal
                    </label>
                    <div className="text-green-600">
                      <BsFillPatchCheckFill className="w-3 h-3" />
                    </div>
                  </div>
                  <Field
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    placeholder="ex: 4700-000"
                    required
                  />
                </div>
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex space-x-1 items-center">
                    <label
                      htmlFor="location"
                      className="block text-gray-700 text-lg font-semibold"
                    >
                      Localidade
                    </label>
                    <div className="text-green-600">
                      <BsFillPatchCheckFill className="w-3 h-3" />
                    </div>
                  </div>
                  <Field
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="location"
                    name="location"
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
                      htmlFor="phone"
                      className="block text-gray-700 text-lg font-semibold"
                    >
                      Contacto telefónico
                    </label>
                    <div className="text-green-600">
                      <BsFillPatchCheckFill className="w-3 h-3" />
                    </div>
                  </div>
                  <Field
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
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
                      htmlFor="photo"
                      className="block text-gray-700 text-lg font-semibold"
                    >
                      Carregar foto
                    </label>
                    <div className="text-green-600">
                      <BsFillPatchCheckFill className="w-3 h-3" />
                    </div>
                  </div>
                  <input
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                  />
                </div>
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
                  type="text"
                  placeholder="ex: sccabreiros@1932@gmail.com"
                  required
                />
              </div>
              <div className="w-full flex space-x-2 justify-start items-center">
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
                  Submeter dados
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

Membership.getLayout = (page: ReactElement) => (
  <Layout
    title="Faz-te sócio"
    subpages={[{ title: 'Faz-te sócio', url: '/membership' }]}
  >
    {page}
  </Layout>
);

export default Membership;
