import React, { useState } from 'react'
import Settingssidebar from './compenent/Dashbord/DashboardUser/Settingssidebar'
import SettingsEdit from './compenent/Dashbord/DashboardUser/SettingsEdit'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Settings() {

  const [selected, setSelected] = useState(0);
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('Imane');
  const [lastName, setLastName] = useState('Tanta');
  const [email, setEmail] = useState('imane@gmail.com');
  const [phone, setPhone] = useState('+212 628 657 219');
  const [bio, setBio] = useState('Kinesitherapy Doctor');
  const [age, setage] = useState();
  const [country, setCountry] = useState('Morocco');
  const [cityState, setCityState] = useState('Agadir, Souss-Massa');
  const [isPersonalInfoEditable, setPersonalInfoEditable] = useState(false);
  const [isAddressEditable, setAddressEditable] = useState(false);
  const [isSaveSuccessful, setSaveSuccessful] = useState(false);

  const handleClick = (index) => {
    setSelected(index);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file)); 
  };

  const handleSavePersonalInfo = () => {
    setPersonalInfoEditable(falSettingssidebar9);
    setAddressEditable(false);
    setSaveSuccessful(true);
    

  };




  return (
    <Router>
    <div className='w-full h-screen flex justify-between'>
      <div className='bg-[#FFFFFF] w-[20%] h-full rounded-xl py-4 mt-3 flex flex-col'>
      <h1 className='font-semibold text-[30px] font-sans text-[#5F6271] text-center'>My Account</h1>
      <div className='px-10 mt-11 flex flex-col gap-10'>
        <Link to='/Dashbord/Setting' className={`font-sans font-medium text-base cursor-pointer ${selected === 0 ? 'text-[#1B53F5]' : ''}`} onClick={() => handleClick(0)}>My Profile</Link>
        <Link to='/Dashbord/Privacy1' className={`font-sans font-medium text-base cursor-pointer ${selected === 1 ? 'text-[#1B53F5]' : ''}`} onClick={() => handleClick(1)}>Privacy & Terms</Link>
        <Link to='/Login/docteur' className={`text-[#ff2e2e] font-sans font-medium text-base cursor-pointer ${selected === 2 ? 'text-[#ff2e2e]' : ''}`} onClick={() => handleClick(2)}>Sign Out</Link>
      </div>
    </div>
    <div className='w-[79%] h-full  rounded-xl py-4 mt-3  bg-white px-6'>
{isSaveSuccessful && (
  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative message-container flex justify-center items-center h-10">
    <strong className="font-bold">Success!</strong>
    <span className="block sm:inline"> Your changes have been saved.</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L16.586 10l-3.652 3.652a.999.999 0 1 0 1.414 1.414L18.414 11l-3.066-3.066z"/></svg>
    </span>
  </div>
)}
      <div className='border-[1px] boder-[#9DA7C4] rounded-3xl px-3 py-2 flex justify-between items-center'>
      <div className='flex gap-10'>
        <div className='w-20 h-20 rounded-full bg-slate-400'>
          <img src={image} className='w-full h-full rounded-full' alt='' />
        </div>
          <div>
            <p className='text-[#3D4253] font-semibold font-sans text-2xl'>
              {firstName} {lastName}
            </p>
            <p className='text-[#9DA7C4]'>{bio}</p>
            <p className='text-[#9DA7C4]'>{cityState}, {country}</p>
          </div>
        </div>

        <input
          type='file'
          accept='image/*'
          className='hidden'
          id='uploadImage'
          onChange={handleImageChange}
        />
        <button
          className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer'
          onClick={() => document.getElementById('uploadImage').click()}
        >
          Edit
        </button>
      </div>

      <div className='border-[1px] boder-[#9DA7C4] rounded-3xl px-10 py-8 my-5'>
        <div className='flex w-full justify-between'>
          <p className='text-[#3D4253] font-semibold font-sans text-2xl'>
            Personal Information
          </p>
          {isPersonalInfoEditable ? (
            <div>
              <button
                className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer mr-2'
                onClick={handleSavePersonalInfo}
              >
                Save
              </button>
              <button
                className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer'
                onClick={() => setPersonalInfoEditable(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer'
              onClick={() => setPersonalInfoEditable(true)}
            >
              Edit
            </button>
          )}
        </div>
        <div className='w-2/4 my-6'>
          <div className='w-full flex justify-between my-10'>
            <div>
              <p className='text-[#9DA7C4] font-sans mb-2'>First Name</p>
              {isPersonalInfoEditable ? (
                <input
                  type='text'
                  className='text-[#3D4253] border-b border-gray-300 pb-1 outline-none'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              ) : (
                <p className='text-[#3D4253]'>{firstName}</p>
              )}
            </div>
            <div>
              <p className='text-[#9DA7C4] font-sans mb-2'>Last Name</p>
              {isPersonalInfoEditable ? (
                <input
                  type='text'
                  className='text-[#3D4253] border-b border-gray-300 pb-1 outline-none'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              ) : (
                <p>{lastName}</p>
              )}
            </div>
          </div>
          <div className='w-full flex justify-between my-10'>
            <div>
              <p className='text-[#9DA7C4] font-sans mb-2'>Email address</p>
              {isPersonalInfoEditable ? (
                <input
                  type='email'
                  className='text-[#3D4253] border-b border-gray-300 pb-1 outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p>{email}</p>
              )}
            </div>
            <div>
              <p className='text-[#9DA7C4] font-sans mb-2'>Phone</p>
              {isPersonalInfoEditable ? (
                <input
                  type='text'
                  className='text-[#3D4253] border-b border-gray-300 pb-1 outline-none'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <p>{phone}</p>
              )}
            </div>
          </div>
          <div className='flex w-full justify-between'>
          <div>
            <p className='text-[#9DA7C4] font-sans mb-2'>Bio</p>
            {isPersonalInfoEditable ? (
              <textarea
                className='text-[#3D4253] border border-gray-300 pb-1 outline-none'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            ) : (
              <p>{bio}</p>
            )}
          </div>
          <div>
            <p className='text-[#9DA7C4] font-sans mb-2'>Dqte of birth</p>
            {isPersonalInfoEditable ? (
              <input
                className='text-[#3D4253] border border-gray-300 pb-1 outline-none'
                value={age}
                type="date"
                onChange={(e) => setage(e.target.value)}
              />
            ) : (
              <p>{age}</p>
            )}
          </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <button className='text-right border-[1px] boder-[#9DA7C4] py-2 px-5'>SAVE</button>
      </div>
    </div>
    </div>
    </Router>
  )
}