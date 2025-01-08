import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";


export default function navbar () {
    return (
        <header className='bg-white shadow-sm border-b mx-auto flex flex-col '>
            <div className='bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full'>
                <div className='text-center flex-1'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%    
                    <a href="#" className='underline hover-text-slate-300'>
                      
                           shopNow! {""}
                        </a>
                </div>

    <div className="flex items-center gap-[2px]">
        <div className="text-white text-sm font-normal leading-[21px]">
            English
        </div>
 <RiArrowDropDownLine />
</div>
 </div>
 {/* Main navigation */}
            <div className="flex justify-between items-center px-20 py-4">
                <h1 className="text-2xl font-bold text-black px-16">Exclusive</h1>

                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="#" className="text-gray-600 hover:text-black underline">Home</a>
                    <a href="#" className="text-gray-600 hover:text-black">Contacts</a>
                    <a href="#" className="text-gray-600 hover:text-black ">About</a>
                    <a href="#" className="text-gray-600 hover:text-black underline">Signup</a>
                </nav>
                  {/*Search Icon */}

                  <div className="flex items-center space-x-6">
                    <div className="hidden lg:flex items-center bg-slate-100" px-3 py-2>
                        <input
                         type="text" 
                        placeholder="what are you looking for?" 
                        className="bg-slate-100 outline-none text-sm"/>
                        <IoSearchSharp />
                    </div>
                    <FaCartShopping />
                    <CiHeart />
              

                  </div>

            </div>
        </header>
    );
}
