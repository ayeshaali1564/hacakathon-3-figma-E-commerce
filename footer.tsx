import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa6'

export default function footer() {
  return (
    <div className='bg-black text-white pt-10 px-20 font-poppins'>
      <div className='container mx-auto'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10'>
    <div>
        <h2 className='font-bold text-xl'>Exclusive</h2>
        <p className='mt-4 text-zinc-200 font-light'>Subscribe</p>
        <p className='mt-2 text-zinc-200 font-light'>
          Get 10% off your first order
        </p>
        <div className='mt-4 relative border border-white rounded'>
          <input type="email"
            placeholder ="Enter Your Email" 
              
            className='bg-black text-white p-2 flex-grow outline-none w-full'/>
         
            <button type="submit"
            className='absoulte top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-slate-700 ' >   
            </button>  
        </div>
    
    </div>
    {/* Support Section */}
<div>
  <h2 className='font-semibold text-xl '>Support</h2>
  <p className='font-light text-zinc-200 mt-4 '>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
  <p className='font-light text-zinc-200 mt-2 '>exclusive@gmail.com</p>
  <p className='font-light text-zinc-200 mt-3  '>+88015-88888-9999</p>
</div>

{/* Account Section */}
<div>
  <h2 className='font-semibold text-xl '>Account</h2>
<ul className='mt-4 space-y-3 text-zinc-200 font-light'>
  <li>My Account</li>
  <li>Login / Register</li>
  <li>Cart</li>
  <li>Wishlist</li>
  <li>Shop</li>
</ul>
</div>

{/* Quick Section */}

<div>
  <h2 className='font-semibold text-xl '>Quick Link</h2>
<ul className='mt-4 space-y-3 text-zinc-200 font-light'>
  <li>Privacy Policy</li>
  <li>Terms Of Use</li>
  <li>FAQ</li>
  <li>Contact</li>
</ul>
</div>

{/* Download App Section */}
<div>
  <h2 className='font-medium text-xl '>Download App</h2>
  <p className='mt-4 text-zinc-200 font-light'>Save $3 with App New User Only</p>
  <div className='mt-4 flex items-center gap-2'>
<div className= 'w-[100px] h-[100px]'>
  <img src="/qrcode.png" alt="qrcode" className="w-full h-full object-contain" />
</div>
{/* Section */}
<div>
<img src="/app..jpeg" alt="app" className="w-36 h-16 object-contain" />

</div>
  </div>
{/* Social Section */}

<div className='flex space-x-4 mt-6'>
  <a href="#" className='hover:text-grey-400'>
  <FaFacebook size={"24"}/>
  </a>

  <a href="#" className='hover:text-grey-400'>
  <FaInstagram size={"24"} />
  </a>
  
  <a href="#" className='hover:text-grey-400'>
  <FaTwitterSquare size={"24"} />
  </a>

  <a href="#" className='hover:text-grey-400'>
  <FaYoutube size={"24"} />
  </a>

  <a href="#" className='hover:text-grey-400'>
  <FaWhatsapp  size={"24"}/>
  </a>

</div>
</div>
</div>

        {/* Footer  Bottom */}
<div className='mt-10 text-center border-t border-zinc-800 text-slate-500 '>
  <p className='py-6'>
  Copyright Rimel 2022. All right reserved
  </p>

</div>

        {/* End Section */}
  </div>
      </div>
    
  )
}
