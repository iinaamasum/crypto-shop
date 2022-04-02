import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Shop', path: '/shop' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'About', path: '/about' },
  ];
  return (
    <div className="shadow-md w-full sticky top-0 left-0 bg-gray-600">
      <div className="md:flex items-center justify-between py-4 container mx-auto">
        {/* logo */}
        <div className="uppercase tracking-wide text-3xl sm:text-4xl cursor-pointer text-white font-bold ml-8 sm:ml-0">
          Crypto Shop
        </div>
        {/* FaHamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <RiCloseLine /> : <FaHamburger />}
        </div>
        {/* links */}
        <ul
          className={`text-xl md:flex md:items-center absolute md:static bg-gray-600 z-[-1] md:z-auto left-0 w-full md:w-auto pl-12 md:pl-0 transition-all duration-500 ease-in-out ${
            open ? 'top-17 opacity-95' : 'top-[-900px] md:opacity-100 opacity-0'
          }`}
        >
          {navItems.map((item) => (
            <li
              className="md:ml-8 my-7 md:my-0 text-white hover:text-gray-400 transition-all duration-200 uppercase font-semibold"
              key={item.id}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
