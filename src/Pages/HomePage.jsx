import { ArrowBigRightDash } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';

const HomePage = () => {
  const { user } = useContext(authContext);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {user ? (
        <Link to="/dashboard">
          <button className="flex items-center gap-2 font-bold btn btn-outline text-teal-400 ">
            <span>
              If you already have an account logged in, go to the dashboard,
              otherwise log in.
            </span>
            <ArrowBigRightDash></ArrowBigRightDash>
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="flex items-center gap-2 font-bold btn btn-outline text-teal-400 ">
            <span>
              If you already have an account logged in, go to the dashboard,
              otherwise log in.
            </span>
            <ArrowBigRightDash></ArrowBigRightDash>
          </button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
