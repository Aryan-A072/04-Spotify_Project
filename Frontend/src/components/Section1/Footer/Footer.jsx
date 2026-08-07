import React from 'react'
import { CircleFadingPlus, Copyleft, MessageCirclePlus, Share2 } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex flex-row flex-wrap gap-4 p-1 footer border-y-2 border-white/10 py-20'>
        <div className='w-52 flex flex-col gap-2'>
            <h2>Company</h2>
            <p>About</p>
            <p>Jobs</p>
            <p>For the record</p>
        </div>
        <div className='w-52 flex flex-col gap-2'>
            <h2>Communities</h2>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
        </div>
        <div className='w-52 flex flex-col gap-2'>
            <h2>Useful links</h2>
            <p>Support</p>
            <p>Free Mobile App</p>
            <p>Popular by country</p>
            <p>Import your music</p>
        </div>
        <div className='w-52 flex flex-col gap-2'>
            <h2>Spotify Plans</h2>
            <p>Premium Standard</p>
            <p>Premium Platinum</p>
            <p>Premium Student</p>
            <p>Spotify Free</p>
        </div>
        <div className='h-fit flex gap-5'>
            <button className='p-3 rounded-full bg-white/10'>
                <CircleFadingPlus size={20} />
            </button>
            <button className='p-3 rounded-full bg-white/10'>
                <MessageCirclePlus size={20} />
            </button>
            <button className='p-3 rounded-full bg-white/10'>
                <Share2 size={20} />
            </button>
        </div>
    </div>
  )
}

export default Footer