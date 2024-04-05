import { Navigate, useRoutes } from 'react-router-dom';

import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import PasswordRecovery from './page/PasswordRecovery/PasswordRecovery';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signUp',
      element: <SignUp />,
    },
    {
      path: '/passWord-recovery',
      element: <PasswordRecovery />,
    },

  ]);
};

export { Routes };
