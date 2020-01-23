import React from "react"

import GithubIcon from "../../../../assets/githubIcon.svg"

function Github() {
  return (
    <li className="px-2 social-item github">
      <a
        className="no-underline tracking-tight"
        href="https://github.com/rahman95"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal Github"
      >
        <GithubIcon />
      </a>
    </li>
  )
}

export default Github
