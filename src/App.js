import './App.css';
import './Components/stylish.css';
import Hero from './Components/Hero.js';
import Personal from './Components/PersonalInfo.js';
import EduBackground from './Components/EduBackground.js';
import Skills from './Components/Skills.js';
import Contact from './Components/Contact.js';
import ContactInfo from './Components/ContactInfo';

function App() {
  return (
    <div className="heroBack">
      <Hero />
      <div className="backgr">
        <div class="bigContainer">
          <div><Personal /></div>
          <div><EduBackground /></div>
          <div><Skills /></div>
          <div><Contact /></div>
          <div><ContactInfo /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
