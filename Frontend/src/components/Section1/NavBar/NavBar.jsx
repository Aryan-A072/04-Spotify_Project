import React from 'react'
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const NavBar = () => {
  return (
    <nav className='w-full text-white px-4'>
      <div className='flex items-center justify-between'>
        
        <LeftNav />
        <RightNav />

      </div>
    </nav>
  )
}

export default NavBar