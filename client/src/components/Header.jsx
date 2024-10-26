import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center rounded-b-[20px]">

      <div className="flex items-center space-x-2">
        <button className="text-gray-500">
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Editable Text */}
        <h1 className="text-xl font-medium text-gray-800">
          Run Workout
        </h1>
        <img src="/Icons.png" alt="icons" style={{marginTop:"0px"}}/>
      </div>

      {/* Right Section with Save Button */}
      <div>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-full">
          Save Workout
        </button>
      </div>
    </header>
  );
};

export default Header;
