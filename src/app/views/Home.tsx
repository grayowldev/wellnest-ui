'use client'
import { useState } from 'react';

import AppointmentList from '../components/AppointmentList';
import AppointmentForm  from '../components/AppointmentForm';
import Calendar from '../components/Calendar';
import {BookingForm} from "@/app/components/forms/BookingForm";



export default function Home() {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            date: '2024-08-05',
            start_time: '09:00 am',
            end_time: '9:30 am',
            name: 'John Doe',
            host: 'Dr. Smith',
            location: 'https://zoom.com/john-doe',
            notes: 'Please bring your own snacks',
            subject: 'Initial consultation'
        },
        {
          id: 2,
          date: '2024-08-07',
          start_time: '10:00 am',
          end_time: '11:00 am',
          name: 'Jane Doe',
          host: 'Dr. Smith',
          location: 'https://zoom.com/jane-doe',
          notes: 'Please review the attached documents before the meeting',
          subject: 'Follow-up consultation'
        },
        {
          id: 3,
          date: '2024-08-10',
          start_time: '02:00 pm',
          end_time: '03:30 pm',
          name: 'Bob Johnson',
          host: 'Dr. Smith',
          location: 'https://zoom.com/bob-johnson',
          notes: 'Please come prepared with questions',
          subject: 'New patient consultation'
        },
        {
          id: 4,
          date: '2024-08-12',
          start_time: '11:30 am',
          end_time: '01:00 pm',
          name: 'Alice Brown',
          host: 'Dr. Smith',
          location: 'https://zoom.com/alice-brown',
          notes: 'Please bring a list of your medications',
          subject: 'Medication review'
        }
    ]);
    // const [selectedDate, setSelectedDate] = useState(null);

    const addAppointment = (newAppointment) => {
        setAppointments([...appointments, { ...newAppointment, id: Date.now() }]);
    };


    return (
        <main className="container mx-auto p-4">
            <BookingForm />
            <h1 className="text-3xl font-bold mb-4">Appointment Scheduler</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppointmentForm onAddAppointment={addAppointment} />

                <Calendar/>

            </div>
            <AppointmentList appointments={appointments} />
        </main>
    );
}