import React from 'react'
import Cadr from '../Ui/Cadr'

export default function Sec4() {
  return (
    <Cadr>
        <div className='w-full bg-[#0046FF] rounded-2xl px-4 py-9 flex justify-center items-center '>
            <div className='w-64 h-64 rounded-full about4 text-center circle relative'>
                <h1 className='font-normal text-[#FFFFFF] py-10 text-xs'>What are you waiting for !</h1>  
                <p className='text-[#FFFFFF] text-sm  font-semibold w-[200%] min-[550px]:absolute min-[550px]:left-[-130px] min-[550px]:top-20 px-7 max-[550px]:text-xs max-[550px]:w-full max-[550px]:'>Take the first step towards a healthier, more active life by joining our online physiotherapy community today.</p>
                <button className='mt-8 text-[#1B53F5] bg-[#FFFFFF] px-9 py-1 rounded-3xl text-sm'>Try now</button>
            </div>
             <div className='absolute text-center top-36 paragraphe'>
            </div>
</div>
    </Cadr>
  )
}