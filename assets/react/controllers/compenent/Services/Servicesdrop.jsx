import React from 'react'
import Cadr from '../Ui/Cadr'
import { FaTimes } from "react-icons/fa";
import plus from '../../images/plus.png';
import { useState } from 'react';

export default function Servicesdrop() {
  const [selected,setselected] = useState(null)  
  function toggle(i){
    if(i === selected){
      return setselected(null)
    }
    setselected(i)
  }
  const data =[
    {
      qestion:'Registration or Account Creation:',
      answer: 'You start by creating an account on the website. This may involve providing your personal information and contact details.',
    },
    {
      qestion:'Booking and Scheduling:',
      answer: 'Once registered, you can proceed to book an appointment for an online physiotherapy session. The website will typically provide a scheduling system that allows you to select a convenient date and time for your session.',
    },
    {
      qestion:'Online Consultation:',
      answer: 'At the scheduled time, you will connect with a physiotherapist through a secure online platform, such as video conferencing or telehealth software. The physiotherapist will assess your condition, discuss your concerns, and ask questions to gather more information.',
    },
    {
      qestion:'Treatment Plan and Guidance:',
      answer: 'Based on the assessment, the physiotherapist will develop a personalized treatment plan for you. They may provide exercises, stretches, or other therapeutic interventions specific to your condition or goals. They will guide you through the recommended techniques, ensuring you understand and perform them correctly.',
    },
    {
      qestion:'Follow-up and Progress Monitoring:',
      answer: 'After the initial session, the website may offer follow-up appointments to monitor your progress and make any necessary adjustments to your treatment plan. These follow-up sessions allow you to discuss any concerns, ask questions, and receive ongoing guidance and support from the physiotherapist.',
    },
    {
        qestion:'Educational Resources and Support:',
        answer: 'At KINESIS we provide educational resources, such as articles, videos, or interactive tools, to help you understand your condition better and maintain your progress between sessions. We also offer additional support channels where you can reach out to the other physiotherapist.',
      },
  ]
  return (
    <Cadr>
    <div className='w-full bg-[#FFFFFF] px-10 py-10 rounded-[20px]  h-auto flex justify-between'>
            <h1 className='font-medium text-3xl'>SERVICES</h1>
            <div className='w-[80%]'>
              <p className='font-semibold text-3xl w-2/4 mb-24'>To helping you achieve your health goals from the comfort of your own home. Here are some of the services we offer:</p>
              <button className=" w-[165px] h-[45px] bg-blue-600 rounded-[24.75px] text-white text-[18px] font-medium "> Spacially </button>
              <button className=" w-[165px] h-[45px] bg-slate-200 rounded-[24.75px] text-blue-600 text-[18px] font-medium ml-10"> Generally </button>

              <div className='w-full mb-3'>
                {data.map((iteme,i) => (
              <div className='border-[#5D5F6C] border-b-[1px] py-7'>
                <div className='flex justify-between mb-3'>
                      <h2 className='font-semibold text-2xl uppercase '>{iteme.qestion}</h2>
                    <div className={`w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer ${selected === i ?' bg-[#0046FF]':' border-[1px] border-[#5D5F6C]'}`} onClick={()=> toggle(i)}>
                     {selected !== i && <img src={plus} alt="" /> } 
                      {selected === i && <FaTimes className='text-white'></FaTimes> }
                    </div>

                </div>
                    <div className={`w-3/4 text-[#5D5F6C] font-normal text-lg mt-3 ${selected === i ?'shwo':' content'} `}>
                      {iteme.answer}
                    </div>
                  </div>
                ))}
            </div> 
            </div> 
            </div>
    </Cadr>
  )
}
