import React from 'react'
import Image from 'next/image'

const People = (props) => {
  return (
    <li>
    <div className="flex items-center gap-x-6">
          <Image className="h-16 w-16 rounded-full" src="/tee.png" alt="tee" width={1200} height={1000}/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{props.name}</h3>
            <p className="text-sm font-semibold leading-6 green">{props.role}</p>
          </div>
        </div>
        </li>
  )
}

export default People