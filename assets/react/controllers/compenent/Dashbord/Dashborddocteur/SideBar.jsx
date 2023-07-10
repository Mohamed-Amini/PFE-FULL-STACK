import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function SideBar(props) {
  const path = useLocation()
console.log(path.pathname);
  const [selectedIcon, setSelectedIcon] = useState('/Dashbord');
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };
  useEffect(() => {
    setSelectedIcon(path.pathname);
    },[path])

  return (
    <div className={`w-[8%] h-screen bg-[#252838] flex flex-col items-center py-10 justify-between ${props.className}`}>
      <div className='h-16 w-16 rounded-full bg-[#D9D9D9]'></div>
      <div className='h-[200px] flex flex-col justify-between'>
        <Link to='/Dashbord'>
        <div
          className={`cursor-pointer bg-[#3C4053] px-6 py-2 rounded-xl ${
            selectedIcon === '/Dashbord' ? 'bg-blue-500' : ''
          }`}
          onClick={() => handleIconClick('home')}
        >
          <HomeIcon className='text-white' />
        </div>
          </Link>
        <Link to='/Dashbord/requests'>
        <div
          className={`cursor-pointer bg-[#3C4053] px-6 py-2 rounded-xl ${
            selectedIcon === '/Dashbord/requests' ? 'bg-blue-500' : ''
          }`}
          onClick={() => handleIconClick('/Dashbord/requests')}
        >
          <PersonAddAlt1Icon className='text-white' />
        </div>
        </Link>
        <Link to='/Dashbord/Setting'>
        <div
          className={`cursor-pointer bg-[#3C4053] px-6 py-2 rounded-xl ${
            selectedIcon === '/Dashbord/Setting' ? 'bg-blue-500' : ''
          }`}
          onClick={() => handleIconClick('setting')}
        >
          <SettingsIcon className='text-white' />
        </div>
        </Link>
      </div>
      <div
        className={`cursor-pointer bg-[#3C4053] px-6 py-2 rounded-xl ${
          selectedIcon === 'logout' ? 'bg-blue-500' : ''
        }`}
        onClick={() => handleIconClick('logout')}
      >
        <LogoutIcon className='text-white' />
      </div>
    </div>
  );
}