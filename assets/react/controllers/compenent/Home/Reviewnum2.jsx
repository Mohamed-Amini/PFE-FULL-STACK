import React from 'react'
import image from '../../images/6.png'
import image1 from '../../images/reviews2.png'


export default function Reviewnum2() {
  return (
    <div className='w-3/4'>
    <div>
    <img className='h-16 w-16 rounded-[50%] mb-4' src={image1} alt="" />
    </div>
    <div  className='pl-24'>
      <div className='border-[1px] w-9 h-9 flex justify-center items-center rounded-full'>
        <img src={image} alt="" />
      </div>
        <p className='font-normal text-lg mb-6 mt-2'>“Having tried several online physiotherapy websites, I found KINESIS to be one of the best platforms available. The website offers a wide range of physiotherapy services. The information provided is detailed  and supported by reputable sources, making it a valuable resource for individuals seeking knowledge about their health concerns. The physiotherapists associated with the website are highly qualified and experienced, and their expertise shines through during the online consultations.”</p>
        <div>
          <p className='font-medium text-base mb-2'>Ibtihal Al Yaakoubi</p>
          <p className='font-light text-xs'>33 years old</p>
        </div>
      </div>
    </div>
  )
}
