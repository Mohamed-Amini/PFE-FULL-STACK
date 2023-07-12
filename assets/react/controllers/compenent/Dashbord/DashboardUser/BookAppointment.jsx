import React from 'react';

export default function BookAppointment() {
  const doctors = [
    {
      name: 'Dr. John Smith',
      image: 'https://images.pexels.com/photos/8376339/pexels-photo-8376339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      service: 'Cardiology',
    },
    {
      name: 'Dr. Sarah Lee',
      image: 'https://images.pexels.com/photos/8376309/pexels-photo-8376309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      service: 'Dermatology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },
    {
      name: 'Dr. Lina See',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      service: 'Neurology',
    },

  ];
  return (
    <div className="flex flex-wrap h-screen  w-full justify-center">
      {doctors.map((doc, index) => (
        <div key={index} className="bg-white  w-72 h-1/4 rounded-xl shadow-lg p-3 m-4">
          <div className="mb-4 w-16 h-16 rounded-full">
            <img src={doc.image} alt={doc.name} className="w-full h-full object-contain  rounded-full" />
          </div>
          <h2 className="text-xl font-bold mb-2 ml-2">{doc.name}</h2>
          <p className="text-gray-600 text-lg mb-4 ml-2">{doc.service}</p>
          <button className="bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}