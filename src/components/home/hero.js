import React from 'react'
import { Link } from "gatsby"

function Hero() {
  return (
    <section className="container flex-grow">
      <div className="text-2xl text-gray-800 font-hairline py-64">
        <h2 className="heading text-6xl">Hello, I'm Rahman.</h2>
        <p>
          <span className="relative px-1">
            <span>Full-stack Software Developer </span>
            <span className="absolute w-full h-4 z-0 left-0 bottom-5 font-hightlight-green"></span>
          </span>
          <span>with numerous years of experience in development, </span>
          <span className="relative px-1">
            <span>passionate</span>
            <span className="absolute w-full h-4 z-0 left-0 bottom-5 font-hightlight-green"></span>
          </span>
          <span>about creating </span>
          <span className="relative px-1">
            <span>rich bespoke digital experiences</span>
            <span className="absolute w-full h-4 z-0 left-0 bottom-5 font-hightlight-green"></span>
          </span>
          <span>that leave a </span>
          <span className="relative px-1">
            <span>positive impact</span>
            <span className="absolute w-full h-4 z-0 left-0 bottom-5 font-hightlight-green"></span>
          </span>
          {/* <span className="relative px-1">
            <span>Purple,</span>
            <span className="absolute w-11/12 h-4 z-0 left-0 bottom-5 font-hightlight-purple"></span>
          </span> */}
        </p>
      </div>

    </section>
  )
}

export default Hero;