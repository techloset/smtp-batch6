import React from 'react'
import Image from 'next/image'
export default function Carousel() {
    return (
        <div className="relative flex  flex-col bg-clip-border rounded-2xl my-16  bg-white dark:bg-slate-400 text-gray-700 shadow-md w-full max-w-7xl sm:flex-row">
  <div
    className="relative  m-0 overflow-hidden text-gray-700  shrink-0">
    <Image
    width={400}
    height={400}
      src={"/Photo.png"}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
    <h6
      className="block  text-5xl font-bold mb-4 font-sans  antialiased  leading-relaxed tracking-normal text-gray-700 uppercase">
     Join our weekly digest
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Get exclusive promotions & updates straight to your inbox.
    </h4>
    <div className="w-full max-w-md mt-2">
    <label for="email" className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      className="w-full px-4 py-2 border dark:border-black rounded-md out focus:outline-none dark:focus:border-white focus:border-black transition duration-300"
      placeholder="example@example.com"
      required
   />
  </div>
  </div>
</div>  

    )
}
