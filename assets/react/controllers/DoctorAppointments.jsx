import React from 'react'
import SideBar from './compenent/Dashbord/Dashborddocteur/SideBar'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { useLocation } from 'react-router-dom';
import { useEffect , useState } from 'react';
import  Request  from './compenent/Dashbord/Dashborddocteur/Requests1'

import { BrowserRouter as Router } from 'react-router-dom';
export default function DashbordUi() {
    // const path = useLocation()
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
    // useEffect(() => {
    //    if(path.pathname === '/Dashbord'){
    //     setname('Dashboard')
    //    }
    //    if(path.pathname ==='/Dashbord/requests'){
    //     setname('Requests & Patients')
    //    }
    //    if(path.pathname ==='/Dashbord/Setting'){
    //     setname('Settings')
    //    }
       
    //     },[path])
    
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
                    <p className='text-[#3E4152] font-semibold text-3xl'>{name}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p>Name user</p>
                    <div className='h-10 w-10 rounded-full border-[1px] border-[#5D5F6C] flex justify-center items-center'>
                        <NotificationsIcon className='text-[#5D5F6C]'></NotificationsIcon>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-[#D9D9D9]'></div>
                </div>
    </div>
            <Request></Request>
        </div>
      
    </div>
    </Router>
  )
}
