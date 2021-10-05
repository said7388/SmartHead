import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Service.css";
import Courses from "../Courses/Courses";
import ClientService from "../ClientService/ClientService";

const Service = () => {
  // This is our service component
  return (
    <div className='service'>
      <ClientService></ClientService>
      <Row xs={1} md={2} className='g-4 mt-5'>
        <Col>
          {/* Another section for educational service */}
          <p className='education-service'>Education Services</p>
          <p className='education-service-text'>
            We work with small to large school districts to deliver thought
            leadership to your communities through innovative turn-key
            educational solutions. Our custom-tailored services ensure the
            greatest gain from technology investments.
          </p>
        </Col>
        <Col>
          <img
            className='img-fluid'
            src='https://dyopath.com/wp-content/uploads/2020/06/EDICATION-IMG.png'
            alt=''
          />
        </Col>
      </Row>
      <Courses></Courses>
    </div>
  );
};


export default Service;
