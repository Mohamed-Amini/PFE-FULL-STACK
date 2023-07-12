import React from 'react'
import Cadr from '../Ui/Cadr'
import arrow from '../../images/Arrow 1.png'

export default function Sec6() {
  return (
    <Cadr>
        <div className='w-full h-full bg-[#FFFFFF] rounded-2xl  py-7 px-12 relative max-[400px]:hidden'>
            <h1 className='w-1/4 text-[#252733] font-semibold text-3xl uppercase'>Our process</h1>
           <div className='flex overflow-hidden  overflow-x-auto  scrollbar-hide w-full mt-12'>
            <div className='w-full flex-shrink-0' >
                <div className='w-full flex justify-between items-center pr-2'>
                    <div className='flex items-center'>
                    <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 max-[600px]:px-6 max-[600px]:rounded-[30px] max-[510px]:py-2 '>01.</div>
                    <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold max-[1050px]:text-xl max-[850px]:px-4 max-[510px]:text-xs'>Education and Advice:</div>
                    </div>
                    <img src={arrow} alt=""  className='w-[200px] max-[1220px]:hidden'/>
                </div>
                <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between max-[850px]:flex-col max-[850px]:gap-4'>
                        <div className='flex flex-wrap w-1/4 gap-3 mt-2 max-[850px]:w-full'>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Progress</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Productivity</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Guide</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Advice</p>
                         </div>
                        <div className='font-medium text-lg text-[#252733]  w-2/4 max-[850px]:w-full'>
                        Our website is a valuable resource for educational content, empowering you with knowledge about injury prevention, self-care techniques, and ways to optimize your physical well-being. We believe that informed individuals make better decisions regarding their health.
                        </div>
                </div>
            </div>
                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5  max-[600px]:px-6 max-[600px]:rounded-[30px] max-[510px]:py-2 '>02.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold  max-[1050px]:text-xl  max-[850px]:px-4 max-[510px]:text-xs '>Exercise Programs:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between max-[850px]:flex-col max-[850px]:gap-4'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2 max-[850px]:w-full'>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Progress</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Productivity</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Guide</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Advice</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4 max-[850px]:w-full'>
                            Receive customized exercise programs designed to target your specific needs and aid in your rehabilitation process. Our physiotherapists will guide you through the exercises and provide ongoing support and adjustments as required.
                            </div>
                    </div>
                </div>
                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 max-[600px]:px-6 max-[600px]:rounded-[30px] max-[510px]:py-2 '>03.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold  max-[1050px]:text-xl  max-[850px]:px-4 max-[510px]:text-xs'>Rehabilitation:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between max-[850px]:flex-col max-[850px]:gap-4'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2 max-[850px]:w-full'>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Progress</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Productivity</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Guide</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Advice</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4 max-[850px]:w-full'>
                            Whether you're recovering from surgery, a sports injury, or an accident, our online rehabilitation services can support your recovery journey. Our physiotherapists will design a personalized rehabilitation program to restore your strength, mobility, and function.
                            </div>
                    </div>
                </div>

                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 max-[600px]:px-6 max-[600px]:rounded-[30px] max-[510px]:py-2 '>04.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold  max-[1050px]:text-xl  max-[850px]:px-4 max-[510px]:text-xs '>Pain Management:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between max-[850px]:flex-col max-[850px]:gap-4'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2 max-[850px]:w-full'>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Progress</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Productivity</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Guide</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Advice</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4 max-[850px]:w-full'>
                            We specialize in helping individuals manage and alleviate pain resulting from various musculoskeletal conditions, injuries, or chronic issues. Our team will employ a combination of therapeutic techniques, exercises, and lifestyle modifications to help reduce your pain and improve your quality of life.
                            </div>
                    </div>
                </div>

                <div className='w-full flex-shrink-0' >
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className='border-[2px] border-[#252733] flex justify-center items-center rounded-[79px] text-4xl px-16 py-5 max-[600px]:px-6 max-[600px]:rounded-[30px] max-[510px]:py-2 '>05.</div>
                        <div className='text-white text-4xl bg-blue-700 px-28 py-5 rounded-[79px] uppercase font-semibold  max-[1050px]:text-xl  max-[850px]:px-4 max-[510px]:text-xs '>Progress Monitoring:</div>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#1E2538] my-10 py-8 flex justify-between max-[850px]:flex-col max-[850px]:gap-4'>
                            <div className='flex flex-wrap w-1/4 gap-3 mt-2 max-[850px]:w-full'>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Progress</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Productivity</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Guide</p>
                            <p className='text-gray-800 text-[19px] font-medium border-[1px] border-[#5D5F6C] px-2 py-2 rounded-2xl h-10'>Advice</p>
                            </div>
                            <div className='font-medium text-lg text-[#252733]  w-2/4 max-[850px]:w-full'>
                            Through regular virtual check-ins, we will monitor your progress, make necessary adjustments to your treatment plan, and provide ongoing support to ensure you're on track to achieving your goals.
                            </div>
                    </div>
                </div>

            </div> 
            </div>
      
    </Cadr>
  )
}