import React from 'react';
import DashDoc from './compenent/Dashbord/Dashborddocteur/DashDoc'
import { BrowserRouter as Router } from 'react-router-dom';

export default function dashboard ({username}) {
    console.log(username);
    const doctor = username
    return (
        <Router>
            <DashDoc doctor={doctor} ></DashDoc>
        </Router>
    );
}