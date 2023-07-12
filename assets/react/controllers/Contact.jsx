import React from "react";
import Contact from './compenent/Contact/ContactComponent'
import Header from "./compenent/Header";
import Footer from "./compenent/Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default function () {
    return (
        <Router>
        <Header></Header>
        <Contact></Contact>
        <Footer></Footer>
        </Router>
    )   
}