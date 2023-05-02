import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      {/*login or register*/}
      <Outlet />
    </>
  );
};

export default AuthLayout;