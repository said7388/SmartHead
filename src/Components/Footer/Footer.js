import React from "react";
import "./Footer.css";
import img from "../../Images/footer_logo.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container row row-cols-3 container'>
        <div className="col-5">
          <img src={img} alt='' />
          <p className='footer-text'>
            Et scaevola delicata vix, mea ei invidunt quodsi eripuit definiebas
            at pri. Placerat voluptaria meleos malis civibus an dolor
          </p>
        </div>
        <div className="col-4">
          <p className="footer-title">Company</p>
          <p>
            <a href='link'>Courses</a>
          </p>
          <p>
            <a href='link'>Instructors</a>
          </p>
          <p>
            <a href='link'>About Us</a>
          </p>
          <p>
            <a href='link'>Pricing</a>
          </p>
          <p>
            <a href='link'>Contact Us</a>
          </p>
        </div>
        <div className="col-3">
          <p className="footer-title">Our Contact</p>
          <p>350 Avenue, New York, NY 10001</p>
          <p>info@example.com</p>
          <p>+8801834738881</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
