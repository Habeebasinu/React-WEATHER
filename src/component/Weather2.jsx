import React, { useContext } from 'react'
import { Weathercontext } from '../Context2/Weathercontext2'
import HOME from '../assets/home.jpeg'

function Weather() {
  const { inp, submit, Click, Change } = useContext(Weathercontext)

  return (
    <>
      <div
        className='min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center px-4'
        style={{ backgroundImage: `url(${HOME})` }}
      >
        <div className="bg-white/30 backdrop-invert backdrop-opacity-60 rounded-xl p-6 w-full max-w-md">
          <form onSubmit={submit} className='flex flex-col sm:flex-row items-center gap-4'>
            <input
              type='text'
              value={inp}
              name='name'
              onChange={Change}
              className='w-full sm:w-[200px] h-[40px] px-4 text-center border border-black rounded-2xl focus:outline-none'
              placeholder='Search'
            />
            <button
              onClick={Click}
              className='w-full sm:w-[100px] h-[40px] bg-black text-white rounded-2xl hover:bg-gray-800 transition duration-200'
            >
              Click
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Weather
