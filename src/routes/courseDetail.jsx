import React from "react";
import Analytics from "../components/Analytics";
import { useParams } from "react-router";
import { CourseInfo } from "../assets/course/CourseInfo";

function CourseDetail() {
  const { categoryName } = useParams();

  return (
    <div>
      <Analytics />
      {CourseInfo[0].courseName}
    </div>
  );
}

export default CourseDetail;
