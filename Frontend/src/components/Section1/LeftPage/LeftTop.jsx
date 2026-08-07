import React from 'react'
import { Plus } from "lucide-react"
import { Link } from 'react-router-dom'

const LeftTop = () => {

  return (
    <>
      {/* Top */}
      <div className='py-6 px-6 flex flex-wrap justify-between font-bold items-center bg-white/1'>
        <h1>Your Library</h1>
        
        <Link to="/loginartist">
          <button className='flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 outline-none'>
          <Plus size={22} strokeWidth={1.25} />
          Create</button>
        </Link>
      </div>
    </>
  )
}

export default LeftTop