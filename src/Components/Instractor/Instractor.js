import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Instractor.css';

const Instractor = () => {
    return (
        <div className="container mt-3">
            <Row xs={1} md={2}>
                <Col>
                <img src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" alt="" className="img-fluid" />
                </Col>
                <Col className="mt-5 pt-5 instractor">
                <h2 className="instractor-title">Become an instructor</h2>
                <p className="text">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                <button className='btn btn-company'>Start Teaching</button>
                </Col>
            </Row>
        </div>
    );
};

export default Instractor;