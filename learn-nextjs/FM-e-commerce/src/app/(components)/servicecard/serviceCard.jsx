import React from 'react'
import 'src/app/(components)/servicecard/style.css'
import Image from 'next/image'

export default function ServiceCard(props) {
  return (
    <div >
    <div className="ag-courses_item  ">
      <a href="#" className="ag-courses-item_link  bg-blue-500 bg-opacity-30 dark:bg-slate-300 ">
        <div className="ag-courses-item_bg " style={{ backgroundColor: props.bg }} ></div>
        

        <div className="ag-courses-item_title ">
            <div className='flex items-center justify-center  rounded-full object-cover mt-3' >
                <Image width={500} height={500}  src={props.imgss}/>
                </div>
        {/* <Image width={70} height={10}  src=alt=""/> */}
        </div>

        <div className="ag-courses-item_date-box max-w-[350px] ">
          Caregories
          <span className="ag-courses-item_date  " >
            {props.txt1}
          </span>
        </div>
      </a>
    </div>
  </div>
  )
}
