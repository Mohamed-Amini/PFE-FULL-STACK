import React from 'react'
import Settingssidebar from './Settingssidebar'
import PrivacyAndTerms from './PrivacyAndTerms'
export default function Privacy() {
  return (
    <div className='w-full h-[90%] flex justify-between'>
      <Settingssidebar></Settingssidebar>
      <PrivacyAndTerms></PrivacyAndTerms>
    </div>
  )
}