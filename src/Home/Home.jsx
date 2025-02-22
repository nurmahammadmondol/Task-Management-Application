import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto my-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
