'use client'
import Calendar from "@/app/components/Calendar";
import {useState} from "react";

export const BookingForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableDates, setAvailableDates] = useState([
        {
            month: 8,
            days: 5,
            year: 2024,
            time: []
        },
        {
            month: 8,
            days: 13,
            year: 2024,
            time: []
        },
        {
            month: 8,
            days: 16,
            year: 2024,
            time: []
        },
        {
            month: 8,
            days: 17,
            year: 2024,
            time: []
        },
        {
            month: 8,
            days: 18,
            year: 2024,
            time: [
                {
                    h: 7,
                    m: 30
                },
                {
                    h: 8,
                    m: 0
                },
                {
                    h: 8,
                    m: 30
                },
                {
                    h: 9,
                    m: 0
                }
            ]
        },
        {
            month: 8,
            days: 19,
            year: 2024,
            time: []
        }
    ]);

    return (
        <div className={`w-full`}>
            <form>
                <div className={`w-fit`}>
                    <h1>Date: {selectedDate?.toDate().toDateString()}</h1>
                    <div className={`grid grid-cols-2 md:grid-cols-2 gap-4`}>
                        <div className={`border-2 p-2 rounded-2xl mt-3 w-full`}>
                            <Calendar
                                setSelectedDate={setSelectedDate}
                                availableDates={availableDates}
                            />
                        </div>
                        <div>
                            {availableDates?.find(d => d.year === selectedDate?.year() && d.month === selectedDate?.month() && d.days === selectedDate?.date())?.time?.map((time, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`flex border-2 p-5 rounded-2xl mt-3 justify-center`}>
                                        {time.h}:{time.m.toString().padStart(2, '0')} {time.h < 12 ? 'am' : 'pm'}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>


            </form>
        </div>
    )
}