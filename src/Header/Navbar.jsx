import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';

const Navbar = () => {
  const { user, LogOutUser } = useContext(authContext);

  const Links = (
    <div className="flex flex-col md:flex-row items-center gap-5">
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
    </div>
  );

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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3  p-3 shadow text-teal-500"
          >
            {Links}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl md:text-2xl font-bold">
          Task Management
        </a>
      </div>

      <div className="navbar-end flex items-center gap-5">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{Links}</ul>
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
