import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <h3 >Login Layout</h3>

      <Outlet />
    </div>
  );
};

export default AuthLayout;