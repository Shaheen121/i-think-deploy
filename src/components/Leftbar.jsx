import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaBitcoin, FaCoffee, FaWikipediaW } from 'react-icons/fa';
import { BsNewspaper, BsReddit } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Leftbar = () => {
  const avatar = "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

  return (

    <div className='w-[14rem] hidden sm:block bg-[#D6E4E5] m-4 rounded-lg'>

      <div className='flex flex-col m-1 mx-auto px-4 py-4'>
        {/* Home */}
        <div className='flex items-center m-2 font-bold cursor-pointer'>
          <div>
            <AiFillHome className='w-7 h-7' />
          </div>
          <p className='ml-2'>Home</p>
        </div>
        <div className="border-b my-1 border-[#497174]"></div>

        {/* Username */}
        <div className='flex items-center m-2 cursor-pointer'>
          <div className='w-7 h-7 shrink-0'>
            <img
              src={avatar}
              className="bg-[#497174] rounded-full"
              alt="user" />
          </div>
          <p className='ml-2 font-bold whitespace-nowrap'>Login</p>
        </div>

        <div className="border-b my-1 border-[#497174]"></div>

        {/* Latest News */}
        <Link to='/News'>
          <div className='flex items-center m-2 mt-10 cursor-pointer'>
            <FaCoffee className='w-7 h-7' />
            <p className='ml-2 font-bold'>Latest News</p>
          </div>
        </Link>

        <div className="border-b my-1 border-[#497174]"></div>

        {/* All News */}
        <Link to='/News'>
          <div className='flex items-center m-2 cursor-pointer'>
            <BsNewspaper className='w-7 h-7' />
            <p className='ml-2 font-bold'>All News</p>
          </div>
        </Link>

        <div className="border-b my-1 border-[#497174]"></div>

        {/* Reddit */}
        <Link to='/Reddit'>
          <div className='flex items-center m-2 cursor-pointer'>
            <BsReddit className='w-7 h-7' />
            <p className='ml-2 font-bold'>Reddit</p>
          </div>
        </Link>

        <div className="border-b my-1 border-[#497174]"></div>

        {/* Crypto News */}
        <Link to='/Crypto'>
          <div className='flex items-center m-2 cursor-pointer'>
            <FaBitcoin className='w-7 h-7' />
            <p className='ml-2 font-bold'>Crypto News</p>
          </div>
        </Link>

        <div className="border-b my-1 border-[#497174]"></div>

        {/* Wikipedia */}
        <Link to='/Wikipedia'>
          <div className='flex items-center m-2 cursor-pointer'>
            <FaWikipediaW className='w-7 h-7' />
            <p className='ml-2 font-bold'>Wikipedia</p>
          </div>
        </Link>

        <div className="border-b my-1 border-[#497174]"></div>

      </div>

    </div>
  )
}

export default Leftbar