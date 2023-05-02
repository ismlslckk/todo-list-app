import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const [isLogged] = useState(true);

  if (!isLogged) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default DefaultLayout;
