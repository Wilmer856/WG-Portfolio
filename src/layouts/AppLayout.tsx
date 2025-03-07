import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Pofology';
  const pageTitle = title ? `${title} - ${appName}` : appName;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Menu />
        <div className="mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
