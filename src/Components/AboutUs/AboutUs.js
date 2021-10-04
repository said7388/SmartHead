import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutUs.css";
import img from "../../Images/about-us.png";
import Badges from "../Badge/Badge";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className='container'>
        <Row xs={1} md={2} className='g-4 px-4'>
          <Col>
            <p className='about-title'>
              We share <br /> knowledge <br /> with the world
            </p>
          </Col>
          <Col>
            <img src={img} alt='' />
          </Col>
        </Row>
        <p className='second-title'>Our origins</p>
        <p className='text'>
          Growing up in a small Turkish village, Udemy founder Eren Bali had few
          educational opportunities — until he got a computer. Fueled by his
          dream to compete in mathematics, he used the internet to learn his way
          to a silver medal in the International Math Olympiad.After learning
          online changed his life, Eren partnered with co-founders Oktay Caglar
          and Gagan Biyani to achieve a common goal: to make quality education
          accessible to all.
        </p>
      </div>
      <div className='about-info my-4 p-4'>
        <p className='second-title'>We just keep growing</p>
        <p className='text'>
          Our global community and our course catalog get bigger every day.
          <br /> Check out our latest numbers as of June 2021.
        </p>
        <Row xs={1} md={4}>
          <Col>
            <h1 className='col-title'>44M+</h1>
            <p className='text'>Learners</p>
          </Col>
          <Col>
            <h1 className='col-title'>65k+</h1>
            <p className='text'>Instructors</p>
          </Col>
          <Col>
            <h1 className='col-title'>183K+</h1>
            <p className='text'>Courses</p>
          </Col>
          <Col>
            <h1 className='col-title'>594M+</h1>
            <p className='text'>Course Enrollment</p>
          </Col>
        </Row>
      </div>
      <Badges />
      <div className='container my-4'>
        <p className='text'>
          We help organizations of all types and sizes prepare for the path
          ahead — wherever it leads. Our curated collection of business and
          technical courses help companies, governments, and nonprofits go
          further by placing learning at the center of their strategies.
        </p>
        <button className='btn btn-primary'>Learn More</button>
      </div>
    </div>
  );
};

export default AboutUs;
