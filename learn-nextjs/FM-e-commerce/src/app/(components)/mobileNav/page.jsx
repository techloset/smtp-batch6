
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
// npm add react-icons
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiFillHeart, AiOutlineUnorderedList, AiOutlineArrowDown } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import DropDown from '../dropDown/dropDown'
import Darktheme from '../darkTheme/darkTheme'
// import { IconName } from "react-icons/im";

const MobileNav = () => {
    return (
        <div className='flex flex-col items-start ' >
            <Link href="./">
                <h1 className='font-semibold text-lg text-white dark:text-orange-400 my-2 ' >FM E-Commerce</h1>
            </Link>
            <div className='text-sm hover:text-slate-950 cursor-pointer flex items-center  lg:flex '>
                <input type="text" placeholder='Search your product' name='search' className='py-2 my-2 pr-20 lg:pr-60 px-2 rounded-s-sm  outline-none  ' />
                <button>
                    <AiOutlineSearch size={36} className=' my-2 px-2 text-white bg-orange-400 rounded-e-sm' />
                </button>
            </div>
            <ul className=' lg:flex  text-white font-medium  items-start space-y-2' >
                <li className='flex items-center justify-center ' > <AiFillHeart size={30} className='dark:text-orange-400' />
                    <Link href='./' className='p-2  hover:text-slate-500 cursor-pointer'> Favouirite <br /> Wishlist</Link>
                </li>
                <li className='flex items-center justify-center ms-3 ' > <GoPerson size={30} className='dark:text-orange-400' />
                    <div className='flex flex-col'>
                        <Link href='./' className='px-2 hover:text-slate-500 cursor-pointer'> Login</Link>
                        <Link href='./' className='px-2 hover:text-slate-500 cursor-pointer'> My Account</Link>
                    </div>
                </li>
                <li className='flex items-center justify-center -ms-1 ' > <BsCart4 size={30} className='text-orange-400' />
                    <Link href='./' className='px-2  hover:text-slate-500 cursor-pointer'> Your <br /> Products</Link>
                </li>
            </ul>
            <div>
                <div>
                    <div className=' w-full ease-in duration-300  ' >
                        <div className='  m-auto flex justify-between items-center p-4  '>
                            <ul className=' lg:flex  text-white font-medium  -ms-4 ' >
                                <DropDown />
                                <li className='flex  justify-center -ms-20 my-4  ' >
                                    <BsCart4 size={30} className='dark:text-orange-400 mt-[3px]' />
                                    <Link href='./' className='px-2  mt-2  hover:text-slate-500 cursor-pointer'> Our Store</Link>
                                </li>
                                <li className='flex  justify-center -ms-20  my-4' >
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

export default MobileNav