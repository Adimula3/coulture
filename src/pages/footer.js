import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/footer.css'
import Twitter from '../assets/icon-twitter.svg';
import Facebook from '../assets/icon-facebook.svg';
import Instagram from '../assets/icon-instagram.svg';


const Footer = () => {
    return (
        <>
         <div className="footer">
          <nav id="navbar" className="navbar navbar-expand-lg d-flex">
              <div className="container">
                  <a href="#" className="navbar-brand">DCOUTURE</a>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a href="#"  className="nav-link">HOME</a>
                      </li>
                      <li className="nav-item">
                            <a href="#"  className="nav-link">SHOP</a>
                      </li>
                      <li className="nav-item">
                            <a href="#"  className="nav-link">ABOUT US</a>
                      </li>
                      <li className="nav-item">
                            <a href="#"  className="nav-link">CONTACT</a>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="footer-details d-flex" >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..</p>
              <div className="socials d-flex">
                  <img className="social" src={Twitter} alt=""/>
                  <img className="social" src={Facebook} alt=""/>
                  <img className="social" src={Instagram} alt=""/>
              </div>
          </div>
      </div>
        </>
    );

}
export default Footer