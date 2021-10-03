import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className='banner container'>
      <h1 className='banner-title'>
        Learn New <br /> Think Daily !
      </h1>
      <p className='banner-text'>
        Get Access to 6000+ Courses from <br /> 1000+ Professional Teachers.
      </p>
      <button className='btn btn-banner'>Discover Now</button>
    </div>
  );
};

export default Banner;
