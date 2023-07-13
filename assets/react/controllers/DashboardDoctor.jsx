import React from 'react';
import DashDoc from './compenent/Dashbord/Dashborddocteur/DashDoc'
import { BrowserRouter as Router } from 'react-router-dom';

export default function dashboard (props) {

    const data = props
    return (
        <Router>
            <DashDoc data={data}></DashDoc>
        </Router>
    );
}