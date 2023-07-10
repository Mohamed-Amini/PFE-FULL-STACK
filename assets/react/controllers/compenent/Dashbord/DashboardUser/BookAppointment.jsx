// import React from 'react';

// export default function BookAppointment() {

//   return (
//     <div className='w-[79%] h-[815px] rounded-xl py-4 mt-3 bg-white px-6'>
        
      
//     </div>
//   );
// }


import React, { useState } from "react";


const doctors = [
  {
    name: "Dr. John Smith",
    image: "https://images.pexels.com/photos/8376339/pexels-photo-8376339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Cardiology",
  },
  {
    name: "Dr. Sarah Lee",
    image: "https://images.pexels.com/photos/8376309/pexels-photo-8376309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Dermatology",
  },
  {
    name: "Dr. Lina See",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600",
    service: "Neurology",
  },
//   {
//     name: "Dr. Jane Doe",
//     image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600",
//     service: "Pediatrics",
//   },
];

const DoctorBox = ({ name, image, service }) => {
  return (
    <div className="w-full max-h-full md:w-1/3 px-8 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-3 ml-30 ">
        <div className="mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold mb-2 ml-2">{name}</h2>
        <p className="text-gray-600 text-lg mb-4 ml-2 ">{service}</p>
        <button className="bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full   ">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

const DoctorList = ({ doctors, searchTerm }) => {
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-15 my-8 ">
      <div className="flex flex-wrap px-2 ">
        {filteredDoctors.map((doctor) => (
          <DoctorBox {...doctor} key={doctor.name} />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div className="container mx-auto px-20 my-8">
        <input
          type="text"
          placeholder="Search for a doctor..."
          className="w-full px-5 py-2 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <DoctorList doctors={doctors} searchTerm={searchTerm} />
    </div>
  );
}

export default App;