import React, { useState } from "react";
import { Link } from "react-router-dom";

const MedicalReports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      appointment: "4",
      date: "2018-01-01",
      patientName: "Mohamed Test",
      patientBirthday: "1977-01-01",
      patientAge: "46 years old",
      report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nibh nec velit consectetur, eu mattis tortor vulputate. Nam auctor nisl felis, id volutpat turpis gravida id. Sed euismod, justo in tristique consequat, sem augue ultrices elit, et venenatis odio augue a urna. Sed id lacus vel dolor elementum mattis vel at sapien. Donec eget purus faucibus, placerat quam ac, pretium ipsum. Nunc sit amet magna at odio placerat ullamcorper. Praesent euismod mauris quis elit mollis consequat. Donec euismod luctus enim ut vestibulum.",
    },
    {
      id: 2,
      appointment: "5",
      date: "2018-02-02",
      patientName: "John Doe",
      patientBirthday: "1980-01-01",
      patientAge: "43 years old",
      report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nibh nec velit consectetur, eu mattis tortor vulputate. Nam auctor nisl felis, id volutpat turpis gravida id. Sed euismod, justo in tristique consequat, sem augue ultrices elit, et venenatis odio augue a urna. Sed id lacus vel dolor elementum mattis vel at sapien. Donec eget purus faucibus, placerat quam ac, pretium ipsum. Nunc sit amet magna at odio placerat ullamcorper. Praesent euismod mauris quis elit mollis consequat. Donec euismod luctus enim ut vestibulum.",
    },
    {
      id: 3,
      appointment: "6",
      date: "2018-03-03",
      patientName: "Jane Smith",
      patientBirthday: "1990-01-01",
      patientAge: "33 years old",
      report: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nibh nec velit consectetur, eu mattis tortor vulputate. Nam auctor nisl felis, id volutpat turpis gravida id. Sed euismod, justo in tristique consequat, sem augue ultrices elit, et venenatis odio augue a urna. Sed id lacus vel dolor elementum mattis vel at sapien. Donec eget purus faucibus, placerat quam ac, pretium ipsum. Nunc sit amet magna at odio placerat ullamcorper. Praesent euismod mauris quis elit mollis consequat. Donec euismod luctus enim ut vestibulum.",
    },
  ]);

  return (
    <div className="bg-gray-700 rounded-xl w-11/12 md:w-3/4 lg:w-1/2 max-w-7xl mx-auto p-8 mt-10">
      <div className="text-center mb-8">
        <h1 className="text-white text-3xl font-bold">Medical Reports</h1>
      </div>
      <div className="flex flex-col space-y-4">
        {reports.map((report) => (
          <Link to={`/medical-reports/${report.id}`} key={report.id} className="bg-gray-800 hover:bg-gray-900 p-4 rounded-xl cursor-pointer">
            <div className="text-white font-medium">
              Appointment with {report.patientName} on {report.date}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MedicalReports;