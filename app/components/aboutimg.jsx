import React from 'react'
import Image from 'next/image'
import {BiArea} from 'react-icons/bi'
import {GiGolfFlag} from 'react-icons/gi'
import {MdSportsGolf} from 'react-icons/md'

const Aboutimg = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
      </svg>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-base font-semibold leading-7 green">GCL</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">"The Golf Club of Lebanon"</h1>
        </div>
      </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    <Image className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/aboutimage.jpg" alt="golf club" width={1200} height={1000}/>
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
          <p>"The Golf Club of Lebanon" (GCL) was established in 1923, according to the records of the Royal and Ancient Golf Club of St Andrews, known as the “Home of Golf”. It is the oldest and largest golf club in Lebanon, and the only one still standing today from the four golf clubs that were present.
Located adjacent to the Mediterranean Sea, at a short distance from Rafic Hariri International Airport, the GCL is one of the largest green areas in Beirut and one of the most beautiful, uplifting and awe inspiring areas in Lebanon, having many trees, plant species and greenery in its grounds.</p>
          <br></br><p>GCL is a private sporting and recreational center for members and their guests, with a reputation for providing first class facilities, a relaxing atmosphere, and impeccable service.</p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
            <BiArea className='mt-1 h-5 w-5 flex-none green'></BiArea>
              <span><strong className="font-semibold text-gray-900">Situated on a magnificent sun-bathed area of 660,500 square meters.</strong> </span>
            </li>
            <li className="flex gap-x-3">
            <GiGolfFlag className='mt-1 h-5 w-5 flex-none green'></GiGolfFlag>
              <span><strong className="font-semibold text-gray-900">Has a stunning 18 holes golf course, rolling across perfectly manicured fairways.</strong> </span>
            </li>
            <li className="flex gap-x-3">
              <MdSportsGolf className='mt-1 h-5 w-5 flex-none green'></MdSportsGolf>
              <span><strong className="font-semibold text-gray-900">Offering to its members the most modern and fully equipped Tennis courts in Lebanon, with 7 courts, (5 clay and 2 hard), which have hosted several competitions, including the Davis Cup and International Tennis Federation(ITF) tournaments.</strong> </span>
            </li>
          </ul>
          <p className="mt-8">These naturally sculpted fairways, as well as tricky greens, combine to make the golf course one of the best and truest tests of golf anywhere in the region.</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why you should visit us?</h2>
          <p className="mt-6">Escape the congestion and bustling of the city and enjoy, alone or with your family and guests, a relaxing day at our aquatic center equipped, with a six-lane swimming pool, a diving tank, a junior pool and lavish sun tanning gardens. The GCL’s premises are built in style. Whilst maintaining an aura of tradition, it still provides modern and luxurious facilities. It is home for indoors activities such as a state-of-the-art health club, a reading and internet salon, a restaurant, a bridge club, a billiard room, three snooker tables, a recreational table games room, an old English style Pub and the club’s administrative offices.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Aboutimg