"use client"

import React from 'react'
import { useState } from 'react'

function NavBar() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <div className=' h-screen w-screen bg-[var(--first)] overflow-hidden  text-white'>
      <div className='h-24 bg-[var(--first)] absolute top-0 w-full z-10 flex justify-between items-center px-6 text-2xl shadow-md'>
        <div>
          <img src='/nails-assets/logo.png' alt='logo' className='h-24' />
        </div>
        <div className='md:hidden size-14 border-2 border-[var(--second)] flex justify-around items-center p-2 py-3 flex-col rounded-sm' onClick={handleActive}>
          <div className={`h-[3px] rounded-lg w-full transition-all duration-300 bg-[var(--third)] ${active ? 'rotate-[135deg] translate-y-3' : 'rotate-0' }`}></div>
          <div className={`h-[3px] rounded-lg transition-all duration-300 bg-[var(--third)] ${active ? 'w-0' : 'w-full' }`}></div>
          <div className={`h-[3px] rounded-lg w-full transition-all duration-300 bg-[var(--third)] ${active ? '-rotate-[135deg] -translate-y-2' : 'rotate-0' }`}></div>
        </div>

      </div>
      <div className={` transition-all duration-500 ease-in-out flex h-screen bg-red-500  w-4/6 z-0 ${!active ? 'translate-x-[500px]  ' : 'translate-x-[150px] '}`}>

      </div>

    </div>
  )
}

export default NavBar