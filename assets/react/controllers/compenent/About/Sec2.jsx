import React from 'react'
import Cadr from '../Ui/Cadr'
import doc from '../../images/docteur.png'
import Vector from '../../images/Vector 3.png'
export default function Sec2() {
  return (
    <Cadr>
        <div className='w-full rounded-2xl h-screen docteur relative'>
            <img src={Vector} alt="doctuer image" className='absolute  h-full left-14' />
            <div className='absolute right-5 bottom-0'>
            <img src={doc} alt="doctuer image" className=' z-10 w-[550px] img4 relative' />
            <div className='w-96 h-96 rounded-full divdocteur absolute top-0  flex justify-center items-center start'>
                <div className='w-60 h-60 rounded-full bg-[#FFFFFF]'></div>
            </div>
            <div className='w-40 h-40 rounded-full absolute top-[-100px] right-2  flex justify-center items-center divdocteur'>
                <div className='w-20 h-20 rounded-full bg-[#FFFFFF]'></div>
            </div>
            <div className='w-20 h-20 rounded-full absolute top-14 right-0  flex justify-center items-center divdocteur'>
                <div className='w-10 h-10 rounded-full bg-[#FFFFFF]'></div>
            </div>
            </div>
            <h1 className='font-medium text-2xl text-[#FFFFFF] px-6 py-10'>ABOUT US</h1>
            <div className=' text-[#FFFFFF] px-14 w-[70%] '>
            <p className='font-semibold text-5xl uppercase mt-8'>online physiotherapy services have become increasingly essential...</p>
            <p className='font-medium w-3/4 mt-6'>In today's digital age, online physiotherapy services have become increasingly essential, providing convenient access to care and expanding opportunities for patients to receive the support they need. At KINESIS, we understand the significance of online physiotherapy and are committed to delivering high-quality virtual care.</p>
            </div>

        </div>
      
    </Cadr>
  )
}
