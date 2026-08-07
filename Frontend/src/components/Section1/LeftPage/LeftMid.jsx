import React from 'react'
import { Link } from 'react-router-dom'

const LeftMid = () => {
  return (
    <>
    {/* Mid */}
       <div className='h-85 overflow-y-scroll py-4'>
               <div className='mt-4 flex flex-col gap-2 items-start mx-2 rounded-lg px-5 py-4 bg-white/8'>
                 <h1 className='font-bold'>Create your first playlist</h1>
                 <p className='text-sm font-medium'>It's easy, we'll help you</p>
                 <Link to="loginartist">
                  <button className='my-2 px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-white/10 active:bg-white/10'>
                  Create playlist
                  </button>
                 </Link>
               </div>
               <div className='mt-6 flex flex-col gap-2 items-start mx-2 rounded-lg px-5 py-4 bg-white/8'>
                 <h1 className='font-bold'>Let's find some podcasts to follow</h1>
                 <p className='text-sm font-medium'>We'll keep you updated on new episodes</p>
                 <button className='my-2 px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-white/10 active:bg-white/10'>
                 Browse podcasts
                 </button>
               </div>
             </div> 
    </>
  )
}

export default LeftMid