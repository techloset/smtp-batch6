import React from 'react'
import Topcard from './(components)/Topcard'
import Barchart from './(components)/Barchart'
import Recentorder from './(components)/Recentorder'
import Button from "./(components)/Button"
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
// import { getSession } from 'next-auth/react'



export default async function page() {
  
  // const user = await getServerSession()
  // if (!user) {
  //   redirect("/login")
  // }
  // console.log("user",user);
  return (
    <div className='h-screen dark:bg-gray-800'>
    <Button/>
      <Topcard/>
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <Barchart/>
        <Recentorder/>
      </div>
    </div>
  )
}
