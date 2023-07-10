import React from 'react'
import img1 from '../../images/sliders1.png'
import img2 from '../../images/slider2.png'
import img3 from '../../images/sliders3.png'
import { useState,useEffect } from 'react'

export default function Sliders() {
    const sliders = [img2, img1, img3]
    const [Index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prev => (prev + 1) % sliders.length)
        }, 2000)
        return () => clearInterval(interval)
      }, [])
  return (
    <div className='w-[90%] h-[98%] absolute bottom-2 right-2 rounded-2xl'>
      <div className='absolute w-full h-full sliders rounded-2xl'></div>
      <img src={sliders[Index]} alt="" className='w-full h-full object-cover object-center rounded-2xl' />
      <div className='absolute bottom-3 flex justify-between w-full px-12'>
        <div className={` w-40 h-1 rounded-xl ${Index === 0 ? 'bg-[#FFFFFF]' : 'bg-[#B5B7C8]' }`}></div>
        <div className={` w-40 h-1 rounded-xl ${Index === 1 ? 'bg-[#FFFFFF]' : 'bg-[#B5B7C8]' }`}></div>
        <div className={` w-40 h-1 rounded-xl ${Index === 2 ? 'bg-[#FFFFFF]' : 'bg-[#B5B7C8]' }`}></div>
      </div>
    </div>
  )
}
