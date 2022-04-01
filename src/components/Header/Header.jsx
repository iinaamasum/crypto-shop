import { MenuIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
  ];
  return (
    <div className="bg-gray-600 pb-2">
      <div className="container mx-auto pt-2 flex items-center justify-between">
        <Link to="/" className="text-4xl text-bold uppercase text-white">
          Crypto Shop
        </Link>
        <div className="">
          <MenuIcon className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
