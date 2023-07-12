import React from 'react'
import Settingsidebar from '../DashboardUser/Settingssidebar'
import MedicalReports from './MedicalReports'

export default function Medical1({Appointment}) {
  console.log(Appointment)
  return (
    <div className='w-full h-[90%] flex justify-between'>
      <MedicalReports Appointment={Appointment}></MedicalReports>
    </div>
  )
}