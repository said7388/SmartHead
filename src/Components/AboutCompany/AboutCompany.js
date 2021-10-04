import React from "react";
import "./AboutCompany.css";
import { Col, Row } from "react-bootstrap";
import img from "../../Images/course-1-600x680.jpg";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  // This Components will be displayed Our Company Features
  return (
    <div className='about-company container mt-5'>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <img className='img-fluid' src={img} alt='' />
        </Col>
        <Col className="description">
          <p className='sub'>About SmartHead Company</p>
          <p className='company-title'>Welcome to the Online Learning</p>
          <div className='company-text'>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, simply
              free text by injected humour, or randomised.
            </p>
            <p>
            <i class="far fa-check-circle"></i>  Get unlimited access to 66000+ of our top courses
            </p>
            <p>
            <i class="far fa-check-circle"></i>  Explore a variety of fresh educational topics
            </p>
            <p>
            <i class="far fa-check-circle"></i>  Find the best qualitfied teacher for you
            </p>
          </div>
          <Link to='/courses'>
              <button className='btn btn-company'>View All Courses</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AboutCompany;
