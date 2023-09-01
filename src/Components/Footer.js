import React from 'react'
import { Logo } from '../assests/icons'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        
    
        <footer>
            <div class="container flex footer-container">
                <a href="#" class="company-logo">
                    <img src={Logo} alt="company logo"/>
                </a>
                <div class="link-column flex">
                    <h4>Looking for Blood</h4>
                    <a href="#" class="hover-link">Blood Availability</a>
                    <a href="#" class="hover-link">Pricing</a>
                    <a href="#" class="hover-link">Camps</a>
                    <a href="#" class="hover-link">Inventory</a>
                    <a href="#" class="hover-link">Request</a>
                </div>
                <div class="link-column flex">
                    <h4>Eligibilty</h4>
                    <a href="#" class="hover-link">About Raktkosh</a>
                    <a href="#" class="hover-link">Contact Us</a>
                    <a href="#" class="hover-link">Login</a>
                    <a href="#" class="hover-link">Reach Us</a>
                    <a href="#" class="hover-link">FAQs</a>
                </div>
                <div class="link-column flex">
                    <h4>Want to Donate Blood</h4>
                    <a href="#" class="hover-link">Register</a>
                    <a href="#" class="hover-link">See Eligibility</a>
                    <a href="#" class="hover-link">Health CheckUp</a>
                    <a href="#" class="hover-link">Donor Login</a>
                    <a href="#" class="hover-link">Know the process</a>
                </div>
            </div>
        </footer>
    
     
    
        <div class="subfooter">
            <div class="container flex subfooter-container">
                <a class="hover-link" href="#">Privacy policy</a>
                <a class="hover-link" href="#">Terms & Condition</a>
                <a class="hover-link" href="#">Security Information</a>
                <a class="hover-link" href="#"><i class="fa-brands fa-facebook"></i></a>
                <a class="hover-link" href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer