import React from "react";
import Cards from "../components/Cards";
import Analytics from "../components/Analytics";
import { useParams } from "react-router-dom";

function Course() {
  const { categoryName } = useParams();

  console.log("alex categoryName=", categoryName);

  return (
    <div>
      <Analytics title={categoryName} />
      <Cards />
    </div>
  );
}

export default Course;
