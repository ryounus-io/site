import React from "react"
import NavBar from "../home/Navbar"
import WaveFormDivider from "../home/partial/WaveFormDivider"
import Footer from "../home/Footer"

import { css } from "../../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const header = <NavBar />

    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: css,
          }}
        />
        <header className="px-10 sm:px-10 md:px-10 lg:px-16 xl:px-32">
          {header}
        </header>
        <main>{children}</main>
        <WaveFormDivider />
        <Footer />
      </div>
    )
  }
}

export default Layout
