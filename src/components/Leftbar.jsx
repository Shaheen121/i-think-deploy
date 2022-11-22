import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaCoffee } from 'react-icons/fa';

const Leftbar = () => {
  const avatar = "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

  return (

    <div className='w-[10rem] hidden sm:block bg-[#D6E4E5] m-4 rounded-lg'>

      <div className='flex flex-col m-1 mx-auto px-4 py-6'>
        {/* Home */}
        <div className='flex items-center font-bold cursor-pointer'>
          <div>
            <AiFillHome className='w-7 h-7' />
          </div>
          <p className='ml-2'>Home</p>
        </div>
        <div className="border-b my-4 border-[#497174]"></div>

        {/* Username */}
        <div className='flex items-center mt-4 cursor-pointer'>
          <div className='w-7 h-7 shrink-0'>
            <img
              src={avatar}
              className="bg-[#497174] rounded-full"
              alt="user" />
          </div>
          <p className='ml-2 font-bold whitespace-nowrap'>Login</p>
        </div>
        <div className="border-b my-4 border-[#497174]"></div>

        {/* Latest News */}
        <div className='flex items-center mt-4 cursor-pointer'>
          <FaCoffee className='w-7 h-7' />
          <p className='ml-2 font-bold'>Latest News</p>
        </div>
      </div>

    </div>
  )
}

export default Leftbar