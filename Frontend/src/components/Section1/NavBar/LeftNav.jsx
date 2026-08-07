import React from 'react'
import { Search, House, Headphones, CircleArrowDown, Minus} from 'lucide-react';
import NavSearch from './NavSearch';

const LeftNav = () => {
  return (
    <>
        {/* Left Section */}
        <div className='flex gap-3 items-center'>

          {/* Logo */}
          <img
          className='w-16 object-cover'
          src='https://i.pinimg.com/736x/4b/48/2c/4b482c8cdaa66254150a0e692b263ea6.jpg' 
          alt='spotify logo' />

          {/* Home Button */}
          <button 
          className='rounded-full bg-[#2a2a2a] p-3 hover:bg-[#3a3a3a] active:scale-95'>
            <House size={22} />
          </button>

          <NavSearch />
        </div>
    </>
  )
}

export default LeftNav