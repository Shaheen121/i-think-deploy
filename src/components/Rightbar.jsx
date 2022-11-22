import React from 'react'

import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { SlOptions } from 'react-icons/sl';

const Rightbar = () => {
  const avatar = "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

  return (
    <div className='hidden lg:block pt-4 sm:pt-8 pr-7'>

      <div className="flex items-center">
        <p className='pr-4 font-bold'>Contacts</p>
        <div className="flex items-center space-x-5">
          <BsFillCameraVideoFill className='w-4 h-4' />
          <FiSearch className='w-4 h-4' />
          <SlOptions className='w-4 h-4' />
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <div className="flex items-center mt-4 cursor-pointer">
          <div className='w-9 h-9 shrink-0'>
            <img
              src={avatar}
              className="bg-[#497174] rounded-full"
              alt="user" />
          </div>
          <p className="ml-2 font-bold whitespace-nowrap">Login</p>
        </div>

      </div>


    </div>
  )
}

export default Rightbar