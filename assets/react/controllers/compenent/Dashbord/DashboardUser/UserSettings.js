import React from 'react'
import Settingssidebar from './Settingssidebar'
import SettingsEdit from './SettingsEdit'
export default function Settings() {
  return (
    <div className='w-full h-[90%] flex justify-between'>
      <Settingssidebar></Settingssidebar>
      <SettingsEdit></SettingsEdit>
    </div>
  )
}