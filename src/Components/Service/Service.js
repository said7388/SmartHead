import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Service.css";

const Service = () => {
  return (
    <div className='service'>
      <p className='service-title pb-4'>
        Why Clients Choose SMARTHEAD for Education Services
      </p>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <img
            className='img-fluid'
            src='https://dyopath.com/wp-content/uploads/2020/06/Education-2-img.png'
            alt=''
          />
        </Col>
        <Col>
          <div className='service-info'>
            <p className='service-sub'>
              <span className='icon'>
                <i class='fas fa-check-circle'></i>
              </span>
              Innovative
            </p>
            <p className='service-text'>
              We stay on the cutting edge of learning frameworks, offering the
              latest technology services to better equip K-12 organizations for
              achieving greater success.
            </p>
          </div>
          <div className='service-info'>
            <p className='service-sub'>
              <span className='icon'>
                <i class='fas fa-check-circle'></i>
              </span>
              Safe
            </p>
            <p className='service-text'>
              We protect sensitive data, keeping your K-12 institution’s and
              your students’ information safe, with advanced features that
              support enhanced security.
            </p>
          </div>
          <div className='service-info'>
            <p className='service-sub'>
              <span className='icon'>
                <i class='fas fa-check-circle'></i>
              </span>
              Collaborative
            </p>
            <p className='service-text'>
              DYOPATH supports your prioritization of technology solutions that
              will streamline the delivery of education and improved
              collaboration efficiencies between students, teachers and parents.
            </p>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={2} className='g-4 mt-5'>
        <Col>
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
    </div>
  );
};

export default Service;
