'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { CiHome } from "react-icons/ci";

// npm add react-icons
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiFillHeart, AiOutlineUnorderedList, AiOutlineArrowDown } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
// import { IconName } from "react-icons/im";
// import Darktheme from '../darkTheme/page'
import DropDown from '../dropDown/dropDown'
// import MobileNav from '../mobileNav/page'
import Darktheme from '../darkTheme'
import MobileNav from '../mobileNav'
import Image from 'next/image'
export default function Navbar() {
  const [nav, Setnav] = useState(false)
  const [dark, Setdark] = useState(false)

  const handlenav = () => {
    Setnav(!nav)
  }

  const handledark = () => {
    Setdark(!dark)
  }
  return (
    <div>
      <div >
        <div className='bg-slate-900 w-full ease-in duration-300 ' >
          <div className='max-w-[1440px]  m-auto flex justify-between items-center p-4  :'>
            <Link href="./">
              <h1 className='font-semibold text-lg text-white dark:text-orange-400 ' ><Image src="/blacklogo.png" height={100} width={100}/></h1>
            </Link>
            <div className='text-sm hover:text-slate-950 cursor-pointer  items-center hidden lg:flex '>
              <input type="text" placeholder='Search your product' name='search' className='py-2 pr-60 px-2 rounded-s-sm  outline-none  ' />
              <button>
                <AiOutlineSearch size={36} className=' my-2 px-2 text-white bg-orange-400 rounded-e-sm' />
              </button>
            </div>
            <ul className='hidden lg:flex  text-white font-medium ' >
              <li className='flex items-center justify-center mx-4' > <AiFillHeart size={30} className='dark:text-orange-400' />
                <Link href='./wishlist' className='p-2  hover:text-slate-500 cursor-pointer'> Favouirite <br /> Wishlist</Link>
              </li>
              <li className='flex items-center justify-center mx-4 ' > <GoPerson size={30} className='dark:text-orange-400' />
                <div className='flex flex-col'>
                  <Link href='./Login' className='px-2 hover:text-slate-500 cursor-pointer'> Login</Link>
                  <Link href='./Myaccount' className='px-2 hover:text-slate-500 cursor-pointer'> My Account</Link>
                </div>
              </li>
              <li className='flex items-center justify-center mx-4' > <BsCart4 size={30} className='dark:text-orange-400' />
                <Link href='./yourProduct' className='px-2  hover:text-slate-500 cursor-pointer'> Your <br /> Products</Link>
              </li>
              <li className='flex items-center justify-center mx-4' > <BsCart4 size={30} className='text-orange-400' />
                <Link href='./cart' className='px-2  hover:text-slate-500 cursor-pointer'> Your <br /> Cart</Link>
              </li>
            </ul>
            <div>
            </div>
            {/* Mobile Button  */}
            <div onClick={handlenav} className='block sm:hidden z-30  text-white'  style={{ position: 'fixed', top: '20px', left: '300px' }}>
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'lg:hidden fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full  h-full bg-black text-white ease-in duration-300 z-20 ' : 'lg:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 '}>
        <MobileNav/>
            </div>
          </div>
        </div>
        {/* 2nd Section */}
        <div>
          <div className='bg-slate-800 w-full ease-in duration-300 ' >
            <div className='max-w-[1440px]  m-auto flex justify-between items-center p-4  '>
              <ul className='hidden lg:flex  text-white font-medium ' >
                {/* <DropDown /> */}
                <li className='flex  justify-center mx-4' >
                <CiHome size={30} className='dark:text-orange-400 mt-[3px]' />
                  <Link href='./' className='px-2  mt-2  hover:text-slate-500 cursor-pointer'> HOME</Link>
                </li>
                <li className='flex  justify-center mx-4 ' >
                  <HiOutlineBuildingStorefront size={30} className='dark:text-orange-400 mt-[3px]' />
                  <Link href='./ourStore' className='px-2  mt-2  hover:text-slate-500 cursor-pointer'> Our Store</Link>
                </li>
                <li className='flex  justify-center mx-4' >
                  <Darktheme />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
