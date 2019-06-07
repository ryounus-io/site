import React from 'react'
import { Link } from "gatsby"

function Hero() {
  return (
    <section className="container flex-grow">
      <p className="text-2xl text-gray-800 font-hairline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <span className="relative px-1">
          <span>Green,</span>
          <span className="absolute w-11/12 h-4 z-0 left-0 bottom-5 font-hightlight-green"></span>
        </span>
        <span className="relative px-1">
          <span>Blue,</span>
          <span className="absolute w-11/12 h-4 z-0 left-0 bottom-5 font-hightlight-blue"></span>
        </span>
        <span className="relative px-1">
          <span>Red,</span>
          <span className="absolute w-11/12 h-4 z-0 left-0 bottom-5 font-hightlight-red"></span>
        </span>
        <span className="relative px-1">
          <span>Yellow,</span>
          <span className="absolute w-11/12 h-4 z-0 left-0 bottom-5 font-hightlight-yellow"></span>
        </span>
        <span className="relative px-1">
          <span>Purple,</span>
          <span className="absolute w-11/12 h-4 z-0 left-0 bottom-5 font-hightlight-purple"></span>
        </span>
      </p>

    </section>
  )
}

export default Hero;