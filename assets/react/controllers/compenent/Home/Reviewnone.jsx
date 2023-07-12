import React from 'react'
import image from '../../images/6.png'
import image1 from '../../images/review1.png'


export default function Reviewnone() {
  return (
    <div className='w-3/4  max-[800px]:w-full  max-[950px]:h-1/2'>
    <div className='h-16 w-16 rounded-[50%] mb-4'>
    <img src={image1} alt="" />
    </div>
    <div  className='pl-24 max-[950px]:pl-2  max-[800px]:flex-col  max-[800px]:w-full'>
      <div className='border-[1px] w-9 h-9 flex justify-center items-center rounded-full'>
        <img src={image} alt="" />
      </div>
        <p className='font-normal text-lg mb-6 mt-2 max-[950px]:text-xs'>“I recently started using KINESIS and I couldn’t be more impressed with its functionality and user-friendly interface. The site has made a significant impact on my daily routine, streamlining tasks and providing valuable insights. The designers and developers have clearly put a great deal of thought and effort into creating a top-notch web site that caters to its users’ needs. I highly recommend KINESIS for anyone looking to simplify their life and increase productivity.”</p>
        <div>
          <p className='font-medium text-base mb-2'>Alexander Robert</p>
          <p className='font-light text-xs'>22 years old</p>
        </div>
      </div>
    </div>
  )
}