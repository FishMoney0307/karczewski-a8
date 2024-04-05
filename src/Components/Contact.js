import React from 'react'
import './stylish.css';
import { useState } from  'react';

/*
function validate() {
    const n = document.getElementById("name").value;
    const e = document.getElementById("mail").value;
    const s = document.getElementById("subject").value;
    const m = document.getElementById("msg").value;

    let r;
    if (n === "" || e === "" || s === "" || m === "" || !isNaN(n) /*check for numbers i think?) {
        //im sure theres a better way to check if four vars are empty, but im fine with it being ugly
        r = "Please fill out all fields. No numbers in the name field.";
    }
    else {
        r = `Thank you for your response, ${n}! I will respond to you shortly at ${e}`;
    }
    
    r = "test";
    document.getElementById("response").innerHTML = r;
}
*/

/* Stolen from the react.dev website so is it really even stolen
    https://react.dev/learn/reacting-to-input-with-state */

export default function Contact () {
    const [n, setn] = useState('');
    const [e, sete] = useState('');
    const [s, sets] = useState('');
    const [m, setm] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    async function handleSubmit(ev) {
        ev.preventDefault();
        setError(null);
        setStatus('submitting');
        try {
            await submitForm(n, e, s, m);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }


    /* This makes me nauseous*/
    function handleTextareaChangeN(ev) {
        setn(ev.target.value);
    }
    function handleTextareaChangeE(ev) {
        sete(ev.target.value);
    }
    function handleTextareaChangeS(ev) {
        sets(ev.target.value);
    }
    function handleTextareaChangeM(ev) {
        setm(ev.target.value);
    }
    
    return (
        <>
        <h2>CONTACT FORM</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label> &emsp; &emsp;
                <input type="text" value={n} onChange={handleTextareaChangeN} /> <br /><br />

                <label>Email: </label> &emsp; &emsp;
                <input type="email" value={e} onChange={handleTextareaChangeE}/> <br /><br />
                
                <label>Subject: </label> &emsp; &nbsp; &nbsp;
                <input type="text" value={s} onChange={handleTextareaChangeS}/> <br /><br />

                <label>Message: </label> &emsp; &nbsp;
                <textarea id="mgs" value={m} onChange={handleTextareaChangeM}/>
                <p></p>

                {status === 'success' &&
                    <p>Thank you for your response, {n}!</p>
                }
                {error !== null && 
                    <p>{error.message}</p>
                }

                <button disabled={n.length === 0 || status === 'submitting'}>
                    Submit
                </button>
            </form>
        </>
    )

}

function submitForm(n, e, s, m) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let shouldError = (n === '' || e === '' || s === '' || m === '');
            if (shouldError) {
                reject (new Error('Please fill out all fields.'));
            } else {
                resolve();
            }
        }, 1500);
    })
}