import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Category.css";
import img2 from "../../Images/course-7.jpg";
import img1 from "../../Images/course-9.jpg";
import img3 from "../../Images/course-4.jpg";
import img4 from "../../Images/course-3.jpg";
import img5 from "../../Images/course-6.jpg";

const Category = () => {
  return (
    <div className='mt-5'>
      <h1 className="category-heading">Top Category</h1>
      <div className='container category'>
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <Card>
              <div class='img-hover'>
                <img className='img-fluid' src={img1} alt='' />
              </div>
              <div className='category-title'>
                <p>Learning</p>
                <h6>Marketing</h6>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div class='img-hover'>
                <img className='img-fluid' src={img2} alt='' />
              </div>
              <div className='category-title'>
                <p>Learning</p>
                <h6>Programming</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={3} className='g-4 mt-2'>
          <Col>
            <Card>
              <div class='img-hover'>
                <img className='img-fluid' src={img3} alt='' />
              </div>
              <div className='category-title'>
                <p>Learning</p>
                <h6>Photography</h6>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div class='img-hover'>
                <img className='img-fluid' src={img4} alt='' />
              </div>
              <div className='category-title'>
                <p>Learning</p>
                <h6>Buisness</h6>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div class='img-hover'>
                <img className='img-fluid' src={img5} alt='' />
              </div>
              <div className='category-title'>
                <p>Learning</p>
                <h6>Lifestyle</h6>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Category;
