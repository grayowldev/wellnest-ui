'use client'

import Calendar from "@/app/components/Calendar";
import {useState} from "react";

export default function BookingPage() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableDates, setAvailableDates] = useState([]);
    return (
        <div>
            <h1>Booking Page</h1>
            <div>
                <Calendar
                    availableDates={availableDates}
                    setSelectedDate={setSelectedDate}
                />

            </div>

        </div>
    )
}