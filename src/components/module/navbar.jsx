"use client"

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

function NavBar() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <div className=' h-24 w-screen absolute bg-[var(--first)] overflow-hidden  text-white'>
      <div className='h-24 bg-[var(--first)] absolute top-0 w-full z-10 flex justify-between items-center px-6 text-2xl shadow-md'>
        <div>
          <img src='/nails-assets/logo.png' alt='logo' className='h-24' />
        </div>
        <div className=' w-32 items-center justify-center '>
          <ul className='flex justify-around items-center '>
            <li className=' text-[var(--third)] '><Link href={`/spa`}>Spa</Link></li>
            <li className='text-[var(--second)] pointer-events-none'>|</li>
            <li className=' text-[var(--third)] '>Home</li>
          </ul>
        </div>
      </div>
      <div className={` transition-all duration-500 ease-in-out flex h-screen bg-red-500  w-4/6 z-0 ${!active ? 'translate-x-[500px]  ' : 'translate-x-[150px] '}`}>

      </div>

    </div>
  )
}

export default NavBar