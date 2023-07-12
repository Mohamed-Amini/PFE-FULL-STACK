import React from 'react';
import Cadr from '../Ui/Cadr';
// import image from '../../images/services3.png';

export default function Pic3() {
  return (
    <Cadr>
      <div className='w-full h-screen servespic3 flex justify-center items-center relative max-[750px]:rounded-3xl'> 
      <div className='absolute w-full h-full bg-black opacity-10 bottom-0 left-0  rounded-3xl'>
            </div>
         <div className='w-80 h-80 rounded-full about4 text-center circle relative'>
                <p className='text-[#FFFFFF]  font-semibold text-2xl w-[200%] min-[750px]:absolute min-[750px]:left-[-130px] min-[750px]:top-20 px-7 max-[750px]:text-lg max-[750px]:w-full max-[750px]:py-28'> We strive to accommodate your schedule and provide you with the best possible service.</p>
            </div>
      </div>
    </Cadr>
        

  );
}