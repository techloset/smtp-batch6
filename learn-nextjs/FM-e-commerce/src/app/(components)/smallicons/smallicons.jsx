import React from 'react'
import Image from 'next/image'
const Smallicons = (props) => {
  return (
    <div>
      <div className='flex'>
        <div className='text-gray-500 dark:text-gray-400 ' >{props.icon}</div>
             
        <div className={`${props.hd}`} >
        <Image width={props.w} height={props.h} src={props.imgss} />
        </div>

        <div className='flex-col ms-8'>
            <p className='hidden'></p>
            <h1 className='text-lg font-semibold dark:text-gray-400'>{props.heading1}</h1>
            <h1 className='text-base text-gray-400 font-semibold dark:text-gray-400'>{props.heading2}</h1>
        </div>
      </div>
    </div>
    
  )
}

export default Smallicons
