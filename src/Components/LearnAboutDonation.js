import React from 'react'
import { TwoDonors,CompatibleDonors } from '../assests/images'
import './LearnAboutDonation.css'
const LearnAboutDonation = () => {
  return (
    <div>
      <h1 className="heading mx-auto py-4 px-2">LEARN ABOUT DONATION</h1>
      <div className="flex header-section">
        <div className="left-section">
          <p>
            <span className="highlight">One</span> Blood Donation can save upto{" "}
            <span className="highlight">Three</span> lives
          </p>
          <img src={TwoDonors} alt="" className="twoDonors" />
          <p className="textBelow">
            After donating blood, the body works to replenish the blood loss.
            This stimulates the production of new blood cells and in turn, helps
            in maintaining good health
          </p>
        </div>
        <div className="right-section">
          <img src={CompatibleDonors} alt="" className="CompatibleDonors" />
        </div>
      </div>
    </div>
  );
}

export default LearnAboutDonation