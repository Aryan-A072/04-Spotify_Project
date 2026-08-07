import React from 'react'
import { Globe } from "lucide-react"

const LeftFooter = () => {
  return (
    <>
        {/* Footer */}
      <footer className='flex flex-row flex-wrap gap-4 my-6 py-4 px-8 text-sm text-white/70'>
        <p>Legal</p>
        <p>Safety&Privacy Center</p>
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>About Ads</p>
        <p>Accessibility</p>
      </footer>
      
        <div className='flex my-8 px-6'>
          <button className='flex items-center gap-2 px-4 py-1 border border-white rounded-full text-lg font-bold'>
            <Globe size={22} strokeWidth={2} />
            English
            </button>
        </div>
    </>
  )
}

export default LeftFooter