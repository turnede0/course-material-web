import React from "react";
import Cards from "../components/Cards";
import CategoryContent from "../components/CategoryContent";
import { useParams } from "react-router-dom";
import { CourseInfo } from "../assets/course/CourseInfo";

function CategoryDetail() {
  const { categoryName } = useParams();
  const Category = CourseInfo.filter(
    (item) => item.category === categoryName
  )[0];
  console.log("alex Category=", Category.category);

  return (
    <div>
      <CategoryContent
        title={Category.category}
        description={Category.categoryDescription}
      />
      <Cards />
    </div>
  );
}

export default CategoryDetail;
