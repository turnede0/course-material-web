import React from "react";
// import Analytics from "../components/CategoryDetail";
import { useParams } from "react-router";
import { CourseInfo } from "../assets/course/CourseInfo";
import CourseContent from "../components/CourseContent";
import CourseMaterial from "../components/CourseMaterial";

function CourseDetail() {
  const { categoryName, courseId } = useParams();
  const Course = CourseInfo.filter(
    (item) => item.category === categoryName
  )[0].courses.filter((item) => item.courseID === courseId)[0];

  console.log("alex courseId=", courseId);
  console.log("alex content=", Course);

  return (
    <div>
      <CourseContent Course={Course} />
      <CourseMaterial resources={Course.resources} />
    </div>
  );
}

export default CourseDetail;
