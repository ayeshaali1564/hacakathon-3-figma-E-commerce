import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Eproducts from './eproducts';



export default function  Explore() {
  return (
    <div className='w-full flex justify-center items-center mt-4 mb-1 pt-20'>
     <div className='sm:w-full md:w-[80%]  pb-10 '>
<div className='flex justify-between items-center'>
    <div >
<h3 className='text-red-500 font-bold   border-l-8 border-red-500 pl-3 ml-1'>
Our Products
    </h3>
<h1 className='text-slate-800 font-bold  sm:text-md md:text-3xl lg:text-3xl pt-3'>
   Explore Our Products
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
 {/*Navigation Arrow Ends */}

<div>

</div>
<Eproducts/>
 {/*End */}
 </div>
 </div>
    
  );
}
