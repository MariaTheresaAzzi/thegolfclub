import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Teetime = () => {
  return (
    <div className='bg-[url("/tee.png")] h-[35vh] bg-cover bg-center flex items-center relative lg:h-[75vh]  sm:h-[50vh]'>
      <div className='w-full h-[35vh] bg-neutral-950 absolute opacity-40 lg:h-[75vh] sm:h-[50vh]'></div>
    <div className="mx-auto max-w-2xl py-32 px-6 sm:py-48 lg:py-56 relative">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Book  A Tee Time</h1>
        <p className="mt-6 text-lg leading-8 text-white">The Golf Club of Lebanon is a traditional, family-oriented sporting club, dedicated to providing its members and guests with a world-class golf course, superior sporting and recreational services, programs and facilities.</p>
        <div className="mt-10 flex items-center justify-center">
          <Link href="/tee" className="greenbg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:greenbg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:greenbg">Book Now</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Teetime