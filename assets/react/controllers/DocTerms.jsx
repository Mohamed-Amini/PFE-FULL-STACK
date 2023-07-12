import React from "react";
import DocTerms from '../controllers/compenent/Dashbord/Dashborddocteur/Privacy1'
import SideBar from '../controllers/compenent/Dashbord/Dashborddocteur/SideBar'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Settingsidebar from '../controllers/compenent/Dashbord/Dashborddocteur/Settingsidebar'
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
export default function DashbordUi() {
    const [width,setwidth] = useState(false)
    const [name,setname] = useState('Dashboard')
    function toggle() {
        if(width === true){
            setwidth(false)
            console.log(width)
        }else{
            setwidth(true)
            console.log(width)
        }
    }

    
  return (
    <Router>
    <div className='w-full flex h-[1100px] bg-[#252838] relative'>
        {!width && <SideBar></SideBar>}
        <div className={`h-[95%] bg-[#E1E4EC] absolute bottom-2 right-2 rounded-xl py-3 px-3 ${!width ? 'w-[92%] ':'w-[98%]'}`}>
            <div className='w-full bg-[#FFFFFF] px-4 py-2 flex justify-between rounded-full'>
                <div className='flex items-center gap-5'>
                    <div className='cursor-pointer' onClick={toggle}>
                    <MenuIcon></MenuIcon>
                    </div>
                    <p className='text-[#3E4152] font-semibold text-3xl'>Setting</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p>Name user</p>
                    <div className='h-10 w-10 rounded-full border-[1px] border-[#5D5F6C] flex justify-center items-center'>
                        <NotificationsIcon className='text-[#5D5F6C]'></NotificationsIcon>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-[#D9D9D9]'></div>
                </div>
    </div>
    <div className='w-full h-[90%] flex justify-between'>
      <Settingsidebar></Settingsidebar>
      <DocTerms></DocTerms>
    </div>
        </div>
    </div>
    </Router>
  )
}