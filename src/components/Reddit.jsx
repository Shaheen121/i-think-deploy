import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'


const Reddit = () => {

  const options = {
    method: 'GET',
    url: 'https://reddit3.p.rapidapi.com/subreddit',
    params: {url: 'https://www.reddit.com/r/wallstreetbets', filter: 'hot'},
    headers: {
      'X-RapidAPI-Key': 'a66992fbbdmshe32df20d1736fe2p16b644jsnad5e4a53148d',
      'X-RapidAPI-Host': 'reddit3.p.rapidapi.com'
    }
  };

  const [reddit, setReddit] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setReddit(response.data.posts);
    }).catch(function (error) {
      console.error(error);
    });
  }, [setReddit])


  return (
    <div>
      <Header />
      <div className='w-[40rem] mx-auto mt-4'>
        {reddit.map((item) => (
          <div 
          key={item.id}
          className='bg-[#D6E4E5] hover:bg-[#EB6440] rounded-xl mt-4 transition duration-300 ease-in-out cursor-pointer'>
            <h1
              className='w-[38rem] mx-auto text-left text-lg font-bold p-5 pt-2'
            >{item?.title}</h1>
            <div className='flex justify-between mx-auto p-4'>
              <div>{item?.link_flair_text}</div>
              <p>{item?.subreddit}</p>
            </div>

            <div className='flex justify-evenly m-4 p-4'>
              <h5
              className='hover:text-white'
              >{item?.author}</h5>
              <a 
              className='hover:text-white'
              href={`https://reddit.com${item?.permalink}`}>Post Link</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Reddit