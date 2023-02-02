import React from "react";
import Analytics from "../components/Analytics";
import { useParams } from "react-router";
import { CourseInfo } from "../assets/course/CourseInfo";

function CourseDetail() {
  const params = useParams();

  return (
    <div>
      <Analytics />
      {JSON.stringify(params)}
      {CourseInfo[0].courseName}
    </div>
  );
}

export default CourseDetail;
