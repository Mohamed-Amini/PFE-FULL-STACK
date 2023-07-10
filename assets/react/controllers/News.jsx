import React from 'react'
import Header from './compenent/Header'
import NewsCompenent from './compenent/News/NewsCompenent'
import Footer from './compenent/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

export default function News() {
  return (
    <>
    <Router>
    <Header></Header>
    <NewsCompenent></NewsCompenent>
    <Footer></Footer>
    </Router>
    </>
  )
}
