import React from "react";
import { FaEnvelope, FaGlobe, FaHeart, FaBookmark, FaCalendar } from "react-icons/fa";
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="left-section">
          <h1 className="main-title">Trading Platform Web Design</h1>
          <div className="author-info">
            <img src="src/assets/img/myprofile.jpg" alt="Levi Wilson" className="author-img" />
            <div className="author-text">
              <p>
                <strong>Levi Wilson</strong> for <strong>Qclay</strong>
                <span className="availability"> Available for work</span>   
              </p>
              <p className="contact-info">
                <FaEnvelope className="icon" /> info@qclay.design &nbsp;&nbsp;
                <FaGlobe className="icon" /> qclay.design
              </p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="icon-group">
            <div className="circle-icon"><FaHeart /></div>
            <div className="circle-icon"><FaBookmark /></div>
            <div className="circle-icon"><FaCalendar /></div>
          </div>
          <button className="contact-button">Get in Touch</button>
        </div>
      </div>

      <div className="video-frame">
        <video controls width="100%">
          <source src="src/assets/img/videodibble.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="status-section">
  <h2 className="status-text">We are open for new projects!</h2>
  <div className="line-divider">
    <hr className="line" />
    <img src="src/assets/img/qicon.webp" alt="divider" className="divider-image" />
    <hr className="line" />
  </div>
  <div className="centered-content">
  <h1 className="brand-name">Qclay</h1>
  <p className="brand-tagline">we create awesome design, visit our website 👋</p>

  <div className="button-group">
    <button className="btn btn-dark">Get in Touch</button>
    <button className="btn btn-light">Schedule a Call</button>
  </div>

  <div className="contact-row">
    <FaEnvelope className="icon" />
    <span>info@qclay.design</span>
    &nbsp;&nbsp;&nbsp;
    <FaGlobe className="icon" />
    <span>qclay.design</span>
  </div>
</div>

</div>

<div className="card-section-header">
  <span className="left-label">More by Qclay</span>
  <span className="right-label">View Profile</span>
</div>


<div className="card-section">
  <div className="card">
    <div className="card-icons">
      <div className="circle-icon"><FaHeart /></div>
      <div className="circle-icon"><FaBookmark /></div>
    </div>
    <img src="src/assets/img/card1.webp" alt="Card 1" />
  </div>

  <div className="card">
    <div className="card-icons">
      <div className="circle-icon"><FaHeart /></div>
      <div className="circle-icon"><FaBookmark /></div>
    </div>
    <img src="src/assets/img/card2.webp" alt="Card 2" />
  </div>

  <div className="card">
    <div className="card-icons">
      <div className="circle-icon"><FaHeart /></div>
      <div className="circle-icon"><FaBookmark /></div>
    </div>
    <img src="src/assets/img/card3.webp" alt="Card 3" />
  </div>

  <div className="card">
    <div className="card-icons">
      <div className="circle-icon"><FaHeart /></div>
      <div className="circle-icon"><FaBookmark /></div>
    </div>
    <img src="src/assets/img/card4.webp" alt="Card 4" />
  </div>
</div>


    </div>
    
  );
};

export default Home;
