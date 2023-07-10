import React from 'react'
import Inputwraper from '../Ui/Inputwrapp'
import Input from '../Ui/Input'
import Submit from '../Ui/Submit'
import { Link } from 'react-router-dom'
import Sliders from './Sliders'

export default function Register() {
  return (
    <div className='W-full h-screen bg-white flex'>
        <div className='w-1/2 px-24 flex flex-col justify-center '>
      <div className='mx-auto w-3/4 flex flex-col items-center gap-3'>
            <div className='h-16 w-16 bg-[#DFE3EE] rounded-full mb-8'></div>
            <h1 className='font-semibold text-4xl leading-[20px]'>Create an account</h1>
            <p className='font-medium text-[14px] text-[#5D5F6C]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        <form action="" className='text-center'>
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Name</label>
            <Input placeholder='Enter your email' type='text'></Input>
            </Inputwraper>
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Email</label>
            <Input placeholder='Enter your email' type='email'></Input>
            </Inputwraper>
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Phone number</label>
            <Input placeholder='Enter your email' type='tel'></Input>
            </Inputwraper>
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Password</label>
            <Input placeholder='Enter your email' type='password'></Input>
            </Inputwraper>
              <Inputwraper>
              <div className='flex gap-10 my-2'>
                <input type="checkbox" />
               I agree to all terms, Privacy Policy and Fees
              </div>
              </Inputwraper>
            <Submit value='Sign Up' className='mb-1'></Submit>
            <Link to='/Login' className='font-semibold text-base  text-[#5E5E60] text-center'>Already have an account? <span  className='text-[#1B53F5] cursor-pointer'>Log In</span></Link>
         </form>
    
        </div>
        <div className='bg-white w-1/2 h-full relative'>
          <Sliders></Sliders>
        </div>
    </div>
  )
}
