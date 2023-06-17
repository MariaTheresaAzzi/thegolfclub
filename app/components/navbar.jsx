import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
    <Link href="/about">About</Link>
    <Link href="/activities">Activities</Link>
    <Link href="/membership">Menbership</Link>
    <Link href="/cotactus">Contact</Link>
    </div>
  )
}

export default Navbar