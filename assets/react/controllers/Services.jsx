import React from 'react'
import Header from './compenent/Header'
import Footer from './compenent/Footer'
import ServicesComponent from './compenent/Services/ServicesComponent'
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default function Services() {
  return (
    <>
    <Router>
    <Header />
    <ServicesComponent />
    <Footer/>
    </Router>
    </>
  );
}