import React from 'react'
import Calendar from './Calendier'

export default function Home1() {
  return (
    <div className='w-full h-ful'>
      <div className='flex w-full py-3 px-2 h-[400px] justify-between'>
      <div className='bg-[#1B53F5] h-full rounded-3xl py-3 px-3 w-[30%] backg'>
          <p className='font-medium text-3xl text-white font-sans w-[250px]'>Welcome back <span>Dr.Leila</span></p>
          <p className='text-white w-[150px] text-sm mt-5'>There is the latest update for the last 7 days. Check now !</p>
      </div>
      <div className='bg-[#FFFFFF] h-full w-[68%] rounded-3xl px-3 py-2 flex justify-between'>
        <div className='w-[49%] h-full bg-[#41DBA9] rounded-3xl text-white px-3 py-2'>
          <p className='font-sans font-semibold text-base'>Overall visitors</p>
          <div className='flex gap-2'>
            <p className='text-[140px] font-sans'>54</p>
            <p className='backround h-7 px-2 text-center rounded-full'>+15.2%</p>
          </div>
          <p className='text-[#FFFFFF] font-sans w-[250px] text-lg'>Data obtained for the last 7 days from 5.567 Visitor to 7.525 Visitor.</p>
        </div>
        <div className='w-[49%] h-full bg-[#FB104A] rounded-3xl  px-3 py-2 text-white'>
        <p className='font-sans font-semibold text-base'>Overall visitors</p>
          <div className='flex gap-2'>
            <p className='text-[140px] font-sans'>14</p>
            <p className='backround h-7 px-2 text-center rounded-full'>+10.4%</p>
          </div>
          <p className='text-[#FFFFFF] font-sans w-[250px] text-lg'>Increase in data by 500 inpatients in the last 7 days.</p>
        </div>
      </div>
      </div>
      <Calendar></Calendar>
    </div>
  )
}
