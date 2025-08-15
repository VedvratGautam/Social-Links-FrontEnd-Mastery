import React from 'react'

const Social_links = () => {
  return (
    <div className='flex flex-col py-10 items-center w-75'>
        <div className='bg-gray-700  justify-center hover:cursor-pointer items-center hover:bg-green-500 w-full flex py-2 my-2 rounded-md '>
            <button className='hover:cursor-pointer text-white font-inter-regular'>GitHub</button>
        </div>

        <div className='bg-gray-700  hover:bg-green-500 hover:cursor-pointer justify-center items-center w-full flex py-2 my-2 rounded-md '>
          <button className='hover:cursor-pointer text-white font-inter-regular'>Frontend Mentor</button>
        </div>

        <div className='bg-gray-700 justify-center hover:cursor-pointer items-center hover:bg-green-500 w-full flex py-2 my-2 rounded-md '>
            <button className='hover:cursor-pointer text-white font-inter-regular'>LinkedIn</button>
        </div>

        <div className='bg-gray-700 hover:cursor-pointer justify-center items-center w-full hover:bg-green-500 flex py-2 my-2 rounded-md '>
          <button className='hover:cursor-pointer text-white font-inter-regular'>Twitter</button>
        </div>
          
        <div className='bg-gray-700 justify-center hover:cursor-pointer items-center w-full  hover:bg-green-500 flex py-2 my-2 rounded-md '>
            <button className='hover:cursor-pointer text-white font-inter-regular'>Instagram</button>

        </div>




    
    </div>
  )
}

export default Social_links