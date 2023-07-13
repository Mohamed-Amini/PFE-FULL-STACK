import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MedicalReports( {Appointment}) {

  const [reports, setReports] = useState([Appointment]);

  

  return (
    <div className="bg-gray-700 rounded-xl w-11/12 md:w-3/4 lg:w-1/2 max-w-7xl mx-auto p-8 mt-10 h-[90vh]">
      <div className="text-center mb-8">
        <h1 className="text-white text-3xl font-bold">Medical Reports</h1>
      </div>
      <div className="flex flex-col space-y-4">
        {reports.map((report) => (
          <a 
            href={`/doctor/medical/report/${report.id}`} 
            key={report.id} 
            className="bg-gray-800 hover:bg-gray-900 p-4 rounded-xl cursor-pointer no-underline">
              
              <div className="text-white font-medium">
                Appointment with {report.patientName} on {report.appointmentDate}    
              </div>  
          </a>  
        ))}
      </div>      
    </div>       
  );
};