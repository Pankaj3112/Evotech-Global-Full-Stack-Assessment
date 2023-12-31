import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <nav className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between bg-[#264653] p-3 py-2 sm:p-6 sm:py-4 min-w-fit fixed top-0 w-full">
      <div className="flex items-center text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl min-w-max">Survey</span>
      </div>

      <div className="w-full text-white flex justify-between">
        <div className="text-sm flex items-center">
          <Link to="/" className="inline-block hover:text-[#F4A261] mr-4 ">
            Home
          </Link>

          {user && (
            <Link
              to="/view-all"
              className="inline-block hover:text-[#F4A261] mr-4"
            >
              View Surveys
            </Link>
          )}
        </div>

        <div className="flex gap-2 items-center">
          {user ? (
            <>
              <p>{user.username}</p>
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#E76F51] hover:bg-white "
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/admin-login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#E76F51] hover:bg-white"
              >
                Admin Login
              </Link>

              <Link
                to="/admin-signup"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#E76F51] hover:bg-white"
              >
                Admin Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
