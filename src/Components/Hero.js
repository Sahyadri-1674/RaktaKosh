import React from 'react'
import './Hero.css'
import { HeroBD } from '../assests/images';

const Hero = () => {
  return (
    <div>
      <header>
        <div className="container header-section flex body">
          <div className="header-left">
            <h1>
              Give the Gift of Life to Others <br></br>{" "}
              <span className="callToAction">Donate Blood!</span>
            </h1>
            <p>
              Donate Blood and Give Hope. Every Drop Counts. Schedule Your Blood
              Donation Appointment. A single drop of blood can make a huge
              difference.
            </p>
            <a href="#" className="primary-button get-started-btn">
              Donate Now
            </a>
          </div>
          <div className="header-right">
            <img src={HeroBD} alt="hero image" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero