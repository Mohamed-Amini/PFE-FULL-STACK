import React, { useState } from 'react';

export default function SettingsEdite() {
    const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('Imane');
  const [lastName, setLastName] = useState('Tanta');
  const [email, setEmail] = useState('imane@gmail.com');
  const [phone, setPhone] = useState('+212 628 657 219');
  const [bio, setBio] = useState('Kinesitherapy Doctor');
  const [country, setCountry] = useState('Morocco');
  const [cityState, setCityState] = useState('Agadir, Souss-Massa');
  const [isPersonalInfoEditable, setPersonalInfoEditable] = useState(false);
  const [isAddressEditable, setAddressEditable] = useState(false);
  const [isSaveSuccessful, setSaveSuccessful] = useState(false);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file)); 
  };

  const handleSavePersonalInfo = () => {
    setPersonalInfoEditable(false);
    setSaveSuccessful(true);

  };

  const handleSaveAddress = () => {
    

    setAddressEditable(false);
    setSaveSuccessful(true);
    

  };
  

  

  return (
    <div className='w-[79%] h-[815px]  rounded-xl py-4 mt-3  bg-white px-6'>
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
          <img src={image} className='w-20 h-20 rounded-full' alt='Profile' />
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
        </div>
      </div>

      <div className='border-[1px] boder-[#9DA7C4] rounded-3xl px-10 py-8 my-5'>
        <div className='flex w-full justify-between'>
          <p className='text-[#3D4253] font-semibold font-sans text-2xl'>
            Address
          </p>
          {isAddressEditable ? (
            <div>
              <button
                className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer mr-2'
                onClick={handleSaveAddress}
              >
                Save
              </button>
              <button
                className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer'
                onClick={() => setAddressEditable(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className='border-[1px] boder-[#9DA7C4] inline px-4 py-1 rounded-3xl cursor-pointer'
              onClick={() => setAddressEditable(true)}
            >
              Edit
            </button>
          )}
        </div>
        <div className='w-2/4 my-6'>
          <div className='w-full flex justify-between my-10'>
            <div>
              <p className='text-[#9DA7C4] font-sans mb-2'>Country</p>
              {isAddressEditable ? (
                <input
                  type='text'
                  className='text-[#3D4253] border-b border-gray-300 pb-1 outline-none'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              ) : (
                <p className='text-[#3D4253]'>{country}</p>
              )}
            </div>
            <div>
              <p className='text-[#9DA7C4] font-sans mb-2'>City State</p>
              {isAddressEditable ? (
                <input
                  type='text'
                  className='text-[#3D4253] border-b border-gray-300 pb-1 outline-none'
                  value={cityState}
                  onChange={(e) => setCityState(e.target.value)}
                />
              ) : (
                <p>{cityState}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
