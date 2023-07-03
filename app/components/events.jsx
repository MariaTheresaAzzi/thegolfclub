import React from 'react'
import News from './news'
import Link from 'next/link'

const Events = () => {
  return (
    <div className='flex flex-col p-10'>
    <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Latest Events</h1>
    <p className="text-center mt-2 text-lg leading-8 text-gray-600">Our Latest new and events of the golf club of lebanon.</p>
    <div className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 py-10'>
    <News/>
    <News/>
    </div>
    <div className='items-center text-center'>
    <Link href='/news' className='border-solid text-sm greenbg font-semibold leading-6 p-2 text-white'>Learn more</Link>
    </div>
    </div>
  )
}

export default Events