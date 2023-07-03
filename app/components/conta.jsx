'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'


const Conta = () => {
  const [fullname, setFullname]= useState("");
  const [email, setEmail]= useState("");
  const [phone, setPhone]= useState("");
  const [message, setMessage]= useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("Full name:", fullname);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
  
  };

  return (
    <div className='flex flex-row'>
        <div className='container mx-auto px-4 max-w-[1200px] text-black py-10'>
            <div className='h-full bg-slate-200 p-10 rounded-3xl flex flex-col gap-7 lg:flex-row'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full lg:w-1/3'>
            <h1 className='text-3xl pb-4'>We’d like to hear from you</h1>
                        <label>FullName:</label>
                        <input  onChange={(e)=>setFullname(e.target.value)} value={fullname} className='w-full p-1 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400' type="text" id="fname" name="fname" placeholder='fullname'/>
                    
                        <label>Email:</label>
                        <input  onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full p-1 rounded-md  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400' type="email" id="email" name="email"  placeholder='@example.com'/>
                    
                        <label>Phone:</label>
                        <input  onChange={(e)=>setPhone(e.target.value)} value={phone} className='w-full p-1 rounded-md  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400' type="number" id="phone" name="phone" placeholder='00 000000'/>

                        <label>Message:</label>
                        <textarea  onChange={(e)=>setMessage(e.target.value)} value={message} name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green sm:text-sm sm:leading-6"></textarea>
                        <button className='greenbg p-2 text-white rounded-md'>Send</button>
              </form>
                <div>
                <Image className='w-full h-full rounded-xl' src="/golfgirl.jpg" alt="golf girl" width={500} height={500}/>
                </div>
                
            </div> 
        </div>
        
      </div>
  )
}

export default Conta
