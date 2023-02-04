import React from "react";
import { CourseCategory } from "../assets/course/CourseCategory";
import { Link } from "react-router-dom";

const Category = (ref) => {
  return (
    <div className="w-full h-full py-[3rem] px-4 bg-white">
      <div className="max-w-[800px] w-full h-[200px] mx-auto text-center flex flex-col justify-center">
        <h1
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
          id="category"
        >
          Category
        </h1>
      </div>
      <section className="overflow-hidden text-gray-700 z-0">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {CourseCategory.map((categoryitem, index) => {
              return (
                <div
                  className="relative flex flex-wrap md:w-1/2 lg:w-1/3 hover:scale-105 duration-300 p-2"
                  key={index}
                >
                  {categoryitem.isActive ? (
                    <Link to={"/category/" + categoryitem.categoryName}>
                      <div className="absolute h-full w-full flex justify-center items-center">
                        <h4 className="inline-block text-[#ffff] text-2xl">
                          {categoryitem.categoryName}
                        </h4>
                      </div>
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={categoryitem.imgUrl}
                      ></img>
                    </Link>
                  ) : (
                    <div>
                      <div className="absolute bg-white opacity-90 h-full w-full flex justify-center items-center">
                        <h4 className="inline-block text-grey-500 text-2xl">
                          Coming Soon
                        </h4>
                      </div>
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={categoryitem.imgUrl}
                      ></img>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
