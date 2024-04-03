import React from 'react'
import './stylish.css';

const PersonalInfo = () => {
  return (
    <div>
        <h2>PERSONAL INFORMATION</h2>
        <div className= "smallContainer">
            <div>
                <h2>Date of Birth: 03/07/2002</h2>
                <h2>Hometown: Manalapan, NJ</h2>
            </div>
            <div>
                <h3>Hobbies and Interest:</h3>
                <div>Programming, Playing Guitar, Video Games</div>
            </div>
        </div> {/*End smallcontainer*/}
    </div>
  )
}

export default PersonalInfo