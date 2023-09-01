import React from 'react'
import { registration,coldDrink,donor,checkup,smoothie } from '../assests/icons';
import './DonationProcess.css'
const DonationProcess = () => {
  return (
    <div className='process'>
      <h1 className="heading mx-auto py-4 px-2 mt-4">
        BLOOD DONATION IS A SIMPLE FOUR STEP PROCESS
      </h1>
      <div className="step-section flex mt-2 px-5">
        <div className="steps">
          <img src={registration} alt="" className="step-img-1" />
          <p className="step-desc">
            Registration, where you signup and go over eligibility.
          </p>
        </div>
        <div className="steps">
          <img src={checkup} alt="" className="step-img-2" />
          <p className="step-desc">
            Mini-physical, where your health is evaluated.
          </p>
        </div>
        <div className="steps">
          <img src={donor} alt="" className="step-img-3" />
          <p className="step-desc">
            The donation, which only takes about 8-10 minutes.
          </p>
        </div>
        <div className="steps">
          <img src={coldDrink} alt="" className="step-img-4" />
          <p className="step-desc">
            Refreshments, where you get a snack and drink afterwards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonationProcess;