import React from 'react'
import './stylish.css';

const Skills = () => {
    return (
        <div>
            <h2 id="skills">SKILLS AND EXPERIENCE</h2>
            <div class="smallContainer">
                {/* Language Proficiency */}
                <div class="table-container"><h3>Language Proficiency</h3>
                    <div class="table-row heading">
                        <div class="row-item">Language</div>
                        <div class="row-item">Years</div>
                        <div class="row-item">Proficiency</div>
                    </div>
                    <div class="table-row">
                        <div class="row-item">Java</div>
                        <div class="row-item">8</div>
                        <div class="row-item"><span class="dot dotGreen"></span></div>
                    </div>
                    <div class="table-row" background-color="#003366">
                        <div class="row-item">C++</div>
                        <div class="row-item">4</div>
                        <div class="row-item"><span class="dot dotYellow"></span></div>
                    </div>
                    <div class="table-row">
                        <div class="row-item">Python</div>
                        <div class="row-item">3</div>
                        <div class="row-item"><span class="dot dotYellow"></span></div>
                    </div>
                    <div class="table-row">
                        <div class="row-item">HTML</div>
                        <div class="row-item">1</div>
                        <div class="row-item"><span class="dot dotRed"></span></div>
                    </div>
                </div>
            </div> {/* end small container */}
            <br /><br />

                <div class="smallContainer">
                    <div class="table-container"><h3>Past Projects</h3>
                        <div class="table-row heading">
                            <div class="row-item">Project Name</div>
                            <div class="row-item">Description</div>
                        </div>
                        <div class="table-row">
                            <div class="row-item">CI/CD Pipeline</div>
                            <div class="row-item">Automated pipeline for submitting projects, not dissimilar to Github</div>
                        </div>
                        <div class="table-row">
                            <div class="row-item">Spotify Search Page</div>
                            <div class="row-item">Using the spotipy API, I made a webpage where users could search songs and receive embedded Spotify results</div>
                        </div>
                        <div class="table-row">
                            <div class="row-item">Retail Task Management System</div>
                            <div class="row-item">Program that helps retail managers edit and modify employee tasks in a convenient fashion</div>
                        </div>
                    </div>
                </div>{/* end small container */}
        </div>
    )
}

export default Skills