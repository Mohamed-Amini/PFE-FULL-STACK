import React from 'react'
import Cadr from '../Ui/Cadr'
import { FaTimes } from "react-icons/fa";
import plus from '../../images/plus.png';
import { useState } from 'react';

export default function Fandqsec() {
  const [selected,setselected] = useState(null)  
  function toggle(i){
    if(i === selected){
      return setselected(null)
    }
    setselected(i)
  }
  const data =[
    {
      qestion:'Who is a physiotherapist for ?',
      answer: 'Physiotherapists are required to treat a varied clientele, both in terms of profile and age. Physiotherapy is now essential for anyone who leaves the hospital after a serious illness such as a vascular accident or a heavy surgery.In addition to helping the patient in the recovery of his bodily functions, the physiotherapist also allows him to regain confidence in his abilities and progress.',
    },
    {
      qestion:'How do you organise a first session ?',
      answer: 'When we welcome a patient, we are focused on making him comfortable. We then ask questions to assess the problem, and listen carefully to his description of his symptoms. Finally, we explain the treatment we want to provide, with the number of sessions, their frequency, and the purpose. We also take the time to explain the exercises to do between each session.',
    },
    {
      qestion:'How do you perform a diagnostic assessment ?',
      answer: 'It starts with an interview with the patient to understand his medical history, followed by a visual assessment. This assessment allows us to detect wounds, scars, cysts, and more generally any clues that may appear on the patient’s skin. We then perform a palpatory assessment to get an idea of his mobility, then an examination of trophicity and circulation.',
    },
    {
      qestion:'How do you choose the appropriate medical approach ?',
      answer: 'It all depends on why the patient is seeing. In the case of neurological diseases, for example, we always prefer passive techniques, such as stretching and massages. During trauma, we focus on active techniques, with physical and muscular exercises to facilitate rehabilitation. Physiotherapy techniques are also used for respiratory problems.',
    },
    {
      qestion:'What is your relationship with your patients ?',
      answer: 'Our job is not just to massage or help massage and manipulate bodies. We also have a counselling role because we want patients to take ownership of the rehabilitation process. We give them recommendations to take back the sport, to move better, to correct their posture, etc. Our greatest satisfaction is to see our customers getting better and be proud of their progress!',
    },
  ]
  return (
    <Cadr>
    <div className='w-full bg-[#FFFFFF] px-10 py-10 rounded-[20px]  h-auto flex justify-between'>
            <h1 className='font-medium text-3xl'>FAQ</h1>
            <div className='w-[80%]'>
              <p className='font-semibold text-3xl w-[350px] mb-24'>Questions from our clients</p>
              <div className='w-full mb-3'>
                {data.map((iteme,i) => (
              <div key={i} className='border-[#5D5F6C] border-b-[1px] py-7'>
                <div className='flex justify-between mb-3'>
                      <h2 className='font-semibold text-2xl uppercase'>{iteme.qestion}</h2>
                    <div className={`w-10 h-10 flex justify-center  items-center rounded-full text-xl cursor-pointer ${selected === i ?' bg-[#0046FF]':' border-[1px] border-[#5D5F6C]'}`} onClick={()=> toggle(i)}>
                     {selected !== i && <img src={plus} alt="" /> } 
                      {selected === i && <FaTimes className='text-white'></FaTimes> }
                    </div>
                    {/* <div className='w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer bg-[#0046FF]'>
                      <FaTimes className='text-white'></FaTimes>
                    </div> */}
                </div>
                    <div className={`w-3/4 text-[#5D5F6C]  font-normal text-lg mt-3 ${selected === i ?'shwo':' content'} `}>
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
