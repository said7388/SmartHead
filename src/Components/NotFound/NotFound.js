import React from "react";
import "./NotFound.css";
import img from "../../Images/404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  // If you put an invalid link it will be return this 404 page
  return (
    <div>
      <h1 className="text-danger">Your Page Is Not Found</h1>
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
