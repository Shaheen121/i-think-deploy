import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Wikipedia = () => {

  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: { safeSearch: 'Off', textFormat: 'Raw' },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'a66992fbbdmshe32df20d1736fe2p16b644jsnad5e4a53148d',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  const [wiki, setWiki] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setWiki(response.data.value);
    }).catch(function (error) {
      console.error(error);
    });
  }, [setWiki])

  return (
    <div>
      <Header />
      <div className='w-[40rem] mx-auto mt-4'>
        {wiki?.map((item) => (
          <div
            key={item.datePublished}
            className='bg-[#D6E4E5] hover:bg-[#EB6440] rounded-xl mt-4 transition 
            duration-300 ease-in-out cursor-pointer'>

            <div>
              <h2
                className='w-[38rem] mx-auto text-left text-lg font-bold p-5 pt-2'>
                {item?.name}
              </h2>
            </div>

            <div className='flex justify-between items-center w-[30rem] mx-auto p-4'>
              <div>
                <img
                  className='w-[10rem] shrink-0 mx-auto border-spacing-1 rounded-lg'
                  src={item?.image?.thumbnail?.contentUrl}
                  alt="" />
              </div>

              <div>
                <a className="hover:text-white" href={item?.url}>
                  Click for more
                </a>
              </div>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wikipedia