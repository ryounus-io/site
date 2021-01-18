import React from "react"
import Twitter from "./partial/socials/Twitter"
import Github from "./partial/socials/Github"
import Linkedin from "./partial/socials/Linkedin"

function Footer() {
  return (
    <footer className="bg-nord-1 -mt-2 dark:bg-nord-3 flex-grow py-4">
      <ul
        name="socials"
        className="flex items-end justify-center list-none ignore"
      >
        <Twitter />
        <Github />
        <Linkedin />
      </ul>

      <div className="flex justify-center p-4">
        <span className="text-nord-4">
          © {new Date().getFullYear()}, Built with {` `}{" "}
          <a
            className="italic text-nord-5"
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
