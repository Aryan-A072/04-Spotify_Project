import React from 'react'
import Footer from '../Footer/Footer'
import { Copyleft } from 'lucide-react'
import RightTop from './RightTop'

const RightPage = () => {
  return (
    <div className='h-183 overflow-y-auto lg:w-[70%] bg-white/7 text-white mt-2 mr-2 rounded-xl text-lg px-10 py-6'>
      
      <RightTop />

      <div className='pt-20 pb-10'>
        <Footer />
        <div className='flex items-center justify-start gap-1 text-white/50 text-lg pt-10'>
          <button  className='rotate-180'>
            <Copyleft size={12} />
          </button>
          <h3>2026 Spotify project</h3>
        </div>
      </div>
    </div>
  )
}

export default RightPage