import React, { useState } from 'react'
import { Search, House, Headphones, CircleArrowDown, Minus, X, Menu, LogOut} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../../../pages/Logout';
import MenuLogout from './MenuLogout';

const RightNav = () => {

  const [menuOpen, setMenuOpen] = useState(false)
    const token = localStorage.getItem("token");

    const navigate = useNavigate()

  return (
    <>
        {/* Center Section */}
        <div className='hidden lg:flex items-center text-white/50 font-bold gap-6'>
          
          <div className='flex items-center gap-5 text-lg'>
            <button>Premium</button>
            <button>Support</button>
            <button>Download</button>

            <Minus 
            className='rotate-90 text-white' 
            size={50} 
            strokeWidth={1} />
          </div>

            {/* Desktop Section */}
          
          <div className='flex items-center gap-5'>
            <button className='flex items-center gap-2'>
              <CircleArrowDown size={20} />InstallApp</button>

            <Logout />
            
          </div>
        </div>
        
        <div className='relative lg:hidden'>
          {/* Menu Button */}
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32}/> : <Menu size={28} />}
        </button>
        
        {/* Mobile View */}
        {menuOpen && (
        <div className="absolute right-0 top-14 z-50 flex flex-col gap-5 bg-[#111] p-5 rounded-2xl w-64 shadow-lg">

          <button>Premium</button>
          <button>Support</button>
          <button>Download</button>

          <button className="flex items-center justify-center gap-2">
            <CircleArrowDown size={18} />
            Install App
          </button>
          
          <MenuLogout />
        </div>
      )}
      </div>
    </>
  )
}
export default RightNav