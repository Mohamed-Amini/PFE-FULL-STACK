// import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Settingsidebar from './compenent/Dashbord/DashboardUser/Settingssidebar';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';

// // Initialize localizer
// const localizer = momentLocalizer(moment);

// const Booking = ({ doctorsData }) => {
//   return (
//     <Router>
//       <div className='w-full flex py-2'>
//         <div className='w-3/12'>
//           <Settingsidebar />
//         </div>
//         <div className='w-9/12 py-5 mb-3'>
//           <div className='flex justify-center'>
//             <div className='flex flex-wrap h-screen  w-full justify-center'>
//               {doctorsData.map((doctor) => {
//                 let image = doctor.DocPicture || 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600';

//                 return (
//                   <div key={doctor.id} className='bg-white  w-72 h-1/4 rounded-xl shadow-lg p-3 m-4'>
//                     <div className='mb-4 w-16 h-16 rounded-full'>
//                       <img src={image}  className='w-full h-full object-contain  rounded-full' />
//                     </div>
//                     <h2 className='text-xl font-bold mb-2 ml-2'>{doctor.FullName}</h2>
//                     <p className='text-gray-600 text-lg mb-4 ml-2'>{doctor.Specialization}</p>
//                     <button className='bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full'>
//                       Book Appointment
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className='flex justify-center mt-5'>
//             <form name='appointment' method='post'>
//               <div id='appointment'>
//                 <div>
//                   <label htmlFor='appointment_doctor'>Doctor</label>
//                   <select id='appointment_doctor' name='appointment[doctor]'>
//                     <option value=''></option>
//                     {doctorsData.map((doctor) => (
//                       <option key={doctor.id} value={doctor.id}>
//                         {doctor.FullName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label htmlFor='appointment_appointmentDate' className='required'>
//                     Appointment date
//                   </label>
//                   <input
//                     type='datetime-local'
//                     id='appointment_appointmentDate'
//                     name='appointment[appointmentDate]'
//                     required='required'
//                     className='js-datetimepicker'
//                   />
//                 </div>
//               </div>
//               <button type='submit' className='btn btn-primary'>
//                 Book appointment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default Booking;

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Settingsidebar from './compenent/Dashbord/DashboardUser/Settingssidebar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Input from './compenent/Ui/Input';
import Inputwraper from './compenent/Ui/Inputwrapp';

// Initialize localizer
const localizer = momentLocalizer(moment);

const Booking = ({ doctorsData }) => {

    const [selectedDoctorId, setSelectedDoctorId] = useState('');

  const handleDoctorChange = (event) => {
    setSelectedDoctorId(event.target.value);
  };

  


  return (
    <Router>
      <div className='w-full flex py-2'>
        <div className='w-3/12'>
          <Settingsidebar />
        </div>
        <div className='w-9/12 py-5 mb-3'>
          <div className='flex justify-center'>
            <div className='flex flex-wrap h-screen  w-full justify-center'>
              {doctorsData.map((doctor, index) => {
                let image = doctor.DocPicture || 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600';

                return (
                  <div key={index} className='bg-white  w-96 h-4/4 rounded-xl shadow-lg p-3 m-4'>
                    <div className='mb-4 w-16 h-16 rounded-full'>
                      <img src={image}  className='w-full h-full object-contain  rounded-full' />
                    </div>
                    <h2 className='text-xl font-bold mb-2 ml-2'>{doctor.FullName}</h2>
                    <p className='text-gray-600 text-lg mb-4 ml-2'>{doctor.Specialization}</p>
                    <div className='flex justify-center'>
                      <form name='appointment'  method='post'>
                        <div id='appointment'>
                          {console.log(doctorsData)}
                          <Inputwraper className="hidden">
                            <label htmlFor='appointment_doctor'>Doctor</label>
                            <select id='appointment_doctor' name='appointment[doctor]' className='py-3 px-4 rounded-2xl'>
                              <option value={doctorsData?.find(d => d.FullName == doctor.FullName ).id} >{doctorsData?.find(d => d.FullName == doctor.FullName ).FullName}</option>
                              {/* // .map((doctor) => (
                              //   <option key={doctor.id} value={doctor.id}>
                              //     {doctor.FullName}
                              //   </option>
                              // ))
                              } */}
                            </select>
                                {console.log(doctor.FullName)}
                          </Inputwraper>
                          <Inputwraper>
                            <label htmlFor='appointment_appointmentDate' className='required'>
                              Appointment date
                            </label>
                            <Input
                              type='datetime-local'
                              id='appointment_appointmentDate'
                              name='appointment[appointmentDate]'
                              required='required'
                              className='js-datetimepicker'
                            />
                          </Inputwraper>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                          Book appointment
                        </button>
                      </form>
          </div>
                    {/* <button className='bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full'>
                      Book Appointment
                    </button> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Booking;