import React from 'react'
import Cadr from '../Ui/Cadr'
import Reviewnum2 from './Reviewnum2';
import Reviewnone from './Reviewnone';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

export default function Reviewsec() {
  const [page,setpage] = useState(1)
  function changeReview(){
    if(page === 2){
      setpage(1)
    }else{
      setpage(2)
    }
  }
  return (
    <Cadr>
    <div className='w-full bg-[#FFFFFF] px-10 py-10 rounded-[20px]  h-[800px] relative max-[950px]:h-screen'>
    <div className='w-full flex justify-between max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center'>
            <h1 className='font-medium text-3xl w-1/4 max-[900px]:w-full max-[900px]:text-center'>REVIEWS</h1>
            <p className='font-semibold text-3xl  w-3/4 max-[900px]:w-full max-[900px]:text-center max-[450px]:text-lg'>We are incredibly grateful to have received wonderful feedback from our valued clients.</p>
           
      </div>
            <div className='bg-[#0046FF] text-white px-11 py-14 w-[80%] flex items-center justify-between rounded-[20px] absolute bottom-4 right-4 max-[950px]:w-full max-[950px]:right-0 max-[950px]:bottom-0 max-[800px]:w-full max-[800px]:px-2 max-[800px]:py-2'>
          {page == 1 && <Reviewnone></Reviewnone>}
          {page == 2 && <Reviewnum2></Reviewnum2>}
              <div className='h-16 w-16 flex justify-center cursor-pointer items-center bg-white text-black rounded-[50%] max-[800px]:hidden' onClick={changeReview}>
                <FaAngleRight className='cursor-pointer text-2xl'></FaAngleRight>
                </div>
            </div>
      </div>

    </Cadr>
  )
}