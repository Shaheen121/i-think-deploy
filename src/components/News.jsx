import React, { useEffect, useState } from 'react'
import Header from './Header'


import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://programmer-humor.p.rapidapi.com/api/9gag',
  params: {after: '5'},
  headers: {
    'X-RapidAPI-Key': 'a66992fbbdmshe32df20d1736fe2p16b644jsnad5e4a53148d',
    'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
  }
};

const News = () => {

  const [hackNews, setHackNews] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setHackNews(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [setHackNews])

  return (
    <div>
      <Header />
      <div className='w-[40rem] mx-auto mt-4'>
        {hackNews?.map((item) => (
          <div
            key={item.id}
            className='bg-[#D6E4E5] hover:bg-[#EB6440] rounded-xl mt-4 transition duration-300 ease-in-out cursor-pointer'>
            <h3 className='w-[38rem] mx-auto text-left text-lg font-bold p-5 pt-2
            hover:text-[#fff]'>
              {item?.title}
            </h3>
            <div className='flex justify-around p-5'>
              <p className='text-[#EB6440]'>{item.name}</p>
              <a 
              className='hover:text-white'
              href={item?.sourceUrl}>Read more... Click here</a>
            </div>
            <img 
            className='w-full shrink-0'
            src={item?.thumbnail} 
            alt="" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default News