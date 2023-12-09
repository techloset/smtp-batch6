import React, { useState } from 'react'
import { useEffect } from 'react'
import {IoSunnySharp} from 'react-icons/io5'
import{FaMoon} from 'react-icons/fa'
import { useTheme } from 'next-themes'
const Darktheme = () => {
    const {resolvedTheme , setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>setMounted(true),[])
    if(!mounted){
        return null
    }
  return (
    <div>
        <button className='transition duration-300 ease-in' onClick={()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? (
                <div className='flex justify-center align-middle py-2' >
                    <FaMoon className='h-5 w-5  text-slate-300' />
                    <p className='px-2 font-semibold text-base text-slate-300 ' >Dark Mode</p>
                </div>
            ) : (
                <div className='flex justify-center align-middle py-2' >
                    <IoSunnySharp className='h-6 w-6 text-orange-400'/>
                    <p className='px-2 font-semibold text-base ' >Light Mode</p>
                </div>
            )}
        </button>
    </div>
  )
}

export default Darktheme