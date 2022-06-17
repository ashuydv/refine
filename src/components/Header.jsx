import React from "react";

export const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font backdrop-filter backdrop-blur fixed top-0 w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 bg-white p-2 text-black rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Refine</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 text-gray-50 hover:text-gray-100">Students</a>
            <a href="#" className="mr-5 text-gray-50 hover:text-gray-100">Millenials</a>
            <a href="#" className="mr-5 text-gray-50 hover:text-gray-100">Parents</a>
            <a href="#" className="mr-5 text-gray-50 hover:text-gray-100">Content Creators</a>
            <a href="#" className="mr-5 text-gray-50 hover:text-gray-100">Merchants</a>
          </nav>
          <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none text-black rounded text-base mt-4 md:mt-0">
            Join Waitlist          
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};
