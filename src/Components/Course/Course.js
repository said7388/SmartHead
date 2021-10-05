import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  // Recieved course data for design course card.
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
          <p>
              {/* Use React Rating */}
              <Rating
                className='icon-star'
                initialRating={course.rating}
                emptySymbol='far fa-star'
                fullSymbol='fas fa-star'
                readonly
              />
            </p>
          <p className='price'>{course.price}</p>
          <hr />
          <div className='course-footer'>
            <p className='lessons'>
              <i class='far fa-folder-open'></i> {course.lesson} Lessons
            </p>
            <button className="btn btn-success">Enroll Now</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
