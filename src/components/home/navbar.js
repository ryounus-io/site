import React from 'react'
import { Link } from "gatsby"

function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap py-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link
          to="/"
          className="font-semibold text-gray-700 no-underline text-3xl hover:text-black no-underline tracking-tight"
        >
          RYounus
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-700 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/assets/pdf/cv_v3_sept19_web.pdf"
            className="block mt-4 lg:inline-block lg:mt-0 text-xl text-gray-700 hover:text-black mr-4"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;