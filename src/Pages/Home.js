import BloodReq from "../Components/BloodReq";
import DonationProcess from "../Components/DonationProcess";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import LearnAboutDonation from "../Components/LearnAboutDonation";
import Transfusion from "../Components/Transfusion";


import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <LearnAboutDonation />
      <DonationProcess />
      <BloodReq />
      <Transfusion />
      <Footer />
    </div>
  );
}

export default Home