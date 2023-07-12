import React from 'react'
import SideBar from './compenent/Dashbord/Dashborddocteur/SideBar'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect , useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
export default function DashbordUi({ appointments, jitsiDomain }) {
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
                    <p className='text-[#3E4152] font-semibold text-3xl'>Request && Patiens ... </p>
                </div>
                <div className='flex items-center gap-3'>
                    <p>Name user</p>
                    <div className='h-10 w-10 rounded-full border-[1px] border-[#5D5F6C] flex justify-center items-center'>
                        <NotificationsIcon className='text-[#5D5F6C]'></NotificationsIcon>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-[#D9D9D9]'></div>
                </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="w-screen h-[250px] bg-gradient-to-b from-violet-400 to-violet-400 rounded-3xl mt-[30px] ml-[5px] flex flex-col justify-center">
          <h2 className="text-white text-[24px] font-semibold px-5 ">See your latest</h2>
          <h1 className="text-white text-[48px] font-semibold px-5 w-80 ">Appointments...</h1>
        </div>
        <div className="w-[700px] h-[258px] bg-white rounded-3xl ml-[65px] mt-[30px]"></div>
      </div>

      {appointments.length > 0 ? (
  <table className="w-full h-[650px] bg-white rounded-3xl mt-3 px-5">
    <thead>
      <tr className="w-full flex text-gray-500 text-[18px] font-semibold justify-between px-16 py-2">
        <th className="w-1/4">Patient</th>
        <th className="w-1/4">Date</th>
        <th className="w-1/4">Status</th>
        <th className="w-1/4"></th>
      </tr>
    </thead>
    <tbody>
      {appointments.map((appointment) => (
        <tr
          key={appointment.id}
          className="w-full mx-auto flex justify-between px-11 bg-slate-100 rounded-[26.25px] py-2 my-4 items-center"
        >
          <td className="w-1/4">
            <p>{appointment.fullName ?? 'unknown'}</p>
          </td>
          <td className="w-1/4">{new Date(appointment.appointmentDate).toLocaleString()}</td>
          <td className="w-1/4">
            {appointment.stripePayment ? (
              <span>Paid</span>
            ) : (
              <span style={{ color: 'red' }}>The patient did not pay</span>
            )}
          </td>
          <td className="w-1/4">
            {appointment.stripePayment && (
              <a href={`/doctor/start_call/${appointment.id}`} className="btn btn-primary btn-start-call">
                Start Call
              </a>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p className="text-center mt-5">No appointments found.</p>
)}

      <script src="https://meet.jit.si/external_api.js"></script>
      <script>
        {`const token = window.location.pathname.match(/\\w{32}/)[0];
        const options = {
          roomName: 'JitsiMeetApiExample',
          width: 700,
          height: 700,
          jwt: token,
          configOverwrite: {
            maxNumberOfParticipants: 2,
            disableInviteFunctions: true,
          },
        };
        const api = new JitsiMeetExternalAPI('${jitsiDomain}', options);
        const meetLinks = document.querySelectorAll('.bg-[#1B53F5]');
        meetLinks.forEach((link) => {
          link.addEventListener('click', () => {
            api.executeCommand('join');
          });
        });`}
      </script>
        </div>
      
    </div>
    </Router>
  )
}

