import React from 'react'
import Cadr from './Ui/Cadr'
import { Link } from 'react-router-dom';
import image from '../images/whitefooter.svg';



export default function Footer() {
  return (
    <Cadr>
    <div className='bg-[#252733] rounded-3xl px-10 py-6'>
      <div className='flex justify-between max-[900px]:flex-col'>
      <div>
      <div className='flex items-center gap-3 '>
        <img className='w-[140px] h-[35px] relative' src={image} alt="" />
      </div>
        <p className='text-white w-2/5 mt-10 text-[24px] font-semibold uppercase max-[800px]:w-full max-[800px]:my-6 max-[800px]:text-center'>
        We help you and you help yourself
        </p>
      </div>
      <div className='max-[900px]:text-center' >
        <h1 className='text-[#8D8F9C] font-medium text-base'>Explore</h1>
        <div className=' mt-10  max-[900px]:mt-2'>
        <div className=' mt-10  max-[900px]:mt-2 '>
              <div>
                <Link to="/" className=' hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>Home</Link>
              </div>
              <div>
                <Link to="/about" className=' hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>About Us</Link>
              </div>
              <div>
                <Link to="/services" className=' hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>Services</Link>
              </div>
              <div>
                <Link to="/news" className='hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>News</Link>
              </div>
              <div>
                <Link to="/contact" className='hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>Contact</Link>
              </div>
          </div>
        </div>
      </div>
      <div className='my-2 max-[900px]:text-center'>
        <h1 className='text-[#8D8F9C] font-medium text-base text-center'>Get in touch</h1>
        <div  className=' mt-10 max-[900px]:mt-2'>
          <p className='text-[#FCFCFE] font-medium text-sm mt-2'>+212 665 235 448</p>
          <p className='text-[#FCFCFE] font-medium text-sm mt-2'>Contact@Kinesis.com</p>
          <p className='text-[#FCFCFE] font-medium text-sm mt-2'>Contact@Kinesis.com</p>
        </div>
      </div>
      <div className='my-2 max-[900px]:text-center'>
        <h1 className='text-[#8D8F9C] font-medium text-base text-center'>Connect</h1>
        <div  className=' mt-10  max-[900px]:mt-2'>
          <p className='hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>Facebook</p>
          <p className='hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>Instagram</p>
          <p className=' hover:text-[#8D8F9C] text-[#FCFCFE] font-medium text-sm mt-2'>Twitter</p>
        </div>
      </div>
    
    </div>
    <div className='bg-[#3B3E4C] text-white flex justify-between rounded-2xl py-2 px-5 mt-9 max-[800px]:flex-col max-[800px]:items-center'>
      <p className='text-[#FCFCFE] font-medium text-sm'>Privacy Policy</p>
      <p className='text-[#FCFCFE] font-medium text-sm max-[800px]:text-center'>Copyright © 2023 Kinesitherapy, All rights reserved</p>
      <p className='text-[#FCFCFE] font-medium text-sm'>Terms & Conditions</p>
    </div>
      </div>
    </Cadr>
  )
}