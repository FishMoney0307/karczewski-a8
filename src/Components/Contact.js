import React from 'react'
import './stylish.css';

const Contact = () => {
  return (
    <div>
        <h2>CONTACT FORM</h2>
        <div className="smallContainerColumn">
            <div><br />
                <iframe title="update" style={{display:"none"}}></iframe>
                <form id="form1" onsubmit="validate()" target="update">
                    <label for="name">Name: </label> &emsp; &emsp;
                    <input type="text" id="name" /><br /><br />

                    <label for="email">Email: </label> &emsp; &emsp;
                    <input type="email" id="mail" /><br /><br />

                    <label for="subject">Subject:</label> &emsp; &nbsp;&nbsp;
                    <input type="text" id="subject" /><br /><br />

                    <label for="msg">Message:</label> &emsp;&nbsp;
                    <textarea id="msg"></textarea>
       
                    <p id="response"></p>
                </form>
            </div>
            <div>
                <br />
                <button type="submit" form="form1" value="Submit">Submit</button>
                <br /><br />
            </div>
        </div> {/* end smallcontainer */}
    </div>
  )
}

export default Contact