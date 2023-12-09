
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
// npm i react-slick
// npm i slick-carousel
export default function Homeslidercompo(prop) { {
        return (
                    <div className="my-6" >
                        <div className="relative h-full lg:min-h-[480px] rounded-md ">
                            <div className="absolute -z-10  h-full w-full  ">
                                <div className="overflow-hidden w-full h-full ">
                                    <img src={prop.imgss} className="object-cover w-full h-full rounded-md " width={500} height={500} />
                                </div>
                            </div>
                            <div className="-translate-y-12 lg:-translate-y-0 ">

                                <div className="  ms-10 space-y-5 pt-16 dark:text-orange-400 text-slate-200 " >
                                    <p className="hidden"> </p>
                                    <h3 className="text-4xl font-semibold"> {prop.heading1}</h3>
                                    <p className=" text-2xl font-semibold">{prop.heading2}</p>
                                    <p className="text-2xl font-semibold">{prop.heading3}</p>
                                </div>
                                <div className="ms-10  pt-2 text-orange-400 dark:text-slate-200   ">
                                    <button className={`{text-sm object-fill font-semibold p-1 px-3 rounded-full text-white  bg-slate-800 hover:bg-slate-700 active:bg-slate-900  dark:bg-orange-500 dark:hover:bg-orange-400 dark:active:bg-orange-600   }`}>ShopNow</button>
                                </div>
                            </div>
                        </div>
                    </div>

        );
    }
}