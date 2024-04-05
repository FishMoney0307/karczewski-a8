import React from 'react'
import './stylish.css'
import { useState, useEffect } from 'react';

export default function Genres() {
    const [m, setm] = useState('');

    async function fetchGenres() {
        const g = `genre`;
        const count = 5;
        const url = `https://binaryjazz.us/wp-json/genrenator/v1/${g}/${count}`;

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error generating genres.');
            }
            const data = await res.json();
            let results = `The genres you generated are: `;
            for (let i = 0; i < count; i++) {
                if (i === 0) {
                    results = results + data[i];
                } else {
                    results = results + `, ` + data[i];
                }
            }
            setm(results);
        } catch (error) {
            setm(error.message);
        }
    }

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <div>
            <h2>{m}</h2>
        </div>
    )
}