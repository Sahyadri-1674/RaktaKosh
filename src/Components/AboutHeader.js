import React from 'react'
import './AboutHeader.css'
import { About1,About2,About3,About4,About5 } from '../assests/images';
const AboutHeader = () => {
  return (
    <>
      <div className="header header-section container flex">
        <div className="header-left">
          <h1>Who are we?</h1>
          <hr className="hr1" />
          <p className='flex info'>
            Welcome to RaktKosh Blood Bank, where saving lives through the power
            of blood donation is our mission. Established with a heartfelt
            commitment to providing a steady and reliable source of blood,
            RaktKosh is more than just a blood bank—it's a lifeline for
            individuals in need and a community of compassionate donors.<br/><br/>
            RaktKosh was founded by a group of passionate individuals
            who recognized the critical need for a well-organized and efficient
            blood donation system. Witnessing the challenges faced by patients
            in accessing timely and safe blood, our founders were driven to
            bridge the gap between donors and recipients.
          </p>
        </div>
        <div className="header-right">
          <img src={About4} alt="" id="aboutheaderimg1"/>
        </div>
      </div>
      <hr className="hr2" />
    </>
  );
}

export default AboutHeader