import Link from 'next/link';
import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footercolor text-white'>
        <div className='flex flex-col'>
            <div className='flex flex-col mx-6 p-9 gap-6 text-base md:flex-row'>
                <div className='flex flex-col md:w-1/3'>
                  <div className="pb-3">About us</div>
                  <div className="border-t border-slate-300 pt-3 w-1/3"></div>
                  <div>GCL is a private sporting and recreational center for members and their guests, with a reputation for providing first class facilities, a relaxing atmosphere, and impeccable service.</div>
                </div>
                <div className='flex flex-col md:w-1/3'>
                  <div className="pb-3">Contact us</div>
                  <div className="border-t border-slate-300 pt-3 w-1/3"></div>
                  <div>Bir Hassan, Ouzai, Next to Henry Chehab Barracks, Beirut, Lebanon<br></br>T: +9611826335 | +961-1-822474<br></br>
                   M: +961-3-609412<br></br>
                   E: info@golfcluboflebanon.com</div>
                </div>
                <div className='flex flex-col md:w-1/3'>
                  <div className="pb-3">Sign Up No Our Newsletter</div>
                  <div className="border-t pt-4 w-3/4 stroke-green-600"></div>
                  <div><input className="border-1 border-gray-500 p-2  w-3/4 focus:border-teal-500 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" type="text" name="email" placeholder='Enter Your Email' />
                  <button className="text-sm font-semibold leading-6 text-white greenbg w-50 p-2"><span aria-hidden="true">→</span></button></div>
                  <div className='flex flex-row pt-6'>
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
            <hr/>
            <div className='self-center text-center p-5 text-sm'>All rights reserved © Golf Club of Lebanon 2023. Powered by MJAagency</div>
        </div>
    </div>
  )
}

export default Footer