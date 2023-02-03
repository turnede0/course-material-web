import React from "react";
import Laptop from "../assets/laptop.jpg";
import { useParams } from "react-router-dom";
import { CourseInfo } from "../assets/course/CourseInfo";

const Analytics = () => {
  const { categoryName } = useParams();
  const category = CourseInfo.filter(
    (item) => item.category === categoryName
  )[0];

  console.log(category);
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {categoryName}
          </h1>
          <p>{category.categoryDescription}</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
