import { useState } from 'react';
import React from 'react';

function Calendar({appointmentDate}) {

  console.log(appointmentDate)
  
  const dateappointment = new Date(appointmentDate)
  console.log(dateappointment);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [appointments, setAppointments] = useState([{ date:dateappointment , time: '12h-14h' }]);

  // Function to handle month change
  function handleMonthChange(event) {
    const newMonth = new Date(selectedMonth.getTime());
    newMonth.setMonth(event.target.value);
    setSelectedMonth(newMonth);
  }

  // Get the days in the selected month
  const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();

  // Create an array of weeks for the month
  const weeks = [];
  let currentWeek = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), i);
    currentWeek.push(date);
    if (date.getDay() === 6 || i === daysInMonth) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Get the current date
  const currentDate = new Date();

  // Function to handle day click
  function handleDayClick(date) {
    const appointment = appointments.find((app) => app.date.getTime() === date.getTime());
    if (appointment) {
      alert(`You have an appointment on ${date.toLocaleDateString()} from ${appointment.time}`);
    }
  }

  return (
    <div className="w-full px-4 py-3 bg-white rounded-3xl mt-10">
      <div className="flex justify-between mb-6 px-4 pt-5">
        <div className="text-lg font-medium text-gray-800">{selectedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <select className="px-7 py-2 text-white rounded-full bg-[#252733] shadow-md focus:outline-none" value={selectedMonth.getMonth()} onChange={handleMonthChange}>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-4 border-b-[1px] border-[#BBBFD1] pb-3">
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Sun</div>
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Mon</div>
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Tue</div>
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Wed</div>
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Thu</div>
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Fri</div>
          <div className="text-center text-sm font-medium text-[#000000] uppercase">Sat</div>
        </div>
        <div className="grid grid-cols-7 gap-4 pt-3">
          {weeks.map((week, i) => (
            <React.Fragment key={i}>
              {week.map((date, j) => {
                const appointment = appointments.find((app) => app.date.getTime() === date.getTime());
                return (
                  <div
                    key={j}
                    className={`px-4 py-2 text-center rounded-full cursor-pointer ${
                      date.getMonth() === selectedMonth.getMonth() ? (appointment ? 'bg-green-500 text-white' : ' text-[#000000]') : 'text-gray-800 cursor-default'
                    }`}
                    onClick={() => handleDayClick(date)}
                  >
                    {date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() ? (
                      <div className="text-sm font-medium">{date.getDate()}</div>
                    ) : (
                      date.getDate()
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;