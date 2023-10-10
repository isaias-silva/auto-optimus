import React from 'react'
import Header from '@/app/components/header'
export default function DashboardTemplate({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}
