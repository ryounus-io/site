import React from "react"

import HeroIcon from "../../assets/heroIcon.svg"

function Hero() {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <div className="text-gray-800 font-hairline px-8 py-4 sm:px-10 sm:py-10 md:px-12 md:py-10 lg:px-20 lg:py-16 xl:px-32 xl:py-40 xl:mb-5">
            <h2 className="heading text-nord1 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Hello, I'm Rahman.
            </h2>
            <h3 className="heading text-nord3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Full-Stack Software Developer.
            </h3>
            <div>
              <span className="block my-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                I am a passionate developer with numerous years of experience. I
                love creating rich and bespoke digital experiences on the
                internet.
              </span>
              <span className="block my-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                I build open-source software in my free time and occasionaly
                blog on my experiences in tech.
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/2 flex justify-center items-center">
          <HeroIcon />
        </div>
      </div>
    </section>
  )
}

export default Hero
