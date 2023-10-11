import React from 'react'
import Header from '@/app/components/header'
export default function DashboardTemplate({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header />
            <div className=' min-w-full min-h-screen relative bg-light-primary text-light-text'>
                {children}
            </div>
        </>
    )
}
