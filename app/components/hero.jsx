import React from 'react'
import Link from 'next/link';


const Hero = () => {
  return (
    <div className='bg-[url("/hero.png")] h-[30vh] bg-cover bg-center flex items-center relative lg:h-screen sm:h-[50vh]'>
      <div className='w-full h-[30vh] bg-neutral-950 absolute opacity-40 lg:h-screen sm:h-[50vh]'></div>
    <div className="mx-auto max-w-2xl py-32 px-6 sm:py-48 lg:py-56 relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome to the Golf Club of Lebanon</h1>
        <p className="mt-6 text-lg leading-8 text-white">The oldest and largest golf club in Lebanon since 1923, and the only one still standing today.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/tee" className="greenbg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:greenbg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:greenbg">Book tee time</Link>
          <Link href="/aboutus" className="border-solid text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero