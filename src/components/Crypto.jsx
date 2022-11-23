import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Crypto = () => {

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'a66992fbbdmshe32df20d1736fe2p16b644jsnad5e4a53148d',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setCrypto(response.data.data.coins);
    }).catch(function (error) {
      console.error(error);
    });
  }, [setCrypto])
  return (
    <div>
      <Header />
      <div className='w-[40rem] mx-auto mt-4 p-4'>
        {crypto?.map((item) => (
          <div
            key={item.uuid}
            className={`bg-[#D6E4E5] hover:bg-[#EB6440] rounded-xl mt-4 transition 
            duration-300 ease-in-out cursor-pointer hover:border-[${item?.color}]`}>

            <div className='flex justify-evenly items-center m-4 p-4'>
              {/* Coin Name */}
              <div className='font-bold'>
                {item?.name}
              </div>
              {/* Coin icon */}
              <div>
                <img
                  className='w-10 h-10'
                  src={item?.iconUrl} alt="" />
              </div>
            </div>

            <div className='flex justify-evenly items-center m-4 p-4'>
              <div>
                <span className='font-bold'>BTC Price: </span>
                {item?.btcPrice}
              </div>

              <div>
                <span className='font-bold'>Market Cap: </span>
                {item?.marketCap}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crypto