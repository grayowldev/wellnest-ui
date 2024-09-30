// 'use client'
import dayjs from 'dayjs';
import React from 'react';
import {cn} from "@/app/components/cn";




const Calendar = ({availableDates, setSelectedDate}) => {
   const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className='w-96 h-96 grid grid-cols-7 text-sm'>
        {days.map((day, index) => {
            return (
                <div key={index}>
                    <h1 className={`h-14 grid place-content-center`}>{day}</h1>
                </div>
            )
        })}
        {generateDate().map(({date, isCurrentMonth, today}, index) => {
            // console.log("date:", date.now())
            const isAvailable = availableDates?.find(d => d.year === date.year() &&
                d.month === date.month() &&
                d.days === date.date())
            return (
                <div
                    key={index}
                    className={`h-14 border-t grid place-content-center`}
                    onClick={() => {
                        isAvailable && setSelectedDate(date)
                    }}>
                    <h1 className={cn(
                        isCurrentMonth ? "": "text-gray-400",
                        today ? "bg-blue-600 text-white" : "",
                        isAvailable ? "bg-gray-200" : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer"
                    )}>{date.date()}</h1>
                </div>
            )
        })}
    </div>
  );
};

export const generateDate = (
    month = dayjs().month(),
    year = dayjs().year()
) => {
    const firstDayOfMonth = dayjs().year(year).month(month).startOf("month")
    const lastDayOfMonth = dayjs().year(year).month(month).endOf("month")
    const dates = []

    let i = 0

    while (i < firstDayOfMonth.day()) {
        dates.push(
            {
                date: firstDayOfMonth.day(i),
                isCurrentMonth: false,
            })
        i++;
    }

    // dates for the month
    i = 1
    while (i <= lastDayOfMonth.date()) {
        dates.push({
            date: firstDayOfMonth.date(i),
            isCurrentMonth: true,
            today: firstDayOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
        })
        i++;
    }

    const remainder = 35 - dates.length

    i = lastDayOfMonth.date() + 1
    while (i <= lastDayOfMonth.date() + remainder) {
        dates.push({
            date: lastDayOfMonth.date(i),
            isCurrentMonth: false
        })
        i++;
    }




    return dates;


}

export default Calendar;
