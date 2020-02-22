import React, { useState } from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

function NavBar() {
  const [isActive, setActive] = useState(false)

  const handleButtonClick = () => {
    setActive(!isActive)
  }

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link
            to="/"
            className="font-semibold text-gray-700 dark:text-gray-100 no-underline text-3xl hover:text-black dark:hover:text-gray-500 no-underline tracking-tight"
          >
            RYounus
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleButtonClick}
            type="button"
            className="block text-gray-700 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 focus:text-gray"
            aria-label="Menu"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isActive && (
                <path
                  className="menu-open"
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isActive && (
                <path
                  className="menu-closed"
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isActive ? "block" : "hidden"
        } -mt-4 px-2 pt-2 pb-4 sm:flex sm:p-0 sm:mt-0`}
      >
        <Link
          to="blog"
          className="block px-2 py-1 font-semibold text-xl text-gray-700 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 sm:mx-2"
        >
          Blog
        </Link>
        <OutboundLink
          href="/assets/pdf/cv_v3_sept19_web.pdf"
          className="block px-2 py-1 font-semibold text-xl text-gray-700 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 sm:mx-2"
        >
          Resume
        </OutboundLink>
      </nav>
    </header>
  )
}

export default NavBar
