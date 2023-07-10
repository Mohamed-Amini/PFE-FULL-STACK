import React from 'react'
import Settingssidebar from './compenent/Dashbord/DashboardUser/Settingssidebar'
import PrivacyAndTerms from './compenent/Dashbord/DashboardUser/PrivacyAndTerms'
import { BrowserRouter as Router } from 'react-router-dom'
export default function Privacy() {
  return (
    <Router>
    <div className='w-full h-[90%] flex justify-between'>
      <Settingssidebar></Settingssidebar>
      <PrivacyAndTerms></PrivacyAndTerms>
    </div>
    </Router>
  )
}