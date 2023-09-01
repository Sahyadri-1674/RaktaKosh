import React from "react";
import "./AboutVisionMission.css";
import { About1, About2, About3, About4, About5, Donor1 } from "../assests/images";
const AboutVisionMission = () => {
  return (
    <>
      <div>
        <section className="big-feature-section">
          <div className="container flex big-feature-container">
            <div className="feature-img">
              <img src={About1} alt="" />
            </div>
            <div className="feature-desc flex">
              <h4>Our Vision</h4>
              <hr className="hr1" />
              <p>
                At RaktKosh, our vision is simple yet profound: a world where no
                life is lost due to the unavailability of blood. We envision a
                future where every person, regardless of their background, has
                access to a readily available and secure blood supply, ensuring
                that medical treatments, surgeries, and emergencies are met with
                confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="big-feature-section">
          <div
            className="container flex big-feature-container"
            id="second-big-feature"
          >
            <div className="feature-img">
              <img src={Donor1} alt="" />
            </div>
            <div className="feature-desc flex">
              <h4>Our Mission</h4>
              <hr className="hr1" />
              <h3>Our mission revolves around three core principles:</h3>
              <p>
                Accessibility: We strive to make blood donation easy and
                accessible for everyone. Through our network of blood donation
                centers, mobile blood drives, and an intuitive online platform,
                we connect donors with those in need. <br />
                <br /> Safety: Safety is paramount in blood donation. We adhere
                to the highest standards of hygiene and quality control to
                ensure that every donation is safe for both donors and
                recipients. <br />
                <br />
                Community: RaktKosh is built upon the spirit of community. We
                believe that coming together to save lives creates a strong bond
                among donors, recipients, and volunteers. Our platform
                encourages a sense of belonging and empowerment in our
                supporters.
              </p>
            </div>
          </div>
        </section>

        <section className="big-feature-section">
          <div className="container flex big-feature-container">
            <div className="feature-img">
              <img src={About3} alt="" />
            </div>
            <div className="feature-desc flex">
              <h4>What We Do</h4>
              <hr className="hr1" />
              <p>
                Blood Donation: RaktKosh facilitates blood donation drives in
                various locations, making it convenient for donors to
                contribute. Whether you're an individual, a group, or a
                corporation, we welcome you to join us in this life-saving
                endeavor. <br />
                <br />
                Donor Network: Our growing community of donors plays a crucial
                role in our mission's success. By registering as a donor, you
                become part of a network that responds swiftly to emergencies
                and ongoing medical needs. <br />
                <br />
                Education and Awareness: We believe that knowledge is key to
                inspiring more donors and creating awareness about the
                importance of blood donation. Through seminars, workshops, and
                online campaigns, we aim to educate the public on the impact of
                their contribution.
              </p>
            </div>
          </div>
        </section>
      </div>
      <hr className="hr2" />
    </>
  );
};

export default AboutVisionMission;
