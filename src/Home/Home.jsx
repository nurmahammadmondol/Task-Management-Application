import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Bg_image from '../assets/Image/bg.png';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div
        style={{
          backgroundImage: `url(${Bg_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
