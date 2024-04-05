import React from 'react';
import './stylish.css';
import Weather from './Weather.js';
import Genres from './Genres.js'

const API = () => {
  return (
    <div>
        <h2>API CALLS</h2>
        <div className="smallContainer">
            <div>
                <Weather />
            </div>
            <div>
                <Genres />
            </div>

        </div> {/*End smallcontainer*/}
    </div>
  )
}

export default API