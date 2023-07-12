import React from 'react'
import Cadr from '../Ui/Cadr'
import { FaChevronRight } from "react-icons/fa";
import img1 from '../../images/about3.png'
import { FaPhoneAlt } from "react-icons/fa";
import { CiVideoOn } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

export default function Sec3() {
  return (
    <Cadr>
        <div className='w-full h-[850px] bg-[#FFFFFF] rounded-2xl flex py-7 px-12 relative max-[900px]:flex-col max-[900px]:items-center max-[900px]:h-screen'>
            <h1 className='w-1/2 text-[#252733] font-semibold text-3xl max-[900px]:w-full max-[900px]:text-center'>WHY US ?</h1>
            <div className='3/4 max-[900px]:w-full max-[900px]:text-center max-[900px]:my-5'>
                <h1 className='text-[#252733] font-semibold text-4xl mb-4'>Accessibility:</h1>
                <p className='font-sans text-[#1E2538]'>Online physiotherapy eliminates geographical barriers, allowing individuals from remote areas or those with limited mobility to access professional care without the need for in-person visits. It ensures that patients can receive physiotherapy services regardless of their location, making healthcare more inclusive and accessible for all.</p>
                {/* <button>Learn more</button> */}
                <button className='text-xl font-medium text-[#FFFFFF] w-[240px] py-2 rounded-[20px] bg-[#2560FE] flex items-center justify-between pl-14 relative mt-6 max-[900px]:mx-auto'>
                Learn more <a href='/services'></a>
        <div className='absolute right-2 bg-[#648CFF] w-8 h-8 flex justify-center items-center rounded-[50%] text-white'>
      <FaChevronRight></FaChevronRight>
        </div>
        </button>
        <div className=' rounded-2xl absolute bottom-4 right-4 w-3/4 bg-black h-[480px] about3 max-[900px]:hidden'>
            <div className='absolute bottom-0 w-full h-24 bg-[#252733] rounded-b-xl flex justify-center items-center gap-7'>
            <div className='w-10 h-10 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center text-black'>
                <FaVideo></FaVideo>
                </div>
                <div className='w-16 h-16 rounded-[50%] bg-[#F51B1B] flex justify-center items-center text-white'>
                    <FaPhoneAlt className='section2appel text-2xl'></FaPhoneAlt>
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center text-black'>
                </div>
            </div>
             </div>
          </div>
          <div className='w-1/2 h-1/2 responsive3 rounded-3xl min-[900px]:hidden'>

          </div>
        </div>
      
    </Cadr>
  )
}