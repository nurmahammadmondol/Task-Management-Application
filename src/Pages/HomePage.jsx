import { ArrowBigRightDash } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import TasksLottiFile from '../assets/Animation-tasks.json';
import Lottie from 'lottie-react';

const HomePage = () => {
  const { user } = useContext(authContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center   bg-gradient-to-t from-blue-400 to-teal-400">
      <div className="flex flex-col items-center justify-center gap-5 relative z-50">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
          <h4 className="text-blue-800 text-xl md:text-4xl font-bold  text-center">
            If you already have an account logged in, go to the dashboard,
            otherwise log in.
          </h4>
        </div>

        <div>
          {user ? (
            <Link to="/dashboard">
              <button className="flex items-center gap-2 font-bold btn btn-outline  px-5 md:px-10 text-xl  bg-gradient-to-l from-blue-400 to-teal-500 text-white">
                <span>Get Started</span>
                <ArrowBigRightDash></ArrowBigRightDash>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="flex items-center gap-2 font-bold btn btn-outline  px-5 md:px-10 text-xl  bg-gradient-to-l from-blue-400 to-teal-500 text-white">
                <span>Get Started</span>
                <ArrowBigRightDash></ArrowBigRightDash>
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="absolute opacity-20">
        <div className="h-[700px]">
          <Lottie className="h-full" animationData={TasksLottiFile}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
