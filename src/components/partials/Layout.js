import React from "react"
import Analytics from "../Analytics"
import NavBar from "../home/NavBar"
import Footer from "../home/Footer"
import { css } from "../../utils/typography"

import WaveFormDivider from "../../assets/waveFormDivider.svg"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const header = <NavBar />

    return (
      <>
        <Analytics />

        <div className="flex flex-col bg-primary-light dark:bg-primary-dark h-full">
          <style
            dangerouslySetInnerHTML={{
              __html: css,
            }}
          />
          <header className="px-4 sm:px-4 lg:px-8 xl:px-16">{header}</header>
          <main>{children}</main>
          <WaveFormDivider />
          <Footer />
        </div>
      </>
    )
  }
}

export default Layout
