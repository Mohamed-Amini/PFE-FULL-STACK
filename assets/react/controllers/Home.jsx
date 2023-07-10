import React from 'react'
import Header from './compenent/Header'
import Homecompenet from './compenent/Home/Homecompenet'
import Footer from './compenent/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Router>
    <Header></Header>
    <Homecompenet></Homecompenet>
    <Footer></Footer>
    </Router>
    </>
  )
}
