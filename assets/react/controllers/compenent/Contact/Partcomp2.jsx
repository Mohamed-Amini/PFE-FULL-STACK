import React from 'react'
import Cadr from '../Ui/Cadr'
import Input from '../Ui/Input'
import Inputwrapp from '../Ui/Inputwrapp'
import Submit from '../Ui/Submit'
export default function Partcomp2() {
  return (
    <Cadr>
        <div className='h-[700px] w-full flex justify-between max-[450px]:h-[770px]'>
        <div className='h-full rounded-2xl w-[49%] bg-blue-700 flex justify-center flex-col px-7  flex-shrink-0 max-[900px]:hidden'>
          <p className=" font-semibold text-white inline-block text-4xl ">
          What are you waiting for ?
          </p>
          <p className="text-[19px] font-medium text-white inline-block font-sans w-2/4 mt-3  ">
          Please fill out the form below to. Our team will review your message and get back to you as soon as possible to confirm the details.
          </p> 
          </div>
        <div className="bg-white h-full w-[49%] rounded-3xl flex-shrink-0 px-8 py-6   max-[900px]:w-full">
            <form action="" method='post'>
            <div className='flex w-full gap-2 max-[450px]:flex-col'>
                <Inputwrapp className='w-1/2 max-[450px]:w-full'>
                <label className='text-neutral-600 text-[18px] font-medium leading-7 '>First Name</label>
                <Input placeholder='First Name' type="text" id="firstName" name="contact[FName]"></Input>    
                </Inputwrapp>
                <Inputwrapp  className='w-1/2 max-[450px]:w-full'>
                <label className='text-neutral-600 text-[18px] font-medium leading-7 '>Last Name</label>
                <Input placeholder='Last Name' type="text" id="LastName" name="contact[LName]"></Input>    
                </Inputwrapp>
            </div>
                <Inputwrapp>
                <label className='text-neutral-600 text-[18px] font-medium leading-7 '>Email</label>
                <Input placeholder='example@mail.com' type="email" id="email" name="contact[email]" ></Input>    
                </Inputwrapp>
                <Inputwrapp>
                <label className='text-neutral-600 text-[18px] font-medium leading-7 '>Phone number</label>
                <Input placeholder='Phone Number' type="phoneNumber" id="contact[Phone]" name="contact[Phone]" ></Input>    
                </Inputwrapp>
                <Inputwrapp>
                <label htmlFor="" className='text-neutral-600 text-[18px] font-medium leading-7 '>Message</label>
                <textarea name="contact[Message]" id="message" cols="30" rows="3" className='  rounded-[29px] border-slate-500 outline-none border-[1px] px-6 py-4'  placeholder='Type your message...'>
                </textarea>
                    </Inputwrapp>
                <Submit value='Send message'className='pb-10'></Submit>
            </form>
          </div>
        </div>
      
    </Cadr>
  )
}
