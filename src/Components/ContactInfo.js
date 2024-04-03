import React from 'react'

const ContactInfo = () => {
  return (
    <div>
        <h2>CONTACT INFORMATION</h2>
        <div className="smallContainerColumn">
            <div className="table-container">
                <div className="table-row heading">
                    <div className="row-item">Address</div>
                    <div className="row-item">Phone</div>
                    <div className="row-item">Email</div>
                </div>
                <div className="table-row">
                    <div className="row-item">230 Victoria Street</div>
                    <div className="row-item">908-670-7403</div>
                    <div className="row-item">ethan2002@optonline.net</div>
                </div>
            </div> {/*end table container */}
            <br /><br />
            <div className="table-container">
                <div className="table-row heading">
                    <div class="row-item">Social Media/Websites</div>
                </div>
                <div className="table-row">
                    <div className="row-item"><a href="https://github.com/FishMoney0307" style={{color: "#4078c0"}}>Github</a></div>
                    <div className="row-item"><a href="https://www.linkedin.com/in/ethan-karczewski-8b0a83252/" style={{color: "#0077B5"}}>LinkedIn</a></div>
                </div>
            </div>
        </div> {/*end smallcontainer*/}
    </div>
  )
}

export default ContactInfo