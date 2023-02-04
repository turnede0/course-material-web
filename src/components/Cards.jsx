import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { CourseInfo } from "../assets/course/CourseInfo";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cards = () => {
  const { categoryName } = useParams();
  const category = CourseInfo.filter(
    (item) => item.category === categoryName
  )[0];
  return (
    <div className="w-full py-[3rem] px-4 bg-white">
      <div className="max-w-[800px] w-full h-[200px] mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Course
        </h1>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {category.courses.map((courseitem, index) => {
          return (
            <div
              className="flex justify-center hover:scale-105 duration-300"
              key={index}
            >
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <span>ID: {courseitem.courseID}</span>
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {courseitem.courseName}
                  </h5>
                  <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#00df9a] text-white rounded">
                    {courseitem.category}
                  </span>
                  <p className="text-gray-700 text-base mb-4">
                    {courseitem.description}
                  </p>
                  <div className="w-full flex justify-center ">
                    <Link
                      to={
                        "/category/" +
                        courseitem.category +
                        "/" +
                        courseitem.courseID
                      }
                    >
                      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:text-[#00df9a] hover:bg-black duration-100">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
