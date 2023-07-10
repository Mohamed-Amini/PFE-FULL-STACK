import React from 'react'
import Settingssidebar from './compenent/Dashbord/DashboardUser/Settingssidebar'
import BookAppointment from './compenent/Dashbord/DashboardUser/BookAppointment'
import { BrowserRouter as Router } from 'react-router-dom'
export default function Privacy() {
  return (
    <Router>
    <div className='w-full h-[90%] flex justify-between'>
      <Settingssidebar></Settingssidebar>
      <BookAppointment></BookAppointment>
    </div>
    </Router>
  )
}