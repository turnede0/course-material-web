import React from "react";

const CourseContent = (Course) => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="mx-auto my-4 rounded-3xl object-cover w-[384px] h-[256px]"
            src={Course.Course.image}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">
              {Course.Course.categoryName}
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              {Course.Course.courseName}
            </h1>
            <p>{Course.Course.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
