import React, { ReactNode } from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';
import Head from 'next/head';

type LandingLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const LandingLayout = ({
  title,
  description,
  children,
}: LandingLayoutProps) => {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* the base padding is px-16
          it got removed from the main because of the main page news component */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
