import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className='container mt-5'>
      <p className='course-sub'>Checkout New List</p>
      <p className='courses-title'>Explore Courses</p>
      <Row xs={1} md={3} className='g-4'>
        {courses.slice(0, 6).map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
