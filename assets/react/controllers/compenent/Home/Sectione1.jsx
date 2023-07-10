import React from 'react'
import images1 from '../../images/1.jpg'
import { FaChevronRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Cadr from '../Ui/Cadr';



// FaChevronRight
export default function Sectione1() {
  console.log(images1)
  return (
    <Cadr>
    <div className='w-full  h-[900px] mt-4 max-[700px]:rounded-3xl max-[700px]:bg-[#1B53F5] rounded-[25px] relative max-[700px]:px-0 section1 max-[700px]:h-[700px] '>
      <div className='min-[700px]:w-[45%] min-[700px]:absolute min-[700px]:left-20 min-[700px]:top-40 w-full max-[700px]:text-center max-[700px]:flex max-[700px]:justify-center max-[700px]:items-center max-[700px]:flex-col max-[700px]:h-full'>
      <h1 className='text-[#FFFFFF] text-5xl font-semibold w-3/4 leading-[54px] max-[700px]:text-4xl'>Experience Online Physiotherapy Today!</h1>
    <div className='mt-9 flex gap-7 items-center'>
      <button className='text-xl font-medium bg-[#FFFFFF] w-[240px] py-2 rounded-[20px] text-[#2560FE] flex items-center justify-between pl-14 relative  max-[700px]:text-center'>
        Get in touch 
        <div className='absolute right-2 bg-[#1B53F5] w-8 h-8 flex justify-center items-center rounded-[50%] text-white'>
      <FaChevronRight></FaChevronRight>
        </div>
      </button>
      <div className='bg-[#FFFFFF] h-10 w-10 rounded-[50%] flex justify-center items-center max-[700px]:hidden' >
        <FaPlay className='text-[#1B53F5]'></FaPlay>
      </div>
    </div>
      </div>
    </div>
    </Cadr>
  )
}
