import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  const { course } = props;
  console.log(course);
  return (
    <Col>
      <Card>
        <Card.Img className="course-img" variant='top' src={course.picture} />
        <Card.Body className='card-body'>
          <p className='author'>
            <i class='fas fa-chalkboard-teacher'></i> {course.name}
          </p>
          <p className='title'>{course.title}</p>
          <p className='price'>{course.price}</p>
          <hr />
          <div className='course-footer'>
            <p className='lessons'>
              <i class='far fa-folder-open'></i> {course.lesson} Lessons
            </p>
            <p>
              <Rating
                className='icon'
                initialRating={course.rating}
                emptySymbol='far fa-star'
                fullSymbol='fas fa-star'
                readonly
              />
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;