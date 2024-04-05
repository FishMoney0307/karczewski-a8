import React from 'react'
import './stylish.css'
import { useState } from 'react';

export default function Weather() {
    const [m, setm] = useState('');

    async function fetchWeather() {
        const latitude = 40.2859;
        const longitude = -74.3486;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Weather data for Rowan University not found');
            }
            const data = await res.json();
            setm(`The current temperature at Manalapan, NJ is ${data.current_weather.temperature}°F.`);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    fetchWeather();

    return (
        <div>
            <h2>{m}</h2>
        </div>
    )
}