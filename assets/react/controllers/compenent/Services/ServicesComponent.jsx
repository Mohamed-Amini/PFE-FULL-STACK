import React from 'react'
import Pic1 from './Pic1'
import Pic2 from './Pic2'
import Servicesdrop from './Servicesdrop'
import Pic3 from './Pic3'
import { BrowserRouter as Router } from 'react-router-dom'



export default function ServicesComponent() {
  return (
    <div>
        <Pic1></Pic1> 
        <Pic2></Pic2>
        <Servicesdrop></Servicesdrop>
        <Pic3></Pic3>


    </div>
  )
}