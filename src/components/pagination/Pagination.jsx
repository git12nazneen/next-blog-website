
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-between">
      <a
        href="#"
        className="px-4 py-2 mx-1 text-black capitalize bg-orange-600  hover:bg-blue-950 rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
      >
        <div className="flex items-center -mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>

          <span className="mx-1">previous</span>
        </div>
      </a>

      <a
        href="#"
        className="px-4 py-2 mx-1 text-black transition-colors duration-300 transform bg-orange-600 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-950 dark:hover:bg-blue-950 hover:text-white dark:hover:text-gray-200"
      >
        <div className="flex items-center -mx-1">
          <span className="mx-1">Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Pagination;
