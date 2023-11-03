"use client"
import React, { useEffect } from 'react'
import Header from '@/app/components/header'
import { ThemeProvider, useTheme } from 'next-themes'


export default function DashboardTemplate({ children }: { children: JSX.Element }) {
    
    return (
        <ThemeProvider attribute="class" >
            <Header />
            <div className={' min-w-full min-h-screen relative bg-init-base'}>
                {children}

            </div>
        </ThemeProvider>
    )
}
