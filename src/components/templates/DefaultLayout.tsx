import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { InnerWrapper, Wrapper } from '../atoms';

const DefaultLayout = () => {
  const [isLogged] = useState(true);

  if (!isLogged) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <Header />

        <Outlet />

        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
};

export default DefaultLayout;
