import React from 'react'
import Search from './forms/search'
import Notify from './gadgets/notify'
import { Button} from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../../public/profile.png'
export default function header() {
  return (
    <header className=' bg-light-component w-full flex justify-between min-h-[40px]'>
      <Search />
      <div className=' flex items-center justify-center'>
        <Link href={'/profile'} className=' rounded-full  overflow-hidden box-border border-4  border-light-primary'>
          <Image src={profile
        } alt='profile' width={30} height={30} ></Image>
        </Link>
        <Notify />

      </div>

    </header>
  )
}
