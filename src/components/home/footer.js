import React from "react"
import Twitter from "./partial/socials/twitter";
import Github from "./partial/socials/github";
import Linkedin from "./partial/socials/linkedin";

function Social() {
  return (
    <footer className="flex-grow py-4">
      <ul className="flex items-end justify-center list-none ignore">
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

export default Social
