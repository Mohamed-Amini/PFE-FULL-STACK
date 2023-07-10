import React from 'react';

export default function Requests1() {
  return (
    <>
<div className="flex justify-center items-center">
  <div className="w-screen h-[250px] bg-gradient-to-b from-violet-400 to-violet-400 rounded-3xl mt-[30px] ml-[5px] flex flex-col justify-center">
    <h2 className="text-white text-[24px] font-semibold  px-5 ">See your latest</h2>
    <h1 className="text-white text-[48px] font-semibold px-5 w-80 ">Requests & Patients...</h1>
  </div>
  <div className="w-[700px] h-[258px] bg-white rounded-3xl ml-[65px] mt-[30px]"></div>
</div>


    <div className="flex w-full">
      <table className="w-full h-[650px] bg-white rounded-3xl mt-3 px-5 ">
        <div className=" w-[70%] flex text-gray-500 text-[18px] font-semibold justify-between px-16 py-2">
          <p>Patients</p>
          <p>Date</p>
          <p>Status</p>
        </div>
          <div className='w-[98%] mx-auto flex justify-between px-11 bg-slate-100 rounded-[26.25px] py-2 my-4 items-center'>
            <div className='flex gap-2 items-center'>
          <img className='inline rounded-full w-8  shadow-md' src="https://picsum.photos/seed/100/200" alt="" />
              <p>Full name</p>
            </div>
              <p>2018-01-01 00:00:00</p>
              <p className='text-[#DE4444]'>The patient did not pay</p>
              <button className='bg-[#1B53F5] text-white px-6 py-2 rounded-3xl'>Start Call</button>
          </div>
          <div className='w-[98%] mx-auto flex justify-between px-11 bg-slate-100 rounded-[26.25px] py-2 my-4 items-center'>
            <div className='flex gap-2 items-center'>
          <img className='inline rounded-full w-8  shadow-md' src="https://picsum.photos/seed/100/200" alt="" />
              <p>Full name</p>
            </div>
              <p>2018-01-01 00:00:00</p>
              <p >Paid</p>
              <button className='bg-[#1B53F5] text-white px-6 py-2 rounded-3xl'>Start Call</button>
          </div>
        </table>
      </div>
      
    </>
  );
}