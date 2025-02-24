"use client"

import Link from 'next/link'
import React from 'react'

function NavBar() {

  return (
    <div className='h-20 bg-[var(--first)] flex items-center justify-between p-10 text-2xl shadow-xl'>
      <div className='w-4/12 justify-between flex items-center text-3xl text-[var(--second)] font-bold'> 
        Yaphe
      </div>
      <div className=' w-5/12 justify-between flex items-center'>
        <Link href='/spa' className='text-[var(--third)] font-semibold'>Spa</Link>
        <span className='text-[var(--second)]'>|</span>
        <Link href='/home' className='text-[var(--third)] font-semibold'>Home</Link>
      </div> 
    </div>
  )
}

export default NavBar