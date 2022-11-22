import React from 'react'
import { AiFillCamera } from 'react-icons/ai';
import { AiFillVideoCamera } from 'react-icons/ai';


const CreatePost = () => {
  const avatar = "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

  return (
    <div className=' w-screen sm:w-full'>
      <div className='bg-[#D6E4E5] max-w-[30rem] sm:max-w-[34rem] mx-auto  sm:px-2 rounded-[1rem]'>
        <div className='mt-8 flex flex-col items-center w-full p-3 pt-4'>

          {/* User Image */}
          <div className='flex items-center'>
            <div className='w-9 h-9 shrink-0'>
              <img
                src={avatar}
                className="bg-white rounded-full"
                alt="user" />
            </div>

            {/* User Input */}
            <div className='flex items-center ml-5 w-full'>
              <input
                type="text"
                className="outline-0 p-1 rounded-xl pl-3 w-full h-12 truncate text-gray-800"
                placeholder='What do you think? ... ' />
            </div>

            {/* Post button */}
            <div className='flex items-center bg-[#EB6440] px-3 rounded-full h-10 ml-4 cursor-pointer'>
              <button className='text-white'>
                Post
              </button>
            </div>
          </div>

          <div className="border-b mb-4 mt-2"></div>
          {/* Photo, Video Upload  */}
          <div className='flex justify-evenly px-3 sm:mx-9 pb-3 w-full'>
            {/* Photo  */}
            <div className="flex items-center cursor-pointer">
              <div className="">
                <AiFillCamera className="w-7 h-7" />
              </div>
              <p className="pl-2  whitespace-nowrap text-[14px]">Photo</p>
            </div>
            {/* Video  */}
            <div className="flex items-center cursor-pointer">
              <div className="">
                <AiFillVideoCamera className="w-7 h-7" />
              </div>
              <p className="pl-2  whitespace-nowrap text-[14px]">Video</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default CreatePost