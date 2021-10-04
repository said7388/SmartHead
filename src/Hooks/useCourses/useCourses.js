import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
  // This is my custom Hooks Loading fake data from json
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return [courses];
};

export default useCourses;
