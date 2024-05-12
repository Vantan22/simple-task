import { Navigate, useRoutes } from 'react-router-dom';

import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import PasswordRecovery from './page/PasswordRecovery/PasswordRecovery';
import Home from './layout/Home/index'
import Dashboard from './page/Dashboard/Dashboard'
import Projects from './page/Projects/Projects';
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
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },

  ]);
};

export { Routes };
