import React from 'react'
import Sliders from './Sliders'
import { Outlet } from 'react-router-dom'
export default function LoginUI() {
  return (
    <div className='W-full h-screen bg-white flex'>
        <div className='w-1/2 px-24 flex flex-col justify-center '>
           <Outlet></Outlet>
        </div>
        <div className='bg-white w-1/2 h-full relative'>
          <Sliders></Sliders>
        </div>
    </div>
  )
}
