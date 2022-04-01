import { MenuIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
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
    <div className="bg-gray-600 pb-2">
      <div className="container mx-auto pt-2 flex items-center justify-between">
        <Link
          to="/"
          className="text-5xl text-bold uppercase text-white hover:text-orange-500"
        >
          Crypto Shop
        </Link>
        <button className="text-white hover:text-red-500 hover:bg-gray-800 rounded-md">
          <MenuIcon className="h-10 w-10 m-2" />
        </button>
      </div>
      <div className="flex flex-column md:flex-row">
        {navItems.map((item) => (
          <Link to={item.path} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
