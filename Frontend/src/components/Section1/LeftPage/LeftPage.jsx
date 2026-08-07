import React, { useState } from 'react'
import LeftTop from './LeftTop'
import LeftMid from './LeftMid'
import LeftFooter from './LeftFooter'
import { ChevronDown, ChevronRight } from 'lucide-react'

const LeftPage = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <>
    <div className='hidden lg:block h-183 w-[28%] bg-white/5 text-white m-2 rounded-xl text-lg'>
      <LeftTop />
      <LeftMid />
      <LeftFooter />

    </div>
      
      <div className='absolute lg:hidden'>

        <button
        className='m-3 z-50 relative'
        onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <ChevronDown size={32}/> : <ChevronRight size={28} />}
        </button>
        
        {menuOpen && (
        <div className="h-170 w-screen absolute left-0 top-14 z-50 flex flex-col gap-5 bg-[#111] p-5 rounded-2xl shadow-lg">
          <LeftTop />
          <LeftMid />
          <LeftFooter /> 
        </div>

      )}
      </div>    
    </>
  )
}

export default LeftPage