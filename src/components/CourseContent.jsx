import React from "react";
import Laptop from "../assets/laptop.jpg";
import { useParams } from "react-router-dom";
import { CourseInfo } from "../assets/course/CourseInfo";

const CourseMaterial = (resources) => {
  console.log("alex material=", resources);

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Topic
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Material
                  </th>
                </tr>
              </thead>
              <tbody>
                {resources.resources.map((item, index) => (
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {index}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.topic}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        class="inline-block px-6 py-2.5 bg-[#00df9a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-[#00df9a] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        <a href={item.downloadUrl} rel="noreferrer">
                          <button>Download</button>
                        </a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseContent = () => {
  const { categoryName, courseId } = useParams();
  const Course = CourseInfo.filter(
    (item) => item.category === categoryName
  )[0].courses.filter((item) => item.courseID === courseId)[0];

  console.log("alex courseId=", courseId);
  console.log("alex content=", Course);

  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">{categoryName}</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              {Course.courseName}
            </h1>
            <p>{Course.description}</p>
          </div>
        </div>
      </div>
      <CourseMaterial resources={Course.resources} />
    </div>
  );
};

export default CourseContent;
