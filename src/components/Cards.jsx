import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { CourseInfo } from "../assets/course/CourseInfo";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[800px] w-full h-[200px] mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Course
        </h1>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {CourseInfo.map((courseitem, index) => {
          return (
            <div
              class="flex justify-center hover:scale-105 duration-300"
              key={index}
            >
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <span>ID: {courseitem.courseID}</span>
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    {courseitem.courseName}
                  </h5>
                  <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#00df9a] text-white rounded">
                    {courseitem.category}
                  </span>
                  <p class="text-gray-700 text-base mb-4">
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
        {/* <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div> */}
        {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div> */}
      </div>
    </div>
  );
};

export default Cards;
