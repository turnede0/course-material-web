import React from "react";
import Analytics from "../components/Analytics";
import { useParams } from "react-router";
import { CourseInfo } from "../assets/course/CourseInfo";
import CourseContent from "../components/CourseContent";

function CourseDetail() {
  const { categoryName, courseId } = useParams();

  return (
    <div>
      <CourseContent />
    </div>
  );
}

export default CourseDetail;
