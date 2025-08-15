import { useState } from 'react'
import './App.css'
import Social_links from './instances/social-links'

function App() {

  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center m-0 p-0 '>
      <div className=' bg-gray-800 h-fit w-100 m-0 p-0 rounded-xl flex  flex-col items-center'>
        <div className='p-7'>
          <img src='social-links-profile-main\assets\images\avatar-jessica.jpeg' className='w-full h-25 rounded-full'/>
        </div>
        <div className='justify-center items-center flex flex-col pb-7'>
          <h1 className='font-Inter-bold font-bold text-[30px] text-white '>Jessica Randal</h1>
          <p className='font-Inter-semibold text-green-500 text-[14px]'>London, United Kingdom</p>
        </div>
        <div>
          <p className='text-white font-inter-regular'>"Front-end developer and avid reader"</p>
        </div>
        <div>
          <Social_links />
        </div>
      </div>
    </div>
  )
}

export default App
