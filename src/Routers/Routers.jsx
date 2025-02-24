import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Dashboard from '../Pages/Dashboard';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import UpdateTask from '../Components/UpdateTask';
import PrivetRouter from '../PrivetRoot/PrivetRouter';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/dashboard',
        element: (
          <PrivetRouter>
            <Dashboard></Dashboard>
          </PrivetRouter>
        ),
      },
      {
        path: '/updateTask/:id',
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) =>
          fetch(
            `https://task-management-application-backend-beta.vercel.app/tasks/${params.id}`
          ),
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

export default Routers;
