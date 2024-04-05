import './Components/stylish.css';
import Hero from './Components/Hero.js';
import Personal from './Components/PersonalInfo.js';
import EduBackground from './Components/EduBackground.js';
import Skills from './Components/Skills.js';
import Contact from './Components/Contact.js';
import ContactInfo from './Components/ContactInfo';
import API from './Components/API.js';

function App() {
  return (
    <div style={{width: "1320px"}}> {/*percentage doesnt work (for some reason)*/}
    <ul>
        <li><a href="#default">Home</a></li>
        <li><a href="#info">Info</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contactForm">Contact Me</a></li>
        <li><a href="#contactInfo">Socials</a></li>
    </ul>
      <div id="default" className="heroBack">
        <Hero />
        <div className="backgr">
          <div class="bigContainer">
            <div><API /></div>
            <div id="info"><Personal /></div>
            <div id="education"><EduBackground /></div>
            <div id="skills"><Skills /></div>
            <div id="contactForm"><Contact /></div>
            <div id="contactInfo"><ContactInfo /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
