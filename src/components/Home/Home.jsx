import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import './Home.css';

const Home = () => {
  return (
    <div className="bg__img">
      <div className="pt-60 text-center">
        <h1 className="text-3xl text-white sm:text-6xl font-bold font-serif tracking-wide">
          Welcome to CRYPTO CAFE ☕
        </h1>
        <button className="border-2 border-white text-white hover:text-black hover:bg-white px-4 py-2 my-3 text-3xl transition-all duration-200 ease-in-out cursor-pointer rounded-full">
          <div className="flex items-center">
            <span className="pl-6 pr-2 py-3">Explore Coins</span>
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
