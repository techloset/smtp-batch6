import React from 'react'

const Topcard = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border  p-4 rounded-lg dark:bg-black dark:text-white'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>1111$</p>
                    <p className='text-gray-600'>daily revnue</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>15%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border  p-4 rounded-lg  dark:bg-black dark:text-white'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>1111$</p>
                    <p className='text-gray-600'>daily revnue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>15%</span>
                </p>
            </div>
            <div className=' bg-white flex justify-between w-full border  p-4 rounded-lg  dark:bg-black dark:text-white'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>1111$</p>
                    <p className='text-gray-600'>daily revnue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>15%</span>
                </p>
            </div>
        </div>
    )
}

export default Topcard
