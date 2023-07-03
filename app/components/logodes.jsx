import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
<div className="footercolor py-14 sm:py-2">
  <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-co'ls-6 sm:gap-x-10 lg:mx-0 lg:max-w-none md:grid-cols-4">
      <div className='flex flex-col gap-3'>
        <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/The Gulf Club (3).png" alt="Tuple" width={158} height={48}/>
      <h2 className="text-center text-lg font-medium leading-8 text-white">area of 660,500 square meters</h2></div>
      <div className='flex flex-col gap-3'>
        <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/The Gulf Club (2).png" alt="Tuple" width={158} height={48}/>
      <h2 className="text-center text-lg font-medium leading-8 text-white">18 holes golf course</h2></div>
      <div className='flex flex-col gap-3'>
        <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/The Gulf Club (4).png" alt="Tuple" width={158} height={48}/>
      <h2 className="text-center text-lg font-medium leading-8 text-white">Extreme Golf lesson</h2></div>
      <div className='flex flex-col gap-3'>
        <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/The Gulf Club (5).png" alt="Tuple" width={158} height={48}/>
      <h2 className="text-center text-lg font-medium leading-8 text-white">Tee time online reservation</h2></div>
      </div>
  </div>
</div>
  )
}

export default Logo