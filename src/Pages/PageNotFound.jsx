import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-200 via-pink-200 to-purple-100">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
          alt="Page not found"
          className="w-60 h-60 sm:w-70 sm:h-70 rounded-full shadow-lg"
        />

        {/* Error Message */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-[#DC143C]">
          Oops!!
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-gray-700">
          We can't find the page you're looking for..
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-[#E0115F] text-white text-lg sm:text-xl font-bold rounded shadow-lg hover:bg-[#DC143C] transition duration-300 ease-in-out transform hover:scale-105 ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
