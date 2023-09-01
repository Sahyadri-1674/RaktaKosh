import React from 'react'
import { preg,children,trauma,mri } from '../assests/icons';
import './Transfusion.css'
const Transfusion = () => {
  return (
    <div className="transfusion">
      <h1 className="heading mx-auto py-4 px-2 mt-4">
        BLOOD TRANSFUSION IS NEEDED FOR
      </h1>
      <div className="step-section flex mt-2 px-5">
        <div className="steps">
          <img src={preg} alt="" className="step-img-1" />
          <p className="step-desc">
            Women with complication of pregnancy.
          </p>
        </div>
        <div className="steps">
          <img src={children} alt="" className="step-img-2" />
          <p className="step-desc">
           Children with severe anemia as a result of malnutrition.
          </p>
        </div>
        <div className="steps">
          <img src={trauma} alt="" className="step-img-3" />
          <p className="step-desc">
            People with severe trauma following disasters.
          </p>
        </div>
        <div className="steps">
          <img src={mri} alt="" className="step-img-4" />
          <p className="step-desc">
            Complex medical procedures and cancer patients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transfusion