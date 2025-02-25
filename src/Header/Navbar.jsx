import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import Logo from '../assets/Image/Things.png';

const Navbar = () => {
  const { user, LogOutUser } = useContext(authContext);
  console.log(user?.displayName);

  const handleLogOut = () => {
    LogOutUser()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-accent text-white font-bold py-3">
      <div className="navbar-start">
        <a
          href="/dashboard"
          className="btn btn-ghost text-xs md:text-2xl font-bold"
        >
          <img className="w-7 md:w-9 h-6 md:h-8" src={Logo} alt="" />
          Task Management
        </a>
      </div>

      <div className="navbar-end flex items-center gap-1 md:gap-5">
        <div>
          <small className="text-xs">{user?.displayName}</small>
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn md:px-8 text-accent rounded-none"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn md:px-8 text-accent rounded-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
