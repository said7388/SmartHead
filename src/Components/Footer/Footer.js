import React from "react";
import "./Footer.css";
import img from "../../Images/footer_logo.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container row row-cols-3 container'>
        <div className='col-6'>
          {/* Footer logo and description here */}
          <img src={img} alt='' />
          <p className='footer-text'>
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies. We’ve got the solution:
            world-class training and development programs developed by top
            universities and companies. All on Coursera for Business.87% of
            people learning for professional development report career benefits
            like getting a promotion, a raise, or starting a new career.
          </p>
        </div>
        <div className='col-3'>
          {/* Footer Important Anchor Link  */}
          <p className='footer-title'>Important Link</p>
          <p>
            <a href='/courses'>Courses</a>
          </p>
          <p>
            <a href='link'>Instructors</a>
          </p>
          <p>
            <a href='/about'>About Us</a>
          </p>
          <p>
            <a href='link'>Contact Us</a>
          </p>
        </div>
        <div className='col-3'>
          {/* Our Fake Adresses */}
          <p className='footer-title'>Our Contact</p>
          <p>
            <i class='fas fa-map-marker-alt'></i>  350 Avenue, New York, NY 10001
          </p>
          <p>
            <i class='fas fa-envelope-open-text'></i>  info@example.com
          </p>
          <p>
            <i class='fas fa-phone'></i>  +8801834738881
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
