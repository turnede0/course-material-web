import React from "react";
import { CoursesResourcesType } from "../utils/types";

const CourseMaterial = ({
  resources,
}: {
  resources: CoursesResourcesType[] | undefined;
}) => {
  // console.log("alex res=", resources);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Topic
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Material
                  </th>
                </tr>
              </thead>
              <tbody>
                {resources?.map((item, index) => (
                  <tr
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    key={index}
                  >
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {index}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.topic}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <a href={item.downloadUrl} rel="noreferrer" type="button">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-[#00df9a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-[#00df9a] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Download
                        </button>
                      </a>
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

export default CourseMaterial;
