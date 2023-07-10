import React from 'react'
import Cadr from '../Ui/Cadr'
import { FaPhoneAlt } from "react-icons/fa";
import { CiVideoOn } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import icon from '../../images/micro.svg'

export default function Sectione2() {
  return (
    <Cadr className='h-screen'>
        <div className='section2 w-full h-full rounded-[25px] relative'>
            <div className='absolute w-full h-full top-0 left-0 section2cover rounded-[25px] z-0'></div>
            <p className='text-[#FFFFFF] absolute font-medium text-lg w-1/4 right-2 top-6 '>You can choose any specialist. All medical staff have graduated from higher educational institutions.</p>
            <div className='w-[20%] bg-[#FFFFFF] absolute text-center rounded-2xl px-4 py-4 right-10 bottom-10'>
                <h1 className='text-[#3C4357] font-medium text-2xl'>Recommendations</h1>
                <p className='text-start text-[#878A9F] my-4 pl-4'>You can choose any specialist. All medical staff have graduated from higher educational institutions.</p>
                <button  className='text-start text-[#FFFFFF] my-2 px-6 py-2 rounded-3xl left-2 bg-[#1B53F5]'>Get a consultation</button>
            </div>
            <div className='absolute w-[25%] bg-[#FFFFFF] px-5 py-3 rounded-[18px] left-6 top-7  '>
                <h1 className='text-[#3C4357] text-2xl font-medium'>Process</h1>
                <p className='text-[#878A9F] text-xs font-medium text-right mb-3 cursor-pointer'>Read more</p>
               <div className='w-full rounded-3xl h-36 section2div mb-3'></div>
                <p className='text-[#878A9F] font-medium text-sm w-3/4 text-start pl-2 mb-2'>You choose a convenient time and day for consultation with a doctor. The meeting can be in a video format, or in chat format.</p>
            </div>
            <div className='absolute flex gap-9 bottom-14 left-[42%] items-center'>
                <div className='w-10 h-10 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center text-black'>
                <FaVideo></FaVideo>
                </div>
                <div className='w-16 h-16 rounded-[50%] bg-[#F51B1B] flex justify-center items-center text-white'>
                    <FaPhoneAlt className='section2appel text-2xl'></FaPhoneAlt>
                </div>
                
                <div className='w-10 h-10 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center text-black'>
                <img src={icon} alt="" />
                </div>

            </div>
        </div>
      
    </Cadr>
  )
}
