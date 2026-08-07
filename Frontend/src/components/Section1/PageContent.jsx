import React from 'react'
import LeftPage from './LeftPage/LeftPage'
import RightPage from './RightPage/RightPage'

const PageContent = () => {
  return (
    <div className='flex'>
      <LeftPage />
      <RightPage />
    </div>
  )
}

export default PageContent