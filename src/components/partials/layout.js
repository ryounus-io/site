import React from "react"
import NavBar from "./../home/navbar"
import Divider from "./../home/partial/divider"
import Footer from "./../home/footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const header = <NavBar />

    return (
      <div>
        <header className="px-10 sm:px-10 md:px-10 lg:px-16 xl:px-32">
          {header}
        </header>
        <main>{children}</main>
        <Divider />
        <Footer />
      </div>
    )
  }
}

export default Layout