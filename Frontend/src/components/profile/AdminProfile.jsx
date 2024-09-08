import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AdminProfile() {
  const { info } = useSelector((state) => state.adminAuth);
  return (
    <div className="max-w-4xl w-full self-start">
      <h2 className="flex items-center text-gray-800 mb-4 text-2xl font-bold px-2 py-4 my-4 rounded shadow bg-indigo-100  border-blue-800">
        {info.name}
      </h2>

      <ul className="w-full max-w-[550px]  mt-3">
        <li className="flex items-center p-3 mb-2   border-blue-800">
          <span className="font-semibold">Position</span>
          <span className="ml-auto">
              {info.role}
          </span>
        </li>
        <li className="flex items-center p-3 mb-2   border-blue-800">
          <span className="font-semibold">Email Address</span>
          <span className="ml-auto hover:underline hover:text-yellow-800">
            {info.email}
          </span>
        </li>
      </ul>

      <div className="flex justify-end items-center mt-6">
        <Link
          to={`/admins/profile/${info.id}/update`}
          className="inline-flex font-bold text-xs sm:text-sm bg-blue-700 text-white hover:bg-white px-2 sm:px-3 py-2 hover:text-blue-600 border hover:border-blue-800 items-center rounded
         shadow transition-all ease-in-out duration-300"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}
