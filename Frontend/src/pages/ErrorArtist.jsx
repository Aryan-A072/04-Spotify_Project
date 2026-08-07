import React from 'react'

const ErrorArtist = () => {
  return (
    <div className='w-screen h-screen overflow-auto flex flex-col justify-center items-center bg-black text-white'>
        <img
          className='w-16 object-cover mb-10'
          src='https://i.pinimg.com/736x/4b/48/2c/4b482c8cdaa66254150a0e692b263ea6.jpg' 
          alt='spotify logo' />
        <h1 className='text-center text-4xl font-bold'>Error 404 ||<br/> Only artists can create albums</h1>
    </div>
  )
}

export default ErrorArtist