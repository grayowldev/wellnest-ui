'use client'
import { useState } from 'react';

import AppointmentList from './components/AppointmentList';
import AppointmentForm  from './components/AppointmentForm';
import Calendar, { generateDate } from './components/Calendar';
import {Signup} from "@/app/views/Signup";

export default function Home() {
  const [appointments, setAppointments] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(null);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, { ...newAppointment, id: Date.now() }]);
  };


  return (
    <main className="container mx-auto p-4">
        <Signup />
      <h1 className="text-3xl font-bold mb-4">Appointment Scheduler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppointmentForm onAddAppointment={addAppointment} />
        <AppointmentList appointments={appointments} />
        <Calendar/>
      </div>
    </main>
  );
}
