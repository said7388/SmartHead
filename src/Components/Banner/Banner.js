import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  // Design a banner for header section
  return (
    <div className='banner container'>
      <h1 className='banner-title'>
        Learn New <br /> Think Daily !
      </h1>
      <p className='banner-text'>
        Get Access to 6000+ Courses from <br /> 1000+ Professional Teachers.
      </p>
      <Link to='/service'>
        <button className='btn btn-banner'>Discover Now</button>
      </Link>
    </div>
  );
};

export default Banner;
