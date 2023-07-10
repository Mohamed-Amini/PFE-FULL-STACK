import React from 'react'
import Settingsidebar from './Settingsidebar'
import PrivacyAndTerms1 from './PrivacyAndTerms1'

export default function Setting() {
  return (
    <div className='w-full h-[90%] flex justify-between'>
      <Settingsidebar></Settingsidebar>
      <PrivacyAndTerms1></PrivacyAndTerms1>

    </div>
  )
}