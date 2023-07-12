import React from 'react'
import Cadr from '../Ui/Cadr'
import play from '../../images/vid.png'

export default function Sec1() {
  return (
    <Cadr>
      <div className="relative">
        <img src={play} className="w-full h-full rounded-3xl object-cover"/>
        <div className=" w-[250px] h-[455px] absolute inset-0 flex justify-center items-center max-[700px]:w-full max-[700px]:h-full">
          <p className=" w-2/3  text-gray-800 text-[47px] font-semibold capitalize justify-center items-center max-[700px]:text-xl">
            Experience Online Physiotherapy Today!
          </p>
        </div>
      </div>
    </Cadr>
  )
}