import React from 'react'
import Cadr from '../Ui/Cadr'
import Submit from '../Ui/Submit'
import Input from '../Ui/Input'



export default function Form() {
  return (
    <Cadr className='h-[0px]'>
        <div className="absolute top-[730px] left-[630px] w-[640px] h-[605px] bg-white	 rounded-3xl" />
        <form action="" className=''>
        <div className="form-group">
          <label htmlFor="" className='text-neutral-600 text-[18px] font-medium leading-7 absolute top-[770px] left-[680px] text-center'>First Name</label>
          <Input placeholder='First Name' type="text" id="firstName" name="firstName" className='absolute top-[810px] left-[675px]' />
        </div>
        <div className="form-group">
          <label htmlFor="" className='text-neutral-600 text-[18px] font-medium leading-7 absolute top-[770px] left-[980px] text-center'>Last Name</label>
          <Input placeholder='Last Name' type="text" id="LastName" name="LastName" className=' w-[262px]  absolute top-[810px] left-[970px]' />
        </div>
        <div className="form-group">
          <label htmlFor="" className='text-neutral-600 text-[18px] font-medium leading-7 absolute top-[880px] left-[680px] text-center'>Email</label>
          <Input placeholder='example@mail.com' type="email" id="email" name="email" className=' w-[555px]   absolute top-[915px] left-[675px]' />
        </div>
        <div className="form-group">
          <label htmlFor="" className='text-neutral-600 text-[18px] font-medium leading-7 absolute top-[970px] left-[680px] text-center'>Phone number</label>
          <Input placeholder='Phone Number' type="phoneNumber" id="phoneNumber" name="phoneNumber" className=' w-[555px]  absolute top-[1010px] left-[675px]' />
        </div>
        <div className="form-group">
          <label htmlFor="" className='text-neutral-600 text-[18px] font-medium leading-7 absolute top-[1060px] left-[680px] text-center'>Message</label>
          <textarea name="message" id="message" cols="30" rows="10" className=' w-[555px] h-[140px] rounded-[29px] border-slate-500 absolute top-[1095px] left-[675px] outline-none border-[1px] px-6 py-4'  placeholder='Type your message...'>

          </textarea>
          


        </div>
        <Submit value='Send Message'className='w-[561px] h-[40px] bg-blue-700 rounded-[24.75px] absolute top-[1260px] left-[680px]'></Submit>



        
      </form>


    </Cadr>
  )
}