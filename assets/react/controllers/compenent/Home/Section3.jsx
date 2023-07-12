import React, { useState, useEffect } from 'react';
import Cadr from '../Ui/Cadr';

export default function Section3() {
  const [expertDoctors, setExpertDoctors] = useState(10);
  const [satisfiedClients, setSatisfiedClients] = useState(15);
  const [websiteVisitors, setWebsiteVisitors] = useState(20);

  useEffect(() => {
    // Start the counter
    const intervalId = setInterval(() => {
      if (expertDoctors < 172) {
        setExpertDoctors(expertDoctors => expertDoctors + 1);
      }
      if (satisfiedClients < 2500) {
        setSatisfiedClients(satisfiedClients => satisfiedClients + 10);
      }
      if (websiteVisitors < 15000) {
        setWebsiteVisitors(websiteVisitors => websiteVisitors + 100);
      }
    }, 1000);

    
    return () => clearInterval(intervalId);
  },);

  return (
    <Cadr className='h-[1000px]'>
      <div className='h-full Section3 relative rounded-[20px]'>
        <div className='min-[700px]:absolute w-full min-[700px]:h-1/2 min-[700px]:bottom-0 Section3dev  rounded-b-[20px] py-10 text-center h-full'>
          <h1 className='text-[#FFFFFF] font-medium text-xl w-2/4 text-center mx-auto mt-10 max-[700px]:w-full max-[700px]:text-3xl max-[700px]:px-3 '>
            The Ideal place for passionate physiotherapists whose main goal is to provide the patient with an empathic and holistic approach.
          </h1>
          <div className='w-[85%] flex justify-between mx-auto py-10 my-10 max-[700px]:flex-col max-[700px]:gap-9'>
            <div>
              <h1 className='font-semibold text-5xl text-[#FFFFFF] mb-2'>{expertDoctors}+</h1>
              <p className='font-light text-lg text-[#FFFFFF]'>Expert Doctors</p>
            </div>
            <div>
              <h1 className='font-semibold text-5xl text-[#FFFFFF] mb-2'>{satisfiedClients}+</h1>
              <p className='font-light text-lg text-[#FFFFFF]'>Satisfied Clients</p>
            </div>
            <div>
              <h1 className='font-semibold text-5xl text-[#FFFFFF] mb-2'>{websiteVisitors}+</h1>
              <p className='font-light text-lg text-[#FFFFFF]'>Website Visitors</p>
            </div>
          </div>
          {/* <button className='bg-[#FFFFFF] px-14 py-2 rounded-2xl'>More</button> */}
        </div>
      </div>
    </Cadr>
  );
}
