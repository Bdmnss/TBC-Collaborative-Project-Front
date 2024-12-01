import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('');

  const handleButtonClick = (button: string) => {
    setActiveButton((prev) => (prev === button ? '' : button));
  };

  return (
    <footer className="flex gap-[1.5rem]">
      <div className="custom-lg:gap-10 mx-auto flex gap-[2rem] sm:gap-[7rem] lg:gap-[20rem]">
        <button
          onClick={() => handleButtonClick('home')}
          className={`flex cursor-pointer flex-col items-center ${
            activeButton === 'home' ? 'text-[#4E53A2]' : 'text-grey'
          }`}
        >
          <img
            src="/icons/home.svg"
            alt="Home"
            className={`grey h-6 w-6 ${
              activeButton === 'home'
                ? 'hue-rotate+180 filter'
                : 'hue-rotate-180 filter'
            }`}
          />
          <span
            className={activeButton === 'home' ? 'text-[#4E53A2]' : 'text-grey'}
          >
            Home
          </span>
        </button>

        <button
          onClick={() => handleButtonClick('leaderboard')}
          className={`flex cursor-pointer flex-col items-center ${
            activeButton === 'leaderboard' ? 'text-[#4E53A2]' : 'text-grey'
          }`}
        >
          <img
            src="/icons/leaderboard.svg"
            alt="leaderboard"
            className={`h-6 w-6 ${
              activeButton === 'leaderboard'
                ? 'hue-rotate+180 filter'
                : 'hue-rotate-180 filter'
            }`}
          />
          <span
            className={
              activeButton === 'leaderboard' ? 'text-[#4E53A2]' : 'text-grey'
            }
          >
            LeaderBoard
          </span>
        </button>

        <button
          onClick={() => handleButtonClick('profile')}
          className={`flex cursor-pointer flex-col items-center lg:hidden ${
            activeButton === 'profile' ? 'text-[#4E53A2]' : 'text-grey'
          }`}
        >
          <img
            src="/icons/profile.svg"
            alt="profile"
            className={`h-6 w-6 ${
              activeButton === 'profile'
                ? 'hue-rotate+180 filter'
                : 'hue-rotate-180 filter'
            }`}
          />
          <span
            className={
              activeButton === 'profile' ? 'text-[#4E53A2]' : 'text-grey'
            }
          >
            Profile
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
