import React from 'react'
import div from './compenent/Ui/Inputwrapp'
import Input from './compenent/Ui/Input'
import Submit from './compenent/Ui/Submit'
import { Link } from 'react-router-dom'
import Sliders from './compenent/Login/Sliders'
import LOGO from '../controllers/images/blackIogo.svg'
import Inputwraper from './compenent/Ui/Inputwrapp'

export default function Register(props) {
  return (
    <div className='w-full h-screen bg-white flex'>
        <div className='w-1/2 px-24 flex flex-col justify-center '>
      <div className='mx-auto w-3/4 flex flex-col items-center gap-3'>
            <img className='h-16 w-16 rounded-full mb-8' src={LOGO} alt="" />
            <h1 className='font-semibold text-4xl leading-[20px]'>Create an account</h1>
            </div>
        <form action={props.action} className='text-center' method="post">
        <Inputwraper>
                        <label htmlFor="firstName" className='text-[#484951] font-medium text-lg'>First Name</label>
                        <Input placeholder='Enter your first name' type='text' id="FirstName" name="registration_form[FirstName]" required></Input>
                      </Inputwraper>
                      <Inputwraper>
                        <label htmlFor="lastName" className='text-[#484951] font-medium text-lg'>Last Name</label>
                        <Input placeholder='Enter your last name' type='text' id="LastName" name="registration_form[LastName]" required></Input>
                      </Inputwraper>
                      <Inputwraper>
                        <label htmlFor="email" className='text-[#484951] font-medium text-lg'>Email</label>
                        <Input placeholder='Enter your email' type='email' id="email" name="registration_form[email]" required></Input>
                      </Inputwraper>
                      <Inputwraper>
                        <label htmlFor="phoneNumber" className='text-[#484951] font-medium text-lg'>Phone number</label>
                        <Input placeholder='Enter your phone number' type='tel' id="PhoneNumber" name="registration_form[PhoneNumber]" required></Input>
                      </Inputwraper>
                      <Inputwraper>
                        <label htmlFor="password" className='text-[#484951] font-medium text-lg'>Password</label>
                        <Input placeholder='Enter your password' type='password' id="password" name="registration_form[plainPassword]" required></Input>
                      </Inputwraper>
                      <div>
                      <Inputwraper>
                        <label htmlFor="Date of Birth" className='text-[#484951] font-medium text-lg'>Password</label>
                        <Input  type='date' id="DateOfBirth" name="registration_form[DateofBirth]" required></Input>
                      </Inputwraper></div>
                      <div>
                        <div className='flex gap-10 my-2'>
                          <input type="checkbox" id="agreeTerms" name="registration_form[agreeTerms]" value="1" required />
                          I agree to all terms, Privacy Policy and Fees
                        </div>
                      </div>
                      
            <Submit value='Sign Up' className='mb-1'></Submit>
            <a to='/Login' className='font-semibold text-base  text-[#5E5E60] text-center'>Already have an account? <span  className='text-[#1B53F5] cursor-pointer'>Log In</span></a>
         </form>
    
        </div>
        <div className='bg-white w-1/2 h-full relative'>
          <Sliders></Sliders>
        </div>
    </div>
  )
}