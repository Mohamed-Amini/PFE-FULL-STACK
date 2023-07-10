import React, { useState } from "react";

const AppointmentReport = () => {
  const [report, setReport] = useState("");

  const handleSubmit = () => {
    // handle submission of the report
    console.log("Submitting report:", report);
    // reset the report state
    setReport("");
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl w-11/12 md:w-3/4 :w-1/2 max-w-7xl mx-auto p-8">
        <div className=" text-center">
          <h1 className="text-gray-700 text-3xl font-bold">Report for appointment</h1>
          <h6 className="text-gray-700 text-xs font-bold p-5 "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sequi ad, vitae minima necessitatibus ea error itaque voluptatibus adipisci illum! Consequatur quidem dolorem doloremque facere veritatis molestias necessitatibus harum alias!</h6>
        </div>
        <div className="flex flex-col space-y-6 mt-8 md:flex-row md:space-x-4">
          <div className="flex flex-col md:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Appointment:</label>
              <span className="text-gray-400">4</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Appointment Date:</label>
              <span className="text-gray-400">2018-01-01</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Patient Name:</label>
              <span className="text-gray-400">Mohamed Test</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Patient Birthday:</label>
              <span className="text-gray-400">1977-01-01</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Patient Age:</label>
              <span className="text-gray-400">46 years old</span>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 space-y-6">
            <label className="text-gray-700 font-medium mb-2">Report:</label>
            <textarea className="w-full rounded-xl bg-gray-100 text-gray-700  p-2" value={report} onChange={(e) => setReport(e.target.value)} />
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentReport;



