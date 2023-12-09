import React from 'react'
import "src/app/(components)/specialProduct/style.css"
import Image from 'next/image'
import Star from '../star/star'

export default function SpecialProduct(props) {
  return (
    <div className='mx-4'>
        <div className='flex items-center dark:shadow-slate-500 dark:hover:shadow-slate-600  dark:bg-gray-100 bg-white rounded-md hover:shadow-gray-400 shadow-xl hover:-translate-x-2 hover:-translate-y-2 transition ease-in duration-300 '>
            <div className='' >
                <div>
                <Image width={400} height={400}  src={props.imgss} className=''/>
                </div>
            </div>
            <div className=''>
                <h1 className='text-lg font-semibold max-w-xs overflow-hidden' >{props.heading1}</h1>
                <h2></h2>
               <div className='flex my-2' >
               <Star/>
                <Star/>
                <Star/>
                <Star/>
               </div>
               <div className='grid grid-cols-2 gap-x-3  '>
               <p className='font-semibold text-base text-red-500 overflow-hidden' >{props.heading2}</p>
               <del className='font-semibold text-base text-gray-400 overflow-hidden' >{props.heading3}</del>
               </div>
               <div>
               <button className='my-2 bg-black text-white w-20 h-7 rounded-full active:bg-slate-700 dark:bg-orange-500 dark:active:bg-orange-600 '>Sale</button>
               </div>
            </div>
        </div>
    </div>

  )
}
