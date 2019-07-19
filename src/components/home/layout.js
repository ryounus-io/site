import React from "react"
import NavBar from "./navbar";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const header = <NavBar />;

    return (
      <div>
        <header className="px-48">{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
