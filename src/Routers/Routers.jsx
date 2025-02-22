import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Dashboard from '../Pages/Dashboard';
import AddTasks from '../Pages/AddTasks';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';

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
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/addTasks',
        element: <AddTasks></AddTasks>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

export default Routers;
