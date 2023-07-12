import React from 'react';
import Cadr from '../Ui/Cadr';
import image from '../../images/services2.png';

export default function Pic2() {
  return (
    <Cadr>
      <div className="bg-white h-screen w-full rounded-3xl px-8 py-6 flex flex-col">
      <div className='w-full flex justify-center '>
           <h1 className='w-2/4 text-center text-[#252733] font-semibold text-3xl max-[800px]:text-xl max-[450px]:w-full'>Our goal is to make physiotherapy  <span className=" text-blue-600"> accessible , convenient </span> and <span class="text-blue-600"> effective </span>, all while prioritizing your comfort and well-being.</h1>
        </div>
        <img
            className="full h-[70%] rounded-3xl object-cover mt-auto"
            alt=""
            src={image}
          />
      </div>
    </Cadr>
  );
}















