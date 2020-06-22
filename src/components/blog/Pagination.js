import React, { useState } from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

function Pagination({ numOfPages, currentPage }) {
  const [page, setPage] = useState(currentPage)

  const handlePageUpdate = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <ul class="flex">
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
            <a className="flex items-center font-bold" href="#">
                <span className="mx-1">previous</span>
            </a>
        </li>
        {/* {numOfPages.map((value, index) => {
            return (
                <li key={index} className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                    <a className="font-bold" href="#">{value}</a>
                </li>
            )
        })} */}
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a className="flex items-center font-bold" href="#">
                <span className="mx-1">Next</span>
            </a>
        </li>
    </ul>
  )
}

export default Pagination
