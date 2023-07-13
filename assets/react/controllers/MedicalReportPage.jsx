import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function AppointmentReport({ name, age, Appointmentid, birth, date }) {
  console.log(date.date, Appointmentid, name, age, birth.date);
  const [report, setReport] = useState("");

  const handleReportChange = (event) => {
    setReport(event.target.value);
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl w-11/12 md:w-3/4 :w-1/2 max-w-7xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-gray-700 text-3xl font-bold">Report for appointment</h1>
          <h6 className="text-gray-700 text-xs font-bold p-5">
    This is a report Page where the doctor must submit a appointment Report for the patient whom he treated or responded in a video call
          </h6>
        </div>
        <div className="flex flex-col space-y-6 mt-8 md:flex-row md:space-x-4">
          <div className="flex flex-col md:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Appointment:</label>
              <span className="text-blue-600 ">{Appointmentid}</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Appointment Date:</label>
              <span className="text-blue-600">{date.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Patient Name:</label>
              <span className="text-blue-600">{name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Patient Birthday:</label>
              <span className="text-blue-600">{birth.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium w-40">Patient Age:</label>
              <span className="text-blue-600">{age}</span>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 space-y-6">
            <form method="post">
              <label className="text-gray-700 font-medium mb-2">Submit Your Report Here  </label>
              <textarea
                rows="7"
                cols="60"
                className="w-full rounded-xl bg-gray-100 text-gray-700 p-2"
                name="m_report[Report]"
                value={report}
                onChange={handleReportChange}
              />
              <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-5">
              <a href={`/doctor/medical/reports`} className="text-blue-500 underline">
                Go back to appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}