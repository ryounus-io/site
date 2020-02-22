import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import TwitterIcon from "../../../../assets/twitterIcon.svg"

function Twitter() {
  return (
    <li className="px-2 social-item twitter">
      <OutboundLink
        className="no-underline tracking-tight"
        href="https://twitter.com/rahmancodes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal Twitter"
      >
        <TwitterIcon />
      </OutboundLink>
    </li>
  )
}

export default Twitter
