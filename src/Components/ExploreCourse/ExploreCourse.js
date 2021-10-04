import React from "react";
import { Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses/useCourses";
import Course from "../Courses/Course";
import './ExploreCourse.css';

const ExploreCourse = () => {
  const [courses] = useCourses();
  return (
    <div className='container mt-5'>
      <p className='explore-title'>Choose Your Needed Courses</p>
      <Row xs={1} md={3} className='g-4'>
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default ExploreCourse;
