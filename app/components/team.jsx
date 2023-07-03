import React from 'react'
import Image from 'next/image'
import People from './people'

const Teamplp = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">CGL Team</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">The Golf Club of Lebanon is a club with a history and more than a few tales to tell. The American Consul and a group of Lebanese notables founded the Club and registered it under the name “The Sporting Club of Beirut (Golf)”.</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <People name="Captain Riad Mikaoui"
        role="CEO / CO Founder"/>
       <People name="Captain Riad Mikaoui"
        role="CEO / CO Founder"/>
         <People name="Captain Riad Mikaoui"
        role="CEO / CO Founder"/>
         <People name="Captain Riad Mikaoui"
        role="CEO / CO Founder"/>
         <People name="Captain Riad Mikaoui"
        role="CEO / CO Founder"/>
         <People name="Captain Riad Mikaoui"
        role="CEO / CO Founder"/>
    </ul>
  </div>
</div>
  )
}

export default Teamplp