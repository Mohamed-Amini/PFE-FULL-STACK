import React, { useState } from 'react';
import { useEffect } from 'react';
import Inputwraper from '../controllers/compenent/Ui/Inputwrapp';
import Input from '../controllers/compenent/Ui/Input';
import Settingsidebar from './compenent/Dashbord/DashboardUser/Settingssidebar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function SettingsEdit({ firstname , lastname , email  , phone }) {
  
  const [firstNameValue, setFirstNameValue] = useState(firstname);

  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  return (
    <Router>
    <div className='flex justify-between'>
    <Settingsidebar />
    <form className='w-[79%] fixed right-0 h-full  rounded-xl py-4 mt-3  bg-white px-6 flex justify-between gap-6' method='post'>
      <div className="flex flex-col gap-4">
        <div className="w-52 h-52 bg-[#F9F9F9] flex justify-center items-center rounded-full object-cover">            
            <img   style={{ maxWidth: '200px' }} className="w-full h-full rounded-full object-cover" />
        </div>
        <label htmlFor='inputTag' className='cursor-pointer bg-[#252838] text-white w-36 text-center py-4 px-2 rounded-xl mx-auto'>
          + Add picture
          <input id="inputTag" type="file" accept="image/*"  className='hidden' />
        </label>
      </div>
      <div className='w-3/4'>
          <>
           <Inputwraper className='w-full max-400px:w-full'>
                <label htmlFor="">First name</label>
                <Input type='text' placeholder='First name' name='user_profile[firstName]' className='w-full' value={firstNameValue} onChange={handleFirstNameChange} />
              </Inputwraper>
              <Inputwraper className='w-full max-400px:w-full'>
                <label htmlFor="">Last name</label>
                <Input type='text' placeholder='Last name' name='user_profile[lastName]' className='w-full' value={lastname} />
              </Inputwraper>
              <Inputwraper className='w-full max-400px:w-full'>
                <label htmlFor="">Email</label>
                <Input type='email' placeholder='Email' name='user_profile[email]' className='w-full' value={email} />
              </Inputwraper>
              <Inputwraper className='w-full max-400px:w-full'>
                <label htmlFor="">Phone number</label>
                <Input type='text' placeholder='Phone number' name='user_profile[PhoneNumber]' className='w-full' value={phone} />
              </Inputwraper>
              {/* <Inputwraper className='w-full max-400px:w-full'>
                <label htmlFor="">Date of birth</label>
                <Input type='date' placeholder='Date of birth' name='user_profile[DateofBirth]' className='w-full' value={birthdate.date} />
              </Inputwraper> */}
              <Inputwraper className='w-full max-400px:w-full'>
                <label htmlFor="">New password</label>
                <Input type='password' placeholder='New password' name='user_profile[plainPassword]' className='w-full' />
              </Inputwraper>
            <button className='bg-black text-white px-6 py-2 rounded-lg mt-4' type=''>Save</button>
          </>
      </div>
    </form>
    </div>
    </Router>
  );
}