import React from 'react'
import './stylish.css';

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

function validate(e) {
    e.preventDefault();


}

const Contact = () => {}

  return (
    <div>
        <h2>CONTACT FORM</h2>
        <div className="smallContainerColumn">
            <div><br />
                <iframe title="update" style={{display:"none"}}></iframe>
                <form id="form1" onsubmit={validate} target="update">
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