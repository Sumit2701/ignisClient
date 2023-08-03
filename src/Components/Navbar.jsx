import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; // Import useUser
import { useState } from 'react';
const Navbar = () => {
  const { loggedInUsername, setLoggedInUsername } = useUser();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setLoggedInUsername('null');
    // Optionally, perform any logout-related tasks (e.g., clearing tokens)
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleCreateEventClick = () => {
    if (loggedInUsername==='null') {
      // User is not logged in, redirect to login page
      navigate('/login');
    } else {
      // User is logged in, navigate to the create event page
      navigate('/create-event');
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white font-semibold text-lg">
              My Events
            </Link>
          </div>
          <div className="flex space-x-4">
            {loggedInUsername!=="null" ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="text-gray-300 px-3 py-2 rounded-md">
                  <span className="mr-2">{loggedInUsername}</span>
                  <svg
                    className="w-4 h-4 inline-block fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute bg-white text-gray-800 mt-2 p-2 space-y-2 rounded-md">
                    <li>
                      <button onClick={handleLogout} className="hover:text-red-500">
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-gray-300 px-3 py-2 rounded-md">
                Login
              </Link>
            )}
               <button
              onClick={handleCreateEventClick}
              className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-md"
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;