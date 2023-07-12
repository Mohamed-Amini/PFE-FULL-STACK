import React from 'react'
import Settingssidebar from './Settingssidebar'
import BookAppointment from './BookAppointment'
export default function Privacy() {
  return (
    <div className='w-full h-[90%] flex justify-between'>
      <Settingssidebar></Settingssidebar>
      <BookAppointment></BookAppointment>
    </div>
  )
}

