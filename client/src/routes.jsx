import { Navigate, useRoutes } from 'react-router-dom';

import Login from './page/Login/Login.jsx';
import SignUp from './page/SignUp/SignUp.jsx';
import PasswordRecovery from './page/PasswordRecovery/PasswordRecovery.jsx';
import Home from './layout/Home/index.jsx'
import Dashboard from './page/Dashboard/Dashboard.jsx'
import Projects from './page/Projects/Projects.jsx';
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
