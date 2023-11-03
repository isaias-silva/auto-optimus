"use client"
import React, { useEffect } from 'react'
import Header from '@/app/components/header'
import { ThemeProvider, useTheme } from 'next-themes'


export default function DashboardTemplate({ children }: { children: JSX.Element }) {
    const { setTheme } = useTheme()
 
    return (
        <ThemeProvider  enableSystem={false} attribute="class" >
            <Header />
            <div className={' min-w-full min-h-screen relative bg-init-base'}>
                {children}

            </div>
        </ThemeProvider>
    )
}
