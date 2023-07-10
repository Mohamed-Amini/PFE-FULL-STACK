import React from 'react'
import Cadr from '../Ui/Cadr'
import part1 from '../../images/part1.png'
import part2 from '../../images/part2.png'
import part3 from '../../images/part3.png'

export default function PartnersSec() {
  return (
    <Cadr>
        <div className='w-full bg-[#FFFFFF] px-10 py-10 rounded-[20px] flex'>
            <div className='w-1/4'>
                <h1 className='font-medium text-2xl'>PARTNERS</h1>
            </div>
        <div className='flex flex-col gap-14 w-3/4'>
        <p className='text-[#3D4253] font-semibold text-3xl w-[20%]'>We work with these partners</p>
        <div className='flex gap-32 '>

            {/* <div className='border-[1px] border-[#252733] w-26 h-38 rounded-[50%] flex justify-center items-center'> */}
                {/* <img className='w-16 h-16 bg-[#D9D9D9]  rounded-[50%]' src={part1} alt="" /> */}
            {/* </div> */}

            <div className='border-[1px] border-[#252733] w-36 h-36 rounded-[50%] flex justify-center items-center'>
                <img className='w-4/5  rounded-[50%]' src={part1} alt="" />
            </div>
            <div className='border-[1px] border-[#252733] w-36 h-36 rounded-[50%] flex justify-center items-center'>
            <img className='w-4/5  rounded-[50%]' src={part2} alt="" />
            </div>
            
            <div className='border-[1px] border-[#252733] w-36 h-36 rounded-[50%] flex justify-center items-center'>
            <img className='w-4/5  rounded-[50%]' src={part3} alt="" />
                
            </div>
        </div>
        </div>
        </div>
            
    </Cadr>
  )
}
