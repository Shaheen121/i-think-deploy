import React from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { SlOptions } from 'react-icons/sl';
import { BiComment } from 'react-icons/bi';
import { TiWorld } from 'react-icons/ti';

const Post = () => {
  const avatar = "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";
  return (
    <div className="bg-[#D6E4E5] rounded-[1rem] px-5 py-4 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <div className="w-12 h-12 cursor-pointer">
            <img src={avatar} alt="" className='rounded-full' />
          </div>

          <div className="ml-3 cursor-pointer">
            <p className="font-bold ">Aous</p>
            <div className="flex">
              <p className="text-xs">2 hours ago</p>
              <TiWorld className="ml-1 shrink-0" />
            </div>
          </div>
        </div>

        <div className="w-10 h-10">
          <SlOptions className='w-4 h-4' />
        </div>


      </div>
      {/* Input */}
      <div className="my-3  ">
        <p>Hello there !</p>
      </div>
      {/* Image */}
      <div className="-mx-5">
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" alt="" />
      </div>
      {/* Number of Likes + Buttons */}
      <div>
        <div className="flex justify-between mt-1">

          <div className="flex items-center ">
            <div className=" w-[1.1rem] h-[1.1rem]">
              <AiFillLike />
            </div>
            <p className="pl-2 whitespace-nowrap  text-[15px] sm:text-[16px]">
              Aous and 2 others.
            </p>
          </div>
          <p className="whitespace-nowrap text-[15px] sm:text-[16px]">
            2 Comments
          </p>
        </div>

        <div className="border-b my-4 border-[#497174]"></div>

        <div className="flex justify-between mx-6">

          <div className="flex items-center cursor-pointer">
            <AiOutlineLike />
            <p className="pl-2 text-[18px]">Like</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <BiComment />
            <p className="pl-2 text-[18px]">Comment</p>
          </div>

        </div>

        <div className="border-b my-4 border-[#497174]"></div>



        {/* Comment Section*/}
        <div className="max-h-60  overflow-y-auto  ">
          <div className="flex justify-between text-[#8e8d8d]  ">
            <p>{`See 3 previous comments`}</p>
          </div>
          {/* First Comment */}

          <div>
            <div className="flex items-center mt-3">
              <div className="w-10 h-10">
                <img src={avatar} className="rounded-full" />
              </div>
              <p className="ml-2 font-bold">Shaheen</p>
              <p className="ml-2 ">Goooood</p>
            </div>
            <div className="ml-[3rem] flex -mt-1.5">
              <p className="mr-2">Like </p>
              <p>Reply </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Post