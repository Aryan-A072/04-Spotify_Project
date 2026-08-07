import React, { useState } from 'react'
import { Search, House, Headphones, CircleArrowDown, Minus} from 'lucide-react';

const NavSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
        {/* Search Bar */}
          <div className='flex items-center bg-[#1f1f1f] rounded-full px-1 py-1 border border-transparent focus:focus-within:border-white'>
            <button
            onClick={() => setSearchOpen(!searchOpen)}
            className='bg-[#1f1f1f] p-2 rounded-full hover:bg-[#353535] transition'
            >
              <Search 
              className='text-4xl text-white/50 hover:text-white hover:font-bold cursor-pointer'/>
            </button>

            {/* Expand Search Bar */}
            <div
            className={`overflow-hidden transition-all duration-300 ${
              searchOpen 
              ? "sm:w-20 md:w-80 lg:w-120"
              : "w-0 ml-0"
            }`}
            >
              <div className='relative flex items-center'>
                <input
                type="text"
                placeholder='What do you wanna play?'
                className='bg-transparent outline-none w-fullfont-semibold text-sm md:text-base'
                />
                <Minus 
                  className='rotate-90 absolute right-9' 
                  size={50} 
                  strokeWidth={0.2} />
                <Headphones 
                  className='text-4xl text-white/50 hover:text-white hover:font-extrabold transition cursor-pointer absolute right-5'/>

              </div>

            </div>
          </div>
    </>
  )
}

export default NavSearch