import React from "react"

import LinkedInIcon from "../../../../assets/linkedinIcon.svg"

function Linkedin() {
  return (
    <li className="px-2 social-item linkedin">
      <a
        className="no-underline tracking-tight"
        href="https://www.linkedin.com/in/rahmanyounus/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </li>
  )
}

export default Linkedin
