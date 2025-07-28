import React, { useContext, useState, useEffect } from 'react'
import { Weathercontext } from '../Context2/Weathercontext2'
import { motion } from 'framer-motion'
import RAIN from '../assets/rain12.jpg'
import CLOUD from '../assets/download21.jpg'
import CLOUD2 from '../assets/cloud2.png'
import CLEAR from '../assets/snow2.jpg'
import DROP from '../assets/drop3.png'
import SUN2 from '../assets/sun2 (2).png'
import { BsFillSunsetFill } from "react-icons/bs"
import { IoIosCloudyNight } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { useNavigate } from 'react-router-dom'

function WeatherDisplay() {
  const { data } = useContext(Weathercontext)
  const [image, setImage] = useState()
  const [sun1, setSun] = useState(false)
  const [icon, setIcon] = useState()
const weatherArray = data?.weather || []
  const main = data?.main || {}
  const sys = data?.sys || {}
  const name = data?.name || ''

  const temp = main.temp
  const temp_min = main.temp_min
  const temp_max = main.temp_max
  const humidity = main.humidity

  const sunriseTime = sys.sunrise ? new Date(sys.sunrise * 1000).toLocaleTimeString() : ''
  const sunsetTime = sys.sunset ? new Date(sys.sunset * 1000).toLocaleTimeString() : ''

  useEffect(() => {
    if (weatherArray.length > 0) {
      const Weather2 = weatherArray[0]
      if (Weather2.main === "Clouds") {
        setImage(CLOUD)
        setSun(true)
        setIcon(CLOUD2)
      } else if (Weather2.main === "Rain") {
        setImage(RAIN)
        setSun(true)
        setIcon(DROP)
      } else if (Weather2.main === "Clear") {
        setImage(CLEAR)
        setSun(false)
        setIcon(SUN2)
      }
    }
  }, [weatherArray])

  return (
    <div>
      {weatherArray.length > 0 ? (
        <>
          {weatherArray.map((item, index) => (
            <div
              key={index}
              className='min-h-screen w-full bg-black bg-no-repeat bg-cover flex items-center justify-center px-4 py-10'
            >
              <div className='flex flex-col md:flex-row w-full max-w-5xl bg-white/20 backdrop-blur-md border border-gray-300 rounded-xl overflow-hidden shadow-lg'>
                
    
                <div className='w-full md:w-1/2 p-4 sm:p-6 text-white'>
                  <div className='relative'>
                    <img src={image} className='rounded-lg w-full h-60 sm:h-72 md:h-80 object-cover drop-shadow-xl' alt="weather" />
                    <p className='absolute bottom-4 left-4 text-xl sm:text-2xl font-medium text-white'>{item.description}</p>
                  </div>
                  <div className='rounded-lg mt-6 py-4 px-4 bg-white/5'>
                    <h1 className='text-xl sm:text-2xl font-semibold'>{item.main}</h1>
                    <div className='flex text-sm sm:text-base font-light text-white mt-1'>
                      <p className='mr-4'>H -{temp_max}°</p>
                      <p>L -{temp_min}°</p>
                    </div>
                    <p className='mt-2 text-sm sm:text-base'>Humidity: {humidity}%</p>
                  </div>
                </div>

                <div className='w-full md:w-1/2 p-4 sm:p-6'>
                  <div className='bg-white/5 backdrop-blur-md rounded-xl shadow-2xl h-[380px] flex flex-col justify-between mt-12'>
                    <div className='p-4 space-y-4'>
                      <div className='flex items-center'>
                        <CiLocationOn className='text-white/20 text-3xl sm:text-4xl mr-2' />
                        <p className='text-xl sm:text-3xl text-white font-light'>{name}</p>
                      </div>
                      {sun1 && (
                        <motion.img src={icon} alt='Icon' className='w-32 h-32 absolute' initial={{ x:'0%'}} animate={{ x:'50%'}}transition={{ duration:5,repeat: Infinity,ease:'linear', repeatType:'reverse' }}
                        />
                      )}

                      <h3 className='text-4xl sm:text-6xl font-bold text-white text-center mt-24 ml-18'>{temp}°</h3>
                      <div className='space-y-2 mt-6'>
                        <div className="flex items-center">
                          <BsFillSunsetFill className="text-white/20  text-3xl w-[180px] h-[60px] sm:text-3xl mr-2 mt-4"/>
                          <p className="text-white/30 text-xl sm:text-2xl font-bold mt-4">{sunriseTime}</p>
                        </div>
                        <div className="flex items-center -mt-2">
                          <IoIosCloudyNight className="text-white/20  text-3xl w-[180px] h-[60px] sm:text-3xl mr-2"/>
                          <p className="text-white/30 text-xl sm:text-2xl font-bold">{sunsetTime}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <><p>ERROR</p></>
      )}
    </div>
  )
}

export default WeatherDisplay
