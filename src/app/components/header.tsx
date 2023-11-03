"use client"
import React from 'react'
import Notify from './gadgets/notify'

import Link from 'next/link'
import Image from 'next/image'
import profile from '../../../public/profile.png'
import logo from '../../../public/logo.png'
import Theme from './gadgets/theme'


export default function header() {

  return (
    <header className={` w-full flex justify-between min-h-[70px] shadow-lg bg-init-component text-init-text`}>
      <div className=' relative flex justify-center items-center'>
        <Image src={logo} alt={'logo'} width={60} height={60} />
        <h1 className=' text-2xl'>AutoBot</h1>
        <span className='absolute text-sm bottom-2 right-4'> automation</span>

      </div>
      <div className=' relative flex justify-around items-center w-52'>
        <Link href={'/profile'} className=' rounded-lg  overflow-hidden box-border border-2 duration-300 ease-in-out hover:scale-110  hover:bg-gray-700 hover:bg-opacity-50'>
          <Image src={profile
          } alt='profile' width={44} height={44} ></Image>
        </Link>
        <Theme/>
        <Notify />


      </div>

    </header>
  )
}
