import React from 'react'
import Cadr from '../Ui/Cadr'

export default function Sec1() {
  return (
    <Cadr>
      <div className='w-full relative max-[800px]:hidden'>
      <div className="rounded-3xl bg-white w-full h-[595px] backg2 " />
      <div className='absolute bg-black opacity-30 bottom-0 left-0 w-full h-[595px] rounded-3xl'></div>
      </div>
      
    </Cadr>
  )
}