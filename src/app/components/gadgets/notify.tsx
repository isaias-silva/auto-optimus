import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NoborderButton from '../ui/noBorderButton'

export default function Notify() {
    
    return (
       <>
       <NoborderButton>
       
        <FontAwesomeIcon icon={faBell} width={30} height={30}/>        
      
       </NoborderButton>
       </>
    )
}



