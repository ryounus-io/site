import React from "react"
import NavBar from "./navbar";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const header = <NavBar />;

    return (
      <div className="px-32">
        <header>{header}</header>
        <main>{children}</main>
        <footer className="flex justify-center p-4">
          <span>
            © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </footer>
      </div>
    )
  }
}

export default Layout
