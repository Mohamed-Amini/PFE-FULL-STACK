import React, { useState } from 'react';
import { useEffect } from 'react';
import Inputwraper from '../../Ui/Inputwrapp';
import Input from '../../Ui/Input';

export default function SettingsEdite({email , password , firstname , lastName , specialization , phone}) {

  // const [firstName, setFirstName] = useState('Imane');
  // const [lastName, setLastName] = useState('Tanta');
  // const [email, setEmail] = useState('imane@gmail.com');
  // const [phone, setPhone] = useState('+212 628 657 219');
  // const [bio, setBio] = useState('Kinesitherapy Doctor');
  // const [dateBirth, setdateBirth] = useState('Kinesitherapy Doctor');
  // const [image, setimage] = useState(null);
  // const [isPersonalInfoEditable, setPersonalInfoEditable] = useState(false);

console.log(firstname)
  // useEffect(() => {
  //   // set data from back-end here
  //   // setBio('')
  //   // setEmail('')
  //   // setFirstName('')
  //   // setPhone('')
  //   // setdateBirth('')
  //   // setLastName('')
  // },[])









  // // funtion for images
  // const handlePhotoChange = (event) => {
  //   const file = event.target.files[0];
  //   // setSelectedPhoto(file);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setimage(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   // setSelectedFile(file);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setimage(reader.result);
  //     // setDataURL(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // function onChange(e){
  //   e.preventDefault()
  //   setPersonalInfoEditable(true)
  //   setBio('')
  //   setEmail('')
  //   setFirstName('')
  //   setPhone('')
  //   setdateBirth('')
  //   setLastName('')
  // }


  // function Canceled(e){
  //   e.preventDefault()
  //   setPersonalInfoEditable(false)
  //   // return old data
  //   // setBio('')
  //   // setEmail('')
  //   // setFirstName('')
  //   // setPhone('')
  //   // setdateBirth('')
  //   // setLastName('')
  // }
  // function Submited(e){
  //   // submit data to database
  //   e.preventDefault()
  //   setPersonalInfoEditable(false)
  //   const data ={
  //     firstName:firstName,
  //     lastName:lastName,
  //     phone:phone,
  //     email:email,
  //     dateBirth:dateBirth,
  //     bio:bio,
  //   }
  //   // return old data
  //   // setBio('')
  //   // setEmail('')
  //   // setFirstName('')
  //   // setPhone('')
  //   // setdateBirth('')
  //   // setLastName('')
  // }
console.log(email)


  return (
    <form className='w-[79%] h-full  rounded-xl py-4 mt-3  bg-white px-6 flex justify-between gap-6' method='post'>
    <div className="flex flex-col  gap-4  ">
      <div className="w-52 h-52 bg-[#F9F9F9] flex justify-center items-center rounded-full object-cover">            
          <img   style={{ maxWidth: '200px' }} className="w-full h-full rounded-full object-cover" />
      </div>
      <label  htmlFor='inputTag' className='cursor-pointer bg-[#252838] text-white w-36 text-center py-4 px-2 rounded-xl mx-auto'>
        + Add picture
        <input id="inputTag" type="file" accept="image/*"  className='hidden' />
      </label>
    </div>
    <div className='w-3/4'>
        <>
          <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">First name</label>
            <Input type='text' placeholder='First name'  name='doctor_profile[docFirstName]' className='w-full' value={firstname} ></Input>
          </Inputwraper>
          <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">last Name</label>
            <Input type='text' placeholder='lastName'  name='doctor_profile[docLastName]' className='w-full' value={lastName} ></Input>
          </Inputwraper>
          <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">Email</label>
            <Input type='email' placeholder='email'  name='doctor_profile[email]' className='w-full' value={email}  ></Input>
          </Inputwraper>
          <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">phone</label>
            <Input type='text' placeholder='phone'  name='doctor_profile[docPhoneNumber]' className='w-full' value={phone}></Input>
          </Inputwraper>
          <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">Password</label>
            <Input type='password' placeholder='Password'  name='doctor_profile[plainPassword]' className='w-full' value={password}></Input>
          </Inputwraper>
          {/* <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">Bio</label>
            <textarea name="Bio" id="" cols="30" rows="6"    className="outline-none  text-[#5A5A5D] border-[1px] border-[#CACACA] rounded-lg px-4 py-3"></textarea>
          </Inputwraper> */}
          <Inputwraper className='w-full  max-400px:w-full'>
            <label htmlFor="">specialization</label>
            <Input type='text' placeholder='specialization'  name='doctor_profile[specialization]' className='w-full' value={specialization}></Input>
          </Inputwraper>
          <div className="w-full text-right mt-5 ">
          <button className='bg-blue-500 text-white px-6 py-2 rounded-lg mt-4' type=''>Save</button>
          </div>
        </>
    </div>
  </form>
  );
}