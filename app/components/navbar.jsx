'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {FaGolfBall} from 'react-icons/fa'
import {IoGolf} from 'react-icons/io5'
import {RiTeamFill} from 'react-icons/ri'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbar1, setNavbar1] = useState(false);
  const [about, setAbout] = useState(false);
  return (
    <>
    <nav className="mx-auto flex items-center justify-between p-4 lg:px-8 bg-white" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">The Golf Club</span>
        <Image className="" src="/The Gulf Club.png" alt="logo" height={55}  width={55}/>
      </a>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={()=> setNavbar1(!navbar1)}>
      {navbar1 ? (    
            <div>
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          ):(
            <div>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>
          )}
      </button>    
    </div>
    <div className='hidden lg:flex lg:gap-x-12'>
      <div className="relative">
        <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false"
        onClick={()=> setAbout(!about)}>
          About
          <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        <div className={`${about ? "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" : 'hidden'}`}>
          <div className="p-4">
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <FaGolfBall className="h-6 w-6 text-gray-600 group-hover:text-green-600" ></FaGolfBall>
              </div>
              <div className="flex-auto">
                <Link href="/aboutus" className="block font-semibold text-gray-900" onClick={()=> setAbout(!about)}>
                  About Us
                  <span className="absolute inset-0"></span>
                </Link>
                <p className="mt-1 text-gray-600">Get a better understanding of us</p>
              </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <IoGolf className="h-6 w-6 text-gray-600 group-hover:text-green-600" ></IoGolf>
              </div>
              <div className="flex-auto">
                <Link href="/abouthistory" className="block font-semibold text-gray-900" onClick={()=> setAbout(!about)}>
                  About our history
                  <span className="absolute inset-0"></span>
                </Link>
                <p className="mt-1 text-gray-600">Get to know more about our history</p>
              </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <RiTeamFill className="h-6 w-6 text-gray-600 group-hover:text-green-600" ></RiTeamFill>
              </div>
              <div className="flex-auto">
                <Link href="/aboutteam" className="block font-semibold text-gray-900" onClick={()=> setAbout(!about)}>
                  About our team
                  <span className="absolute inset-0"></span>
                </Link>
                <p className="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="/activities" className="text-sm font-semibold leading-6 text-gray-900">Activities</Link>
      <Link href="/news" className="text-sm font-semibold leading-6 text-gray-900">Events & News</Link>
      <Link href="/membership" className="text-sm font-semibold leading-6 text-gray-900">Memberships</Link>
      <Link href="/contactus" className="text-sm font-semibold leading-6 text-gray-900">Contact Us</Link>
      <button className="p-2 rounded-full greenbg hover:bg-green-600 text-white"> <AiOutlineSearch/> </button>
    </div>

  </nav>
  <div className='hidden' role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
    <div className={`${navbar1 ? 'fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10' : 'hidden'}`}>
    <div className='flex items-center justify-between'>
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">The Golf Club</span>
          <Image className="h-8 w-auto" src="/The Gulf Club.png" alt="logo"  height={65}  width={65}/>
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
        onClick={()=> setNavbar(!navbar)}>
          {navbar ? (
            <div>
            <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          </div>
          ):(
            <div>
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          )}
        </button>
      </div>
      <div className={`${navbar ? 'hidden' : 'mt-6 flow-root'}`}>
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <div className="-mx-3">
              <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false"
              onClick={()=> setAbout(!about)}>
                About
                <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`${about ? "mt-2 space-y-2" : "hidden" }`} id="disclosure-1">
              <Link href="/aboutus"  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</Link>
              <Link href="/abouthistory"  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">About our history</Link>
              <Link href="/aboutteam"  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">About our team</Link>
              </div>
            </div>
            <Link href="/activities"  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Activities</Link>
            <Link href="/news"  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Events & News</Link>
            <Link href="/membership"  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Memberships</Link>
            <Link href="/contactus"  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</Link>
          </div>
          
            <div className='flex flex-row py-6'>
                    <div className='w-50  rounded-full greenbg text-white p-2 m-2 '>
                    <Link href='https://www.instagram.com/thegolf.club/' className=" text-white "> <AiFillInstagram></AiFillInstagram> </Link>
                    </div>
                    <div className="w-50 rounded-full greenbg text-white p-2 m-2">
                    <Link href='https://www.facebook.com/thegolf.club/' ><AiFillFacebook></AiFillFacebook></Link>
                    </div>
                    <div className="w-50 rounded-full greenbg text-white p-2 m-2">
                    <Link href='https://www.twitter.com/thegolf.club/'><AiOutlineTwitter></AiOutlineTwitter></Link>
                    </div>
                
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Navbar