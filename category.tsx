import React from 'react';
import { ImMobile2 } from "react-icons/im";
import {  FaArrowLeft, FaArrowRight, FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";

import { ImHeadphones } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";

export default function category() {
    return (
        <div className='w-full flex justify-center items-center mt-10 mb-1'>
            <div className='sm:w-full md:w-[80%]  pb-10'>
                <div className='flex flex-col sm:pl[6%] md:pl-0'>
                    <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
                        {""}
                         Categories 
                         </h3>
                    <div className="flex">
                        <h1 className='text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-2'> 
                            Browse By Category
                        </h1>
                    </div>

{/* Navigation Arrows*/}
<div className='flex-gap-2'>
    <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
    <FaArrowLeft  />
    </div>
    <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
    <FaArrowRight  />
</div>
</div>
</div>    
 
            {/*Categories */}
            <div className='flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8 '>
          {/*Box 1 */}
          <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <ImMobile2 size={40}/>
          <p className='font-bold'>  phones </p>
    </div>

      {/*Box 2 */}
      <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[150px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
      <FaComputer size={40}/>
          <p className='font-bold'>Computer </p>
    </div>

     {/*Box 3 */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[200px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <BsSmartwatch size={40}/>
          <p className='font-bold'>Smart Watch </p>
     </div>

      {/*Box 5 */}
      <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
      <FaCamera size={40} />
          <p className='font-bold'>Camera </p>
     </div>
      {/*Box 6 */}
      <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
      <ImHeadphones size={40} />
          <p className='font-bold'>Headphones</p>
</div>

  {/*Box 7*/}
<div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
<SiYoutubegaming size={40} />
          <p className='font-bold'>Gaming'</p>
</div>
</div>
</div>
</div>


    );
}