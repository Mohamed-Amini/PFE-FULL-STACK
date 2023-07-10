import React from 'react'
import Cadr from '../Ui/Cadr'
import play from '../../images/Polygon 1.png'

export default function Sec1() {
  return (
    <Cadr>
        <div className='w-full h-[520px] bg-[#252733] rounded-2xl flex justify-center items-center'>
    <div className='w-24 h-24 bg-[#B4B4B4] boder-[1px] border-white flex justify-center items-center rounded-full cursor-pointer'>
        <img src={play} alt="" />
    </div>
        </div>
      
    </Cadr>
  )
}
