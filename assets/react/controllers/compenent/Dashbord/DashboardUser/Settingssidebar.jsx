import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Settingsidebar(props) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  }



  return (
    <div className='bg-[#FFFFFF] w-[20%] h-[830px] rounded-xl py-4 mt-3 flex flex-col items-center'>
      <h1 className='font-semibold text-[30px] font-sans text-[#5F6271] text-center'>My Account</h1>
      <div className='px-10 mt-11 flex flex-col gap-10'>
        <Link to='/Dashboard/UserSettings' className={`font-sans font-medium text-base cursor-pointer ${selected === 0 ? 'text-[#1B53F5]' : ''}`} onClick={() => handleClick(0)}>My Profile</Link>
        <Link to='/Dashboard/Book' className={`font-sans font-medium text-base cursor-pointer ${selected === 1 ? 'text-[#1B53F5]' : ''}`} onClick={() => handleClick(1)}>Book an appointment</Link>
        <Link to='/Dashboard/Privacy' className={`font-sans font-medium text-base cursor-pointer ${selected === 2 ? 'text-[#1B53F5]' : ''}`} onClick={() => handleClick(2)}>Privacy & Terms</Link>
        <Link to='/Login/docteur' className={`text-[#ff2e2e] font-sans font-medium text-base cursor-pointer ${selected === 2 ? 'text-[#ff2e2e]' : ''}`} onClick={() => handleClick(2)}>Sign Out</Link>
      </div>
    </div>
  )
}