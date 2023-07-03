import React from 'react'
import Image from 'next/image'

const Activity = (props) => {
  return (
    <div className="">
    <div className="mx-auto px-6 lg:px-8">
        <div className='bg-slate-200 p-6 flex flex-col gap-6 md:flex-row'>
            <div className='flex flex-col gap-2'>
                <p className='green font-bold'>{props.title}</p>
                <div className="border-t green"></div>
                <p>{props.description}</p>
            </div>
            <Image className='h-full w-full md:w-1/4 md:h-[170px]' src={props.image} width={300} height={90} alt={props.alt}/>
        </div>
    </div>  
    </div>
  )
}

export default Activity