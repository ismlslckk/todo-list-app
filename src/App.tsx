import DefaultLayout from '@components/layouts/DefaultLayout'
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import AuthLayout from '@components/layouts/AuthLayout';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import ProtectedRoute from '@components/routes/ProtectedRoute';
import Register from '@pages/Register';

function App() {
 
  const title23 = 'App';  
  const title233= 'App';  

  return (

    <>
    
      <Routes>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
