import React from 'react'
import DashboardTemplate from './components/templates/dashboard.template'
import notfoundImage from '../../public/notfound.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <DashboardTemplate>
      <div className=' w-full h-full flex justify-center items-center'>
        <div className=' bg-init-component w-1/2 h-72 rounded-xl shadow-xl mt-16 text-center py-3'>
          <h2 className=' text-2xl'>Página não encontrada</h2>
        <Image src={notfoundImage} alt={'notfound'} width={200} height={200} className='mx-auto'/>
        <Link href={'/'} className=' text-center hover:underline hover:text-blue-600'>retornar</Link>
        </div>

      </div>
    </DashboardTemplate>
  )
}
