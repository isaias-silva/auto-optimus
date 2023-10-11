import React from 'react'
import Search from './forms/search'
import Notify from './gadgets/notify'

export default function header() {
  return (
   <header className=' bg-light-component w-full flex justify-between'>
   <Search/>
   <div>
    
    <Notify/>
   </div>
   </header>
  )
}
