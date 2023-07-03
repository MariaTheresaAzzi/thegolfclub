import React from 'react'
import Image from 'next/image'

const Grid = () => {
  return (
    <div className='flex flex-col text-center p-10'>
    <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>Our Activities</h1>
    <p className='mt-2 text-center text-lg leading-8 text-gray-600 pb-8'>Escape the congestion and bustling of the city and enjoy, alone or with your family and guests, a relaxing day with a variety of activities.</p>
    
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <Image className="w-full h-[150px] top-0 left-0 object-cover md:h-[250px] sm:[200px]" src="/football.jpg" alt="picine" loading="lazy" width={300} height={300}/>
  </div>
  <div className="col-start-3">
    <Image className="w-full h-[150px] top-0 left-0 object-cover md:h-[250px] sm:[200px]" src="/gymclub.jpg" alt="golf" loading="lazy" width={300} height={300}/>
  </div>
  <div>
    <Image className="w-full h-[150px] top-0 left-0 object-cover md:h-[250px] sm:[200px]" src="/billi.jpg" alt="biliard" loading="lazy" width={300} height={300}/>
  </div>
  <div>
    <Image className="w-full h-[150px] top-0 left-0 object-cover md:h-[250px] sm:[200px]" src="/tenniss.jpg" alt="tennis" loading="lazy" width={300} height={300}/>
  </div>
  <div className="row-start-1 col-start-2 col-span-2">
    <Image className="w-full h-[150px] top-0 left-0 object-cover md:h-[250px] sm:[200px]" src="/pool.jpg" alt="pool area" loading="lazy" width={300} height={300}/>
  </div>
   </div>
  
    </div>
  )
}

export default Grid