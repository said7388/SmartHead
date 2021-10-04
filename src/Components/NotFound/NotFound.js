import React from "react";
import "./NotFound.css";
import img from "../../Images/404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img className='NotFound' src={img} alt='' />
      <div>
        <Link to='/home'>
          <button className='btn btn-notFound'>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
