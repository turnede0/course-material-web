import React from "react";
import Cards from "../components/Cards";
import CategoryContent from "../components/CategoryContent";
import { useParams } from "react-router-dom";
import { CourseInfo } from "../assets/course/CourseInfo";

function CategoryDetail() {
  const { categoryID } = useParams();
  const Category = CourseInfo.filter(
    (item) => item.categoryID === categoryID
  )[0];
  return (
    <div>
      <CategoryContent
        title={Category.categoryID}
        description={Category.categoryDescription}
      />
      <Cards />
    </div>
  );
}

export default CategoryDetail;
