import React from 'react'
import Cards from '../Cards/Cards'
import Artists from '../Cards/Artists'
import Popular from '../Cards/Popular'

const RightTop = () => {
  return (
    <>
        {/* Top */}
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold hover:border-b-2'>Trending Songs</h1>
        <p className='text-sm font-bold hover:border-b-2 text-white/70'>Show all</p>
      </div>
      <Cards />

      <div className='flex justify-between items-center mt-8'>
        <h1 className='text-3xl font-bold hover:border-b-2'>Popular artists</h1>
        <p className='text-sm font-bold hover:border-b-2 text-white/70'>Show all</p>
      </div>
      <Artists />

      <div className='flex justify-between items-center mt-8'>
        <h1 className='text-3xl font-bold hover:border-b-2'>Popular albums and singles</h1>
        <p className='text-sm font-bold hover:border-b-2 text-white/70'>Show all</p>
      </div>
      <Popular />

    </>
  )
}

export default RightTop