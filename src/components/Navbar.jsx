import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="#page-top">
            AturaPay
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/About">
                  About
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
                </div>
                
            </div>
            
            
        </nav>
       
            
    );
}


export default Navbar;