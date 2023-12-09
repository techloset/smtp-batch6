import React from 'react'
import Link from 'next/link'

export default function Fotter() {
  return (
    <div>
   <div className='max-w-full py-0 px-7 sm:py-0 mt-20 text-black dark:bg-black dark:text-white '>
    <div className='max-w-7xl mx-auto grid  grid-cols-1 md:grid-cols-4 py-16 space-x-0 md:space-x-10'>
      <div>
        <h1 className='text-3xl   font-bold text-black dark:text-gray-50' >Logo</h1>
        <p className='my-3 dark:text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing
sed do eiusmod tempor incididunt labore et dolore
magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip
ea commodo consequat.</p>
      </div>
      <div className='my-3  dark:text-gray-50' >
        <h1 className='text-2xl    font-semibold' >Our Links</h1>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Home</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>About us</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Services</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Team</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Blog</p> </Link>
      </div>
      <div className='my-3  dark:text-gray-50' >
        <h1 className='text-2xl   font-semibold' >Our Company</h1>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>About Company</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Our Testimonials</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Latest News</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>our misson</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Get a free quote</p> </Link>
      </div>
      <div className='my-3 dark:text-gray-50 ' >
        <h1 className='text-2xl   font-semibold' >Our Services</h1>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>App Development</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Graphic Design</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Web Solution</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>App Design</p> </Link>
        <Link href='./'> <p className='my-3 dark:text-gray-50 dark:hover:text-gray-500 hover:text-blue-500'>Blog</p> </Link>
      </div>
    <p className='text-xl my-4  font-semibold '>
              Made with 💛 by <b> Farhan Shafqut and Marsad </b></p>
    </div>
    </div>
    </div>
  )
}
