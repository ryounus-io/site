import React from "react"
import NavBar from "./navbar";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const header = <NavBar />;

    return (
      <div>
        <header className="px-10 sm:px-10 md:px-10 lg:px-16 xl:px-32">{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
