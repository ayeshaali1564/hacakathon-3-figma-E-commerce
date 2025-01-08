import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { AiFillApple } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';

export default function hero () {
    return (
        <div className="flex justify-center items-center px-10 " >
            <div className="max-w-[1440px]  px-3={value.toString()} flex gap-6 justify-center">
                <div className="border-r-2 border-neutral-200 p-10 hidden md:block">
                    <ul className="space-y-4">
                        {[
                           
                  "women's Fashion",
                  "men's Fashion",
                  "Electronics",
                  "Home & Lifestyle",
                  "Medicine",
                  "Sports & Outdoor",
                  "Baby's & Toys",
                  "Groceries & Pets",
                  "Health & Beauty",
                           
                  ] .map ((items,index) =>(
                       <li
                         key={index} 
                         className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition-all duration-150"
                         > <span>{items}</span>
                            {index < 2 && (
                                <IoIosArrowForward/>
                            )}
                    </li>
                        ))}
                    </ul>
                </div>
         
                {/*Right Side */}
                <div className="flex items-center bg-black rounded-lg p-6 px-10">
                     {/*Text Content */}
                    <div className='text-white flex flex-col justify-center space-y-5 sm:w[180px] md:w-[300px] lg:w-[300px]'>
                        <div className='flex items-center gap-2'>
                        <AiFillApple  />
                        <span className='sm:text md:text-base font-semibold'>
                            {" "} 
                            iphone 14 Series
                            </span>
                        </div>
                         {/*Heading */}
                         <h1 className='sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug'>
                            Up to 10% 
                         </h1>
                         <h1 className='sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug'>off Voucher</h1>
                         <Link 
                         href={"#products"}
                         className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
                         >
                            Shop Now
                            <FaLongArrowAltRight />
                        </Link>
                    </div>
                      {/*Image */}
                      <div className="ml-auto">
                        <img src="../iphone.png" alt="iphone" />
                      </div>
                </div>
            </div>
          </div>
    )
}