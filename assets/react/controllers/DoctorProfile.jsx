import React from 'react'
import Settingsidebar from './compenent/Dashbord/Dashborddocteur/Settingsidebar'
import SettingEdite from './compenent/Dashbord/Dashborddocteur/SettingEdite'
import { BrowserRouter as Router } from 'react-router-dom'
export default function DoctorProfile() {
  return (
    <Router>
    <div className='w-full h-[90%] flex justify-between'>
      <Settingsidebar></Settingsidebar>
      <SettingEdite></SettingEdite>
    </div>
    </Router>
  )
}
