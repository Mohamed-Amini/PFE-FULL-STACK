import React from 'react';
import Cadr from '../Ui/Cadr';
import img1 from '../../images/docteur1.png';
import img2 from '../../images/docteur2.png';
import img3 from '../../images/docteur3.png';

export default function Sec5() {
  return (
    <Cadr>
      <div className='w-full h-screen bg-[#FFFFFF] rounded-2xl  py-7 px-12 relative'>
        <div className='w-full flex'>
           <h1 className='w-1/4 text-[#252733] font-semibold text-3xl'>Doctors</h1>
            <div className='3/4 overflow-x-auto'>
                <div className='w-1/2'>
                  <h1 className='text-[#252733] font-semibold text-3xl mb-4'>Meet Our Expert Doctors: <span class="text-blue-600 "> Guiding Your Path </span> To Optimal Health and Wellness Online!</h1>
                  <p className='font-sans text-xs  text-[#1E2538]'>At KINESIS, we take immense pride in our team of highly qualified and compassionate doctors. Our dedicated physicians bring a wealth of knowledge, expertise, and experience to the table, ensuring that you receive the best possible care.</p>
                </div>
            </div>
        </div>
        <div className='w-3/4   absolute right-0 bottom-5 flex overflow-hidden  overflow-x-auto  scrollbar-hide'>
        <div className='flex-shrink-0 mx-3 '>
          <img src={img1} alt="image docteur 1" />
          <div>
          <h1 className='font-medium text-2xl uppercase w-3/4'>Benrhamous Mustapha PHYSIOTHERAPIST</h1>
          <p className='font-medium text-sm'>Work experience - 8 years</p>
            <div className='flex flex-wrap w-2/4 gap-3 mt-2'>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Techniques in physiotherapy</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Manual therapy</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Best treatment</p>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 mx-3 '>
          <img src={img2} alt="image docteur 1" />
          <div>
          <h1 className='font-medium text-2xl uppercase w-3/5'>Adrar Loubna physiotherapist</h1>
          <p className='font-medium text-sm'>Work experience - 6 years</p>
            <div className='flex flex-wrap w-2/4 gap-3 mt-2'>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Monitoring</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Health care</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Rehabilitation</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Multidisciplinary</p>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 mx-3 '>
          <img src={img3} alt="image docteur 1" />
          <div>
          <h1 className='font-medium text-2xl uppercase w-3/5'>Dîna Benaamar kinésithérapie</h1>
          <p className='font-medium text-sm'>Work experience - 5 years</p>
            <div className='flex flex-wrap w-2/4 gap-3 mt-2'>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Manipulate Bodies</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'>Examination</p>
              <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl'> Assessment</p>
            </div>
          </div>
        </div>
        </div>
          
      </div>
    </Cadr>
  );
}