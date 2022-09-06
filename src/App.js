// import logo from './logo.svg';
import profile_pic from './images/Rectangle 90.png';
import email from './images/Mail.svg';

import linkd from './images/linkedin.svg';
import Facebook from './images/Facebook.svg';
import GitHub from './images/GitHub.svg';
import Instagram from './images/Instagram.svg';
import Twitter from './images/Twitter.svg';



import './App.css';

function App() {
  return (
    <div className="App">

      <img src={profile_pic} alt="Profile-pic" className="profile-pic" />
      <div className="intro-section">
        <div className="intro">
          <h2 className="name">Laura Smith</h2>
          <h3 className="profession">Frontend Developer</h3>
          <h4 className="website">laurasmith.website</h4>
        </div>

        <div className="btn">
          <button className="btn-email"><img src={email} alt="mail" />Email</button>
          <button className="btn-linkd"><img src={linkd} alt="in" />LinkedIn</button>
        </div>

        <div className="summary">
          <h3 className="summary-title">About</h3>
          <p className="summary-text">
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
          <h3 className="interests-title">Interests</h3>
          <p className="interests-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.          </p>
        </div>

      </div>

      <div className="social-icon">
        <img src={Twitter} alt="twitter" />
        <img src={Instagram} alt="twitter" />
        <img src={Facebook} alt="twitter" />
        <img src={GitHub} alt="twitter" />
      </div>
    </div>
  );
}

export default App;
