import React from 'react'
import logo from '../assets/logo.png'
import { AiFillHome } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { IoNewspaperSharp } from 'react-icons/io5';
import { AiFillInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const avatar = "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

  return (
    <div className='p-4 flex items-center justify-between border-b lg:px-10 bg-[#D6E4E5]'>
      {/* Left Side */}
      <div className='cursor-pointer'>
        <img
          src={logo}
          className='w-28 h-14'
          alt="Logo"
        />
      </div>

      {/* Middle Side */}
      <div className='flex items-center space-x-7'>
        <Link to="/">
          <AiFillHome className='w-7 h-7 text-[#497174] hover:text-[#EB6440] cursor-pointer transition duration-150 ease-out' />
        </Link>

        <AiFillMessage className='w-7 h-7 text-[#497174] hover:text-[#EB6440] cursor-pointer transition duration-150 ease-out' />
        <Link to="/News">
          <IoNewspaperSharp className='w-7 h-7 text-[#497174] hover:text-[#EB6440] cursor-pointer transition duration-150 ease-out' />
        </Link>


        <AiFillInfoCircle className='w-7 h-7 text-[#497174] hover:text-[#EB6440] cursor-pointer transition duration-150 ease-out' />
      </div>

      {/* Right Side */}
      <div className='flex items-center space-x-4'>

        {/* SignIn Button */}
        <div>
          <button className='text-white bg-[#EB6440] px-2 py-2 rounded-lg font-bold cursor-pointer'>
            Sign In
          </button>
        </div>
        {/* Profile Pic */}
        <div className='h-14 w-14 cursor-pointer'>
          <img
            src={avatar}
            className="bg-[#497174] rounded-full"
            alt="" />
        </div>

      </div>
    </div>
  )
}

export default Header