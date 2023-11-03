"use client";

import { ModeNight, LightMode } from '@mui/icons-material';
import { useTheme } from 'next-themes';


import React, { useEffect, useState } from 'react'


export default function () {
    const [themeDark, setThemeDark] = useState<boolean>(false)
    const { setTheme } = useTheme();
    useEffect(() => {
        let theme = themeDark ? 'dark' : 'light'
        setTheme(theme)


    }, [themeDark])
    return (
        <>


            <button className=' rounded-lg w-12 h-12 overflow-hidden box-border border-2 duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 hover:bg-opacity-50' onClick={() => setThemeDark(!themeDark)}>
                {themeDark ? <LightMode /> : <ModeNight shapeRendering='true' className=' text-light-text' />}
            </button>


        </>
    )
}



