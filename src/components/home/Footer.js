import React from "react"
import Twitter from "./partial/socials/Twitter"
import Github from "./partial/socials/Github"
import Linkedin from "./partial/socials/Linkedin"

function Footer() {
  return (
    <footer className="bg-primary-dark flex-grow py-4">
      <ul
        name="socials"
        className="flex items-end justify-center list-none ignore"
      >
        <Twitter />
        <Github />
        <Linkedin />
      </ul>

      <div className="flex justify-center p-4">
        <span className="footer-text">
          © {new Date().getFullYear()}, Built with {` `}{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
