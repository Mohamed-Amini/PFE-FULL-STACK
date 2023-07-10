import React from 'react'
import Inputwraper from '../Ui/Inputwrapp'
import Input from '../Ui/Input'
import Submit from '../Ui/Submit'
export default function LoginDoc() {
  return (
    <div>
         <div className='mx-auto w-3/4 flex flex-col items-center gap-3 mb-10'>
            <div className='h-16 w-16 bg-[#DFE3EE] rounded-full mb-8'></div>
            <h1 className='font-semibold text-4xl leading-[20px]'>Welcome Back !</h1>
            <p className='font-medium text-[14px] text-[#5D5F6C]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        <form action="">
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Email</label>
            <Input placeholder='Enter your email' type='email'></Input>
            </Inputwraper>
            <Inputwraper>
            <label htmlFor="" className='text-[#484951] font-medium text-lg'>Password</label>
            <Input placeholder='Enter your email' type='password'></Input>
            <p className='text-[#252733] cursor-pointer text-right mt-2 font-medium'>Forgot Password ?</p>
            </Inputwraper>
            <Submit value='Log In'></Submit>
            <p className='font-semibold text-base text-center mt-4 text-[#5E5E60]'>You dont have an account? <a href="" className='text-[#1B53F5] cursor-pointer'> Sign Up?</a></p>
         </form>
    </div>
  )
}
