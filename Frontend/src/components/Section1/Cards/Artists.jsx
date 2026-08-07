import React from 'react'

const Artists = () => {

  const arr = [
    {
      img: 'https://i.pinimg.com/736x/4b/2b/a1/4b2ba181adb0e5972b0823d6dd60a84a.jpg',
      title: 'The Cube',
    },
    {
      img: 'https://i.pinimg.com/736x/bf/a9/44/bfa9447c35f8fcebf39e38cf3a37139d.jpg',
      title: 'Djo',
    },
    {
      img: 'https://i1-c.pinimg.com/236x/ce/d1/2b/ced12b04960d044dc4a20c0a6c324292.jpg',
      title: 'The Weeknd',
    },
    {
      img: 'https://i.pinimg.com/736x/59/98/05/599805dcf0527164c67f67f8f11c62e4.jpg',
      title: 'Ariana Grande',
    },
    {
      img: 'https://i1-c.pinimg.com/1200x/a1/6b/9a/a16b9a616ffb034251d54d40ae8471b1.jpg',
      title: 'Bruno Mars',
    },
    {
      img: 'https://i1-c.pinimg.com/1200x/50/41/cc/5041ccb3e6ffe4ca77624d0e4c056b4b.jpg',
      title: 'Olivia Rodrigo',
    },
    {
      img: 'https://i1-c.pinimg.com/736x/b9/52/e0/b952e054e9951d34077a5a3b75889b02.jpg',
      title: 'Arijit Singh',
    },
    
  ]
  return (
    <>
      <div className='flex sm:gap-0 md:gap-1 lg:gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide h-fit py-4 '>
        {arr.map((items, idx) => (
          <div key={idx} className='shrink-0 hover:bg-white/5 active:bg-white/5 rounded-xl px-2 py-4'>
            <img
            className='h-52 w-52 object-cover rounded-full'
            src={items.img} 
            alt='sound track' />
            
            <h2 className='w-52 flex justify-center font-medium'>{items.title}</h2>
            
            <p className='w-52 flex justify-center text-sm text-white/70'>
            Artists
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Artists