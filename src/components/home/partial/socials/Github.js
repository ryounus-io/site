import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import GithubIcon from "../../../../assets/githubIcon.svg"

function Github() {
  return (
    <li className="px-2 social-item github">
      <OutboundLink
        className="no-underline tracking-tight"
        href="https://github.com/rahman95"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal Github"
      >
        <GithubIcon />
      </OutboundLink>
    </li>
  )
}

export default Github
