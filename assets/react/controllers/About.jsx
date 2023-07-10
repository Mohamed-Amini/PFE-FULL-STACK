import React from 'react'
import Header from './compenent/Header'
import Footer from './compenent/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import Aboutcomp from './compenent/About/Aboutcomp';

export default function About() {
  return (
    <>
    <Router>
    <Header></Header>
    <Aboutcomp></Aboutcomp>
    <Footer></Footer>
    </Router>
    </>
  )
}
