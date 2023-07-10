import React from 'react'
import Cadr from '../Ui/Cadr'
import arrow from '../../images/Arrow 1.png'

export default function Sec6() {
  return (
    <Cadr>
        <div className='w-full h-[450px] bg-[#FFFFFF] rounded-2xl  py-7 px-12 relative'>
            <h1 className='w-1/4 text-[#252733] font-semibold text-3xl uppercase'>Our process</h1>
           <div className='flex overflow-hidden  overflow-x-auto  scrollbar-hide w-full mt-12'>
            <div className='w-full flex-shrink-0' >
                <div className='w-full flex justify-between items-center pr-2'>
                    <div className='flex items-center'>
                    <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 '>01.</div>
                    <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold'>Education and Advice:</div>
                    </div>
                    <img src={arrow} alt=""  className='w-[200px]'/>
                </div>
                <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between'>
                        <div className='flex flex-wrap w-1/4 gap-3 mt-2'>
                            <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                         </div>
                        <div className='font-medium text-lg text-[#252733]  w-2/4'>
                        Our website is a valuable resource for educational content, empowering you with knowledge about injury prevention, self-care techniques, and ways to optimize your physical well-being. We believe that informed individuals make better decisions regarding their health.
                        </div>
                </div>
            </div>
                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 '>02.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold '>Exercise Programs:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2'>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4'>
                            Receive customized exercise programs designed to target your specific needs and aid in your rehabilitation process. Our physiotherapists will guide you through the exercises and provide ongoing support and adjustments as required.
                            </div>
                    </div>
                </div>
                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 '>03.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold '>Rehabilitation:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2'>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4'>
                            Whether you're recovering from surgery, a sports injury, or an accident, our online rehabilitation services can support your recovery journey. Our physiotherapists will design a personalized rehabilitation program to restore your strength, mobility, and function.
                            </div>
                    </div>
                </div>

                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 '>04.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold '>Pain Management:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2'>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4'>
                            We specialize in helping individuals manage and alleviate pain resulting from various musculoskeletal conditions, injuries, or chronic issues. Our team will employ a combination of therapeutic techniques, exercises, and lifestyle modifications to help reduce your pain and improve your quality of life.
                            </div>
                    </div>
                </div>

                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 '>05.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold '>Progress Monitoring:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2'>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                                <p className='text-[#5D5F6C] font-medium text-xs border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Lorem Ipsum</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4'>
                            Through regular virtual check-ins, we will monitor your progress, make necessary adjustments to your treatment plan, and provide ongoing support to ensure you're on track to achieving your goals.
                            </div>
                    </div>
                </div>

            </div> 
            </div>
      
    </Cadr>
  )
}
