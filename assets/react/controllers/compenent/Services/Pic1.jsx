import React from 'react';
import Cadr from '../Ui/Cadr';
// import image from '../../images/services1.jpg';

export default function Pic1() {
  return (
    <Cadr>
      <div className='w-full h-screen  bg-orange-400 rounded-2xl relative serbg max-[600px]:flex max-[600px]:justify-centre max-[600px]:items-center '>
        <div className='absolute w-full h-full style2 top-0 min-[900px]:hidden z-0 rounded-2xl '>
        </div>
        <p className='z-30 relative text-7xl uppercase w-3/5 py-28 mx-14 font-semibold text-white max-[600px]:text-3xl max-[600px]:text-center max-[600px]:w-full max-[600px]:mx-0'>We help you and you help yourself</p>
      </div>
  
    </Cadr>
  );
}