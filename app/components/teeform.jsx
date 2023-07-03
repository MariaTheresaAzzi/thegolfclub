'use client'
import React, { useState } from 'react'

const Teeform = () => {

const [fullname, setFullname]= useState("");
const [lastname, setLastname]= useState("");
const [date, setDate]= useState("");
const [time, setTime]= useState("");
const [email, setEmail]= useState("");
const [phone, setPhone]= useState("");
const [message, setMessage]= useState("");

const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log("First name:", fullname);
  console.log("Last name:", lastname);
  console.log("Date:", date);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

};

  return (
  <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book Your Tee Time</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">Book a tee time online from anywhere.</p>
  </div>
  <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" autoComplete="given-name" 
          onChange={(e)=>setFullname(e.target.value)} value={fullname} 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" autoComplete="family-name"
          onChange={(e)=>setLastname(e.target.value)} value={lastname} 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Date</label>
        <div className="mt-2.5">
          <input name="date" type="date" id="date"
          onChange={(e)=>setDate(e.target.value)} value={date}  
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Time</label>
        <div className="mt-2.5">
          <input type="time" name="first-name"  id="first-name" autoComplete="given-name" 
          onChange={(e)=>setTime(e.target.value)} value={time} 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" 
          onChange={(e)=>setEmail(e.target.value)} value={email} 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">Country</label>
            <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm">
              <option>LB</option>
              <option>CA</option>
              <option>EU</option>
              <option>US</option>
            </select>
            
          </div>
          <input type="number" name="phone-number" id="phone-number" autoComplete="tel"
          onChange={(e)=>setPhone(e.target.value)} value={phone} 
          className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" 
          onChange={(e)=>setMessage(e.target.value)} value={message} 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="flex flex-row gap-8 mt-10">
      <button type="submit" className="block w-full rounded-md greenbg px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:greenbg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:green">Let's talk</button>
      <button type="submit" className="block w-full rounded-md greenbg px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:greenbg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:green">Cancel</button>
    </div>
  </form>
</div>
  )
}

export default Teeform