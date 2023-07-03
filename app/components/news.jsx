import React from 'react'
import Image from 'next/image'
import { AiTwotoneCalendar } from  "react-icons/ai";
import { MdLocationPin } from  "react-icons/md";

const News = () => {
  return (
    <div className='bg-slate-200 flex flex-col gap-3 p-6 xl:flex-row'>
        <Image className='h-full w-full xl:w-1/2 ' src="/tee.png" alt='tee' width={300} height={100}/>
        <div className='flex flex-col gap-3'>
            <h1 className='text-lg font-bold'>Golf Club of Lebanon Summer Camp 2018!</h1>
            <div className='flex flex-row items-center'>
                <div className='pr-1 green'><AiTwotoneCalendar/></div>
                <p className='text-sm'>July 2 to august 31 - from 8am to 2pm</p>
            </div>
            <div className='flex flex-row items-center'>
                <div className='pr-1 green'><MdLocationPin/></div>
                <p className='text-sm'>the golf club of lebanon - jnah</p>
            </div>
            <p>Hurry up and register for the 2018 Summer Camp by calling 01-826335</p>
        </div>
    </div>
  )
}

export default News