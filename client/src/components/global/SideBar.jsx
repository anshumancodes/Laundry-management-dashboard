import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  return (
    <div>
      <div className='flex-col flex  bg-[#1E293B] min-h-screen'>
        <div className=' px-12 py-7 bg-[#0C121C]'>
            <h1 className='text-white lg:text-[3rem] font-extrabold'>Shuddhi शुद्धि</h1>
        </div>
        <div className='h-[7vh] bg-[#7148FC]'>

        </div>
        <div className='flex-col flex gap-[7vh] w-full  text-white mt-5 font-bold text-2xl text-left px-12'>
            <a href="/dashboard/inventory">Inventory</a>
            <a href="/dashboard/billing">billing</a>
            <a href="/dashboard/payment">Payments</a>
            <a href="/Support">Support</a>
            <a href="" className=' w-fit  font-light py-2 flex items-center gap-2'><button>log out </button> <IoIosLogOut /></a>

        </div>


      </div>
    </div>
  )
}

export default SideBar
