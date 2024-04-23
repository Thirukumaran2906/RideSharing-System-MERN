import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className='bg-black flex justify-between items-center h-24 px-4 text-white w-full top-0 z-10'>
      <h1 className='text-3xl font-bold text-[#00df9a]'>EcoRide</h1>

      <ul className='hidden md:flex'>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
          <Link to="/profile">Profile</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
          <Link to="/AddJourney">RegisterRide</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
          <Link to="/BrowseJourney">BrowseRide</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
          <Link to="/UserGas">UserGas</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
          <Link to="/GlobalSaved" >GlobalSaved</Link>
        </li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul 
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-999'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>EcoRide</h1>

        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600' onClick={closeNav}>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600' onClick={closeNav}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600' onClick={closeNav}>
          <Link to="/AddJourney">RegisterRide</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600' onClick={closeNav}>
          <Link to="/BrowseJourney">BrowseRide</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600' onClick={closeNav}>
          <Link to="/UserGas">UserGas</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600' onClick={closeNav}>
          <Link to="/GlobalSaved">GlobalSaved</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
