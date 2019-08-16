import React from 'react'
import { Link } from "gatsby"
import Divider from './partial/divider';
import Icon from './partial/icon'

function Hero() {
  return (
    <section className="flex-grow">
      <div className="flex">
        <div className="w-1/2">
          <div className="text-2xl text-gray-800 font-hairline p-48 mb-5">
            <h2 className="heading text-nord1 text-6xl">Hello, I'm Rahman.</h2>
            <h3 className="heading text-nord3 text-2xl">
              Full-Stack Software Developer
            </h3>
            <div>
              <span className="block my-5">
                I am a passionate developer with numerous years of experience, I
                love creating rich bespoke digital experiences on the internet
              </span>
              <span className="block my-5">
                I build open-source software in my free time and occasionaly
                blog on my experiences in tech
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Icon />
        </div>
      </div>

      <Divider />
    </section>
  )
}

export default Hero;