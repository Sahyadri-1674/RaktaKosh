import React from 'react'
import { Link } from 'react-router-dom';
import { Logo } from '../assests/icons';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <img src={Logo} alt="" width={160} height={60} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-links"
            id="navbarSupportedContent nav-links"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex">
              <li>
                <img src="../" alt="" />
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Looking for Blood
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Want to Donate Blood
                </a>
              </li>
              <li>
                <a href="#" class="hover-link secondary-button login">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#" class="hover-link primary-button login">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar