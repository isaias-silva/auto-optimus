import React from 'react'

export default function NoborderButton({ children }: { children: JSX.Element }) {
    return (
        <button className=' text-light-text'>
            {children}
        </button>
    )
}
