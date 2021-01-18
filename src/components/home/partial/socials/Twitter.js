import React from "react"
import TwitterIcon from "../../../../assets/twitterIcon.svg"

function Twitter() {
  return (
    <li className="px-2 social-item twitter">
      <a
        className="no-underline tracking-tight"
        href="https://twitter.com/rahmancodes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal Twitter"
      >
        <TwitterIcon />
      </a>
    </li>
  )
}

export default Twitter
