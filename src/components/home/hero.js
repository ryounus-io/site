import React from 'react'
import { Link } from "gatsby"

function Hero() {
  return (
    <section className="flex-grow">
      <div className="text-2xl text-gray-800 font-hairline py-64 px-48">
        <h2 className="heading text-nord1 text-6xl">Hello, I'm Rahman.</h2>
        <h3 className="heading text-nord3 text-2xl">Full-Stack Software Developer</h3>
        <div>
          <span className="block my-5">
            I am a passionate developer with numerous years of experience, I love creating rich bespoke digital experiences on the internet
          </span>
          <span className="block my-5">
            I build open-source software in my free time and occasionaly blog on my experiences in tech
          </span>
        </div>
      </div>

      <svg className="divider-wrapper" viewBox="0 0 1920 250" xmlns="http://www.w3.org/2000/svg">
        <path className="wave1" d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239" ></path>
        <path className="wave2" d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z" ></path>
        <path className="wave3" d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z"></path>
      </svg>
    </section>
  )
}

export default Hero;