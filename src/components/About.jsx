import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


const About = () => {
    return (
      <div>
        <Navbar />
        <section className="page-section" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">We've got what you need!</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  AturaPAY is a digital remittance service on a mission to make
                  the money transfer process faster, affordable, and more
                  transparent. Because we're a digital service without any
                  physical locations, we're able to keep our costs low and pass
                  those savings on to you. All while protecting your hard-earned
                  money as it makes the journey back home.
                </p>
                <NavLink
                  className="button btn-light btn-xl js-scroll-trigger"
                  to="/procedure"
                >
                  How it Works
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}


export default About;