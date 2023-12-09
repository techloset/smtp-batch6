
import Image from 'next/image'
import HomeSlider from './(components)/homeSlider/homeSlider'
import Fade from './(components)/homeSlider/homeSlider'
import Navbar from './(components)/navbar/navbar'
import SliderCard11 from './(components)/homeCard/homeCard'
import HomeCard from './(components)/homeCard/homeCard'
import Smallicons from './(components)/smallicons/smallicons'
import { FaVanShuttle, FaGift, FaHeadphones, FaCreditCard } from "react-icons/fa6";
import ServiceCard from './(components)/servicecard/serviceCard'
import SpecialProduct from './(components)/specialProduct/specialProduct'
import { SiDell ,SiSony ,SiSamsung , SiApple  } from "react-icons/si";
import Blog from './(components)/blog/blog'
import BlogSlider from './(components)/blogSlider/page'
import Carousel from './(components)/carousel/carousel'
import Fotter from './(components)/footer/footer'

export default function Home() {
  return (
    <div className='bg-gray-200 dark:bg-slate-700'>
      <Navbar />
      <div className='max-w-full py-2 bg-grad  px-4 sm:py-0 ' >
        <div className='max-w-[1440px] mx-auto '>
          <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto ' >
            {/* <HomeSlider /> */}
            <div className='mt-2' >
              <HomeSlider />
          
            </div>
            <div>
              <div className='grid lg:grid-cols-2 sm:grid-cols-1' >
                <HomeCard heading1={"Gaming headphones"} heading2={"5000rupess"} imgss={"/assets/headphones_a_4.webp"} />
                <HomeCard heading1={"Gaming headphones"} heading2={"5000rupess"} imgss={"/assets/watch_4.webp"} />
                <HomeCard heading1={"Gaming headphones"} heading2={"5000rupess"} imgss={"/assets/headphones_a_4.webp"} />
                <HomeCard heading1={"Gaming headphones"} heading2={"5000rupess"} imgss={"/assets/watch_4.webp"} />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-300   dark:bg-slate-600 py-2 bg-grad  px-4 sm:py-0'>
        <div className='max-w-[1440px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-4  mt-0 space-y-6  py-6 sm:mt-20 max'>
            <p className='hidden'></p>
            <Smallicons hd={"hidden"} icon={<FaVanShuttle size={50} />} heading1={'Free Shiping'} heading2={'All over the world'} />
            <Smallicons hd={"hidden"} icon={<FaGift size={50} />} heading1={'Daily Suprise'} heading2={'Suprise sale'} />
            <Smallicons hd={"hidden"} icon={<FaHeadphones size={50} />} heading1={'24/Service'} heading2={'consult with expert'} />
            <Smallicons hd={"hidden"}  icon={<FaCreditCard size={50} />} heading1={'Secure Payments '} heading2={'100% secure security'} />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4  mt-0 space-y-6  py-6 sm:mt-2 max bg-gray-200  dark:bg-slate-400 rounded-2xl '>
            <p className='hidden'></p>
            {/* <div className=" py-[50px] "> */}
              <ServiceCard bg={'rgb(52, 211, 153)'} txt1={'Headphones'} bgColor1={'dark:bg-fuchsia-700'} imgss={"/assets/headphones_a_3.webp"} />
              <ServiceCard bg={'rgb(239, 68, 68)'}  txt1={'Watchs'} imgss={'/assets/watch_1.webp'}/>
              <ServiceCard bg={'rgb(123, 63, 152)'} txt1={'Speakers '} imgss={'/assets/speaker2.webp'} />    
              <ServiceCard bg={'rgb(60, 63, 122)'} txt1={'Airpods'} imgss={'/assets/earphones_b_3.webp'} /> 
              {/* </div> */}
          </div>
        <div className=' mt-20  bg-gray-200  dark:bg-slate-400 rounded-lg ' >
          <h1 className='text-4xl font-semibold dark:text-orange-600 p-4 animate-pulse' > <u>Special Products</u> </h1>
          <div className='' >
          <div className='grid grid-cols-1 lg:grid-cols-3  mt-0 space-y-6   py-6 sm:mt-2   '>
            <p className='hidden'></p>
              <SpecialProduct heading1={'Asus  Airpods with Base Redmi Note Pairsa'} heading2={'799$ruppes'} heading3={'1200$ruppes'} imgss={'/assets/earphones_b_1.webp'}/>
              <SpecialProduct heading1={'Asus  Airpods with Base Redmi Note Pair'} heading2={'799$'} heading3={'1200$'} imgss={'/images/tab-removebg-preview.png'}/>
              <SpecialProduct heading1={'Asus  Airpods with Base Redmi Note Pair'} heading2={'799$'} heading3={'1200$'} imgss={'/assets/earphones_b_1.webp'}/>
              <SpecialProduct heading1={'Asus  Airpods with Base Redmi Note Pair'} heading2={'799$'} heading3={'1200$'} imgss={'/images/tab-removebg-preview.png'}/>
              <SpecialProduct heading1={'Asus  Airpods with Base Redmi Note Pair'} heading2={'799$'} heading3={'1200$'} imgss={'/assets/headphones_a_2.webp'}/>
              <SpecialProduct heading1={'Asus  Airpods with Base Redmi Note Pair'} heading2={'799$'} heading3={'1200$'} imgss={'/assets/earphones_b_1.webp'}/>

          </div>
          </div>
        </div>
        <div className='grid grid-cols-1  mt-4 lg:grid-cols-5   space-y-6  py-6  sm:mt-20 max bg-gray-200  dark:bg-slate-400 px-10 rounded-md items-center  '>
            <p className='hidden'></p>
            <Smallicons h={"100"} w={"100"} imgss={"/pngwing.com.png"} hd={"mx-auto"} />
            <Smallicons h={"150"} w={"150"} imgss={"/Xiaomi-logo.png"}  hd={"mx-auto"} />
            <Smallicons h={"150"} w={"150"} imgss={"/lg-logo-14410.png"}  hd={"mx-auto"}  />
            <Smallicons h={"100"} w={"100"} imgss={"/kisspng-clip-art-logo-brand-point-huawei-5c11e13b0d52d3.2435014915446756430546.png"}  hd={"mx-auto"} />
            <Smallicons h={"150"} w={"150"} imgss={"/pngegg.png"}  hd={"mx-auto"}  />
          </div>
          <div  >
      <BlogSlider/>
          </div>
        </div> 

      <div className='pb-4 max-w-7xl mx-auto'>
        <Carousel/>
      </div>
      </div>
      <div className='bg-gray-200 dark:bg-slate-700 ' >
      <Fotter/>
      </div>
    </div>
  )
}
