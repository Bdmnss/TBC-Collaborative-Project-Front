import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('home');

  const handleButtonClick = (button: string) => {
    setActiveButton((prev) => (prev === button ? '' : button));
  };
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <nav className="mx-20">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleButtonClick('profile')}
              className={`mr-[10rem] flex cursor-pointer flex-col items-center ${
                activeButton === 'profile' ? 'text-[#4E53A2]' : 'text-grey'
              }`}
            >
              <img
                src="/icons/profile.svg"
                alt="profile"
                className={`h-6 w-6 ${activeButton === 'profile' ? 'hue-rotate+180 filter' : 'hue-rotate-180 filter'}`}
              />
              <span
                className={
                  activeButton === 'profile' ? 'text-[#4E53A2]' : 'text-grey'
                }
              >
                Profile
              </span>
            </button>
            <li>
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Register
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
