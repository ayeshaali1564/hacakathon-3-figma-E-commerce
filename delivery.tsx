import React from "react"
import { FiHeadphones } from "react-icons/fi";
import { MdWifiProtectedSetup } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


export default function delivery() {
    return (
        <div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items">
<div className="sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center
               flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4">

{/*Box 1*/}
<div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">

    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center flex-col border-red-400 border-8">
    <TbTruckDelivery className="text-2xl text-slate-300" />
    </div>
<div>
    <h1 className="font-bold text-center">FREE AND FAST DELIVERY</h1>
    <p className="text-sm">Free delivery for all orders over $140</p>
</div>
</div>

{/*Box 2*/}
<div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">

    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center flex-col border-red-400 border-8">
    <FiHeadphones  className="text-2xl text-slate-300" />
    </div>
<div>
    <h1 className="font-bold text-center">24/7 CUSTOMER SERVICE</h1>
    <p className="text-sm">Friendly 24/7 customer support</p>
</div>
</div>

{/*Box 3*/}
<div className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3">

    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center flex-col border-red-400 border-8">
    <MdWifiProtectedSetup className="text-2xl text-slate-300" />
    </div>
<div>
    <h1 className="font-bold text-center">MONEY BACK GUARANTEE</h1>
    <p className="text-sm">We return money within 30 days</p>
</div>
</div>
</div>
 </div>
    );
}