import React from 'react'

const Popular = () => {

  const arr = [
      {
          img: 'https://i.pinimg.com/736x/80/10/3d/80103dcd20fb23f94c46b9433e5bfd26.jpg',
      title: 'Die With A Smile',
      artist: 'Bruno Mars, Lady Gaga'
    },
    {
      img: 'https://i1-c.pinimg.com/736x/14/44/33/14443358f95a715486b9d2317fb48188.jpg',
      title: "We don't talk anymore",
      artist: 'Charlie Puth, Selena Gomez'
    },
    {
        img: 'https://i1-c.pinimg.com/736x/a4/30/34/a4303421af7281872bb73de660a6a549.jpg',
        title: 'Starboy',
        artist: 'The Weeknd'
    },
    {
        img: 'https://i.pinimg.com/736x/84/f1/93/84f1934faf8746e5db4f826ea302ecf1.jpg',
        title: 'Disk free',
        artist: 'Panda, Law'
    },
    {
        img: 'https://i.pinimg.com/736x/61/0e/95/610e95c6b5ece1d61797b5d3cb69082f.jpg',
        title: 'Flower boy',
        artist: 'Tyler, The Creator'
    },
    {
        img: 'https://i1-c.pinimg.com/1200x/20/d9/d9/20d9d952b42da7c080cf1560db49be20.jpg',
        title: 'Glass Animals',
        artist: 'Heat Waves'
    },
    {
        img: 'https://i1-c.pinimg.com/1200x/ad/88/f2/ad88f2c36f904f40541c1f0dbeb1f8d4.jpg',
        title: 'Havana',
        artist: 'Camila Cabello, Daddy Yankee'
    },
    {
      img: 'https://i.pinimg.com/736x/4b/2b/a1/4b2ba181adb0e5972b0823d6dd60a84a.jpg',
      title: 'Sound Track-1',
      artist: 'Doflamingo, Law'
    },
    {
        img: 'https://i1-c.pinimg.com/736x/25/8d/ce/258dce5841e0e93a58da221c98862d6d.jpg',
        title: 'Stay',
        artist: 'Kid Laroi'
    },
    {
      img: 'https://i1-c.pinimg.com/1200x/20/d9/d9/20d9d952b42da7c080cf1560db49be20.jpg',
      title: 'Glass Animals',
      artist: 'Heat Waves'
    },
    {
      img: 'https://i1-c.pinimg.com/1200x/0f/0e/bf/0f0ebf90e971299dcc8f6e350cf22bb6.jpg',
      title: 'Die For You',
      artist: 'The weeknd, Ariana Grande'
    },
  ]
  return (
    <>
      <div className='flex sm:gap-0 md:gap-1 lg:gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide h-fit py-4'>
        {arr.map((items, idx) => (
          <div key={idx} className='shrink-0 hover:bg-white/5 rounded-xl px-2 py-4'>
            <img
            className='h-52 w-52 object-cover rounded-lg'
            src={items.img} 
            alt='sound track' />
            
            <h2 className='w-52 flex justify-center font-medium'>{items.title}</h2>
            
            <p className='w-52 flex justify-center text-sm text-white/70'>
            {items.artist}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Popular