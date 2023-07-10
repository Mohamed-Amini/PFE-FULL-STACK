import React from 'react'
import Sliders from './compenent/Login/Sliders'
import Inputwraper from './compenent/Ui/Inputwrapp'
import Input from './compenent/Ui/Input'
import Submit from './compenent/Ui/Submit'
import img1 from './images/check.png'
import { useState } from 'react'
import arrow from './images/arrow.png'
import { NavLink , Link, Route } from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom'

export default function ForgitPawword(props) {
  const [send,setsend] = useState(false)
  function Handlesend(e){
      e.preventDefault();
      console.log("Handlesend")
      setsend(true)
  }return (
    <Router>
    <div className='W-full h-screen bg-white flex'>
        <div className='w-1/2 px-24 flex flex-col justify-center '>
        <div>
        {
            !send && (
                <>
       <div className=' flex flex-col  gap-3 mb-10'>
            <div className='h-16 w-16 bg-[#DFE3EE] rounded-full mb-8'></div>
            <h1 className='font-semibold text-4xl leading-[20px]'>Forgot password  ?</h1>
            <p className='font-medium text-[14px] text-[#5D5F6C]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        <form action={props.action} method='post'>
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Email</label>
            <Input placeholder='Enter your email' type='email' name="reset_password_request_form[email]"></Input>
            </Inputwraper>
            <Submit value='Send'></Submit>
            <div className='flex justify-center'>
                    <Link to='/Login' className='font-semibold text-base mt-4 text-[#5E5E60] cursor-pointer flex gap-4 items-center'>
                        <img src={arrow} alt="" className='h-4' />
                        Back to Log In
                    </Link>
            </div>

         </form>
                </>
            )
        }
         {
            send && (
         <div className='flex flex-col items-center gap-7'>
            <div className='border-[1px] border-[#2FD47B] w-20 h-20 rounded-full flex justify-center items-center'>
            <img src={img1} alt="" />
            </div>
            <h1 className='text-[#252733] font-semibold text-4xl uppercase'>Check your Inbox</h1>
            <p className='text-[#5D5F6C] text-center'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
         </div>
            )

         }
    </div>
        </div>
        <div className='bg-white w-1/2 h-full relative'>
          <Sliders></Sliders>
        </div>
    </div>
    </Router>
  )
}
