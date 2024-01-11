"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import "./Calendar.css";
import { useRouter } from 'next/navigation';
import { NasaApiResponse } from '@/types/nasaApiTypes';
import { useAppState } from '@/context/AppStateContext';


export default function Calendar() {
    const { setApodData } = useAppState();
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(2024);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const router = useRouter();

    const changeMonth = (increment: number) => {
        setCurrentMonth((prevMonth) => (prevMonth + increment) % 12);
        setCurrentYear((prevYear) => currentMonth + increment > 11 ? prevYear + 1 : (currentMonth + increment < 0 ? prevYear - 1 : prevYear));
    };

    const handleDateClick = (day: number) => {
        const clickedDate = new Date(currentYear, currentMonth, day);
        const formattedDate = clickedDate.toISOString().split('T')[0];
    
        setSelectedDate(formattedDate);
    
        console.log('Fecha seleccionada:', formattedDate);
    
        const apiUrl = `/api/calendarApi?date=${formattedDate}`;
        console.log('URL para fetchApodData:', apiUrl);
    
        fetch(apiUrl)
            .then((response) => response.json())
            .then((apodData: NasaApiResponse) => {
                setApodData(apodData)
                router.push("/apod")
            })
            .catch((error: Error) => {
                console.error('Error al obtener datos de APOD:', error);
            });
    };
    

    const getDaysInMonth = () => {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        return { firstDay, lastDay };
    };

    const generateDays = () => {
        const { firstDay, lastDay } = getDaysInMonth();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(
                <span key={`prev-${i}`} className="px-1 text-gray-400 w-14 flex justify-center items-center">
                </span>
            );
        }

        for (let i = 1; i <= lastDay; i++) {
            days.push(
                <span
                    key={i}
                    onClick={() => handleDateClick(i)}
                    className={`px-1 w-14 flex justify-center items-center border ${i === 24 && currentMonth === 0
                        ? 'hover:border-slate-500 text-gray hover:text-slate-500'
                        : i === 25
                            ? ' text-black bg-white-500 rounded-2xl cursor-pointer shadow-md'
                            : 'hover:border-green-500 hover:text-green-500 cursor-pointer'
                        }`}
                >
                    {i < 10 ? `0${i}` : i}
                </span>
            );

            if ((i + firstDay) % 7 === 0) {
                days.push(<span key={`br-${i}`} className="w-full" />);
            }
        }

        return days;
    };



    return (
        <section>
            <section>
                <Image className='Bounce absolute top-10' src={"/assets/images/background/planets.webp"} width={400} height={400} alt='Planets'></Image>
                <Image className="absolute top-40" src={"/assets/images/background/meditatingastroboy.webp"} width={400} height={400} alt='Astroboy meditating'></Image>
            </section>
            <section className="message-container">
                <p className="astro-message">
                This is the Calendar section! 
                <br />Choose a day and discover the photo
                </p>
            </section>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='w-full max-w-lg p-6 mx-auto bg-white rounded-2xl overflow-hidden'>
                    <div className="flex justify-between pb-4">
                        <div className="-rotate-90 cursor-pointer" onClick={() => changeMonth(-1)}>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="uppercase text-sm font-semibold text-gray-600">{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} - ${currentYear}`}</span>
                        <div className="rotate-90 cursor-pointer" onClick={() => changeMonth(1)}>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
                    </div>
                    <div className="flex justify-between font-medium text-sm pb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="flex-none w-14 h-5 px-3 border rounded-sm flex justify-center items-center border-green-500 text-green-500 shadow-md">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between font-medium text-sm pb-2 flex-wrap">
                        {generateDays()}
                    </div>
                </div>
            </div>
        </section>
    );
}
