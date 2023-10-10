import React from 'react'
import Search from './forms/search'
import Notify from './gadgets/notify'

export default function header() {
  return (
   <header className=' w-full fixed top-0 bg-componentcolor flex'>
   <Search/>
   <div>
    
    <Notify/>
   </div>
   </header>
  )
}
