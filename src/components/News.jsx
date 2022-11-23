import React, { useEffect, useState } from 'react'
import Header from './Header'

// const axios = require("axios");
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://reddit34.p.rapidapi.com/getPopularPosts',
  params: { sort: 'new' },
  headers: {
    'X-RapidAPI-Key': 'a66992fbbdmshe32df20d1736fe2p16b644jsnad5e4a53148d',
    'X-RapidAPI-Host': 'reddit34.p.rapidapi.com'
  }
};

const News = () => {

  const [hackNews, setHackNews] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {

      // console.log(response.data);
      setHackNews(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [setHackNews])

  // console.log(hackNews.data.posts[0].title);

  return (
    <div>

      <Header />
      {/* <div className='w-[40rem] mx-auto mt-4'>
        {hackNews?.map((item) => (
          <div
            className='bg-[#D6E4E5] hover:bg-[#EB6440] rounded-xl mt-4 transition duration-300 ease-in-out cursor-pointer'>
            <h3 className='w-[38rem] mx-auto text-left text-lg font-bold p-5 pt-2
            hover:text-[#fff]'>
              {item?.posts[0]?.title}
            </h3>
            <div className='flex justify-around p-5'>
              <p className='text-[#EB6440]'>{item.source}</p>
              <p>Read more... Click on the Post</p>
            </div>
          </div>
        ))}
      </div> */}

    </div>
  )
}

export default News