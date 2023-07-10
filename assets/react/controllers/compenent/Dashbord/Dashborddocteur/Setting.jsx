import React from 'react'
import Settingsidebar from './Settingsidebar'
import SettingEdite from './SettingEdite'
export default function Setting() {
  return (
    <div className='w-full h-[90%] flex justify-between'>
      <Settingsidebar></Settingsidebar>
      <SettingEdite></SettingEdite>
    </div>
  )
}
