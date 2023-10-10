import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Notify() {
    return (
       <>
       <button>
        <FontAwesomeIcon icon={faBell} width={30} height={30}/>        
       </button>
       </>
    )
}



