import React from 'react'
import Image from 'next/image'
const HomeCard = async (prop) => {
    return (
      <div className="">
        <div className="center flex items-center justify-center my-4 scale-90 sm:scale-[1]">
          <div className="article-card rounded-2xl overflow-hidden relative transition-all duration-300 shadow-lg bg-slate-800 text-white">
            <div className="content box-border w-full absolute bottom-0 px-[30px] py-[20px] h-auto">
              <p className="date text-lg m-0 font-bold opacity-90 dark:text-orange-400">{prop.heading1}</p>
              <p className="title m-0 font-bold opacity-90 dark:text-orange-400">{prop.heading2}</p>
              <div className="pt-2 text-white dark:text-slate-200">
                <button className="text-sm object-fill font-semibold p-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 active:bg-slate-900 dark:bg-orange-500 dark:hover:bg-orange-400 dark:active:bg-orange-600">
                  Button
                </button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} className="max-w-[300px] max-h-64 object-cover" src={prop.imgss} alt="sasa" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeCard;