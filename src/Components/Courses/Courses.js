import React from "react";
import { Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses/useCourses";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  // Use custom Hooks for Loading Courses data.
  const [courses] = useCourses();

  return (
    <div className='container mt-5'>
      <p className='course-sub'>Checkout New List</p>
      <p className='courses-title'>Explore Courses</p>
      <Row xs={1} md={3} className='g-4'>
        {/* Slice array for map and show 6 data */}
        {courses.slice(0, 6).map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
