---
title: "Showcase #1 - Visualise your life with this cool handy tool"
date: "2021-02-21T15:00:00.000Z"
description: This is the first project I built that I will use to kickoff the new 'Showcase' series with. I had several targets for this year and one of them was to build more user facing projects that I can use as part of my poftofolio. I will talk about what I built and how to use it yourself.
tags: 2021, showcase, visualise, data, age, life
image: "./assets/logo.png"
---
### What is the Showcase Series 🎙🎨

The `Showcase` series is something new that I'm trying introduce to my blog, it will be my first attempt at starting a dedicated series of posts. The aim is to fulfill one of the targets that I set out for myself in 2021. I discussed in my [2020 review](/blog/2020-in-review-and-plans-for-2021/) how I build a lot of cool stuff that never gets seen by most people. Often developers can see the code on my github repositories but not how it actually looks when put together in the end. I plan to change this by hosting those projects publicly and writing a short post on them. I can use services like [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com) to host my projects for free, so there's nothing to hold me back.

### Visualise your life 🎩✨

`Life in Weeks` is a tool I built that takes your date of birth and an approximate life expectancy value. Using this it calculates your age in weeks and then allows you to visualise how much of your life you have lived so far, and how much you have left against the chosen life expectancy. It uses the canvas API to build a beautiful visualistion of 52 boxes for each week in a single year. These rows are repeated for the number of years you chose as your life expectancy. It will colour in all the boxes that are in the past and will show you how many are left.

![A screenshot of `Life In weeks` that I built](./assets/life-in-weeks.png)

It can be a great way to visualise where you currently are in life and motivate you to achive greater heights. The idea was based off a video I saw on social media where someone had purchased a [poster](https://4kweeks.com/products/poster) with the exact same idea and they would colour in each week as they passed. I found it a great and interesting concept that I thought would be easy to build and be awesome to play around with. This is why as a Software Enginner I had to build my own 🛠. The aim of this tool is only to motivate and push people to make the most of their lives.

This project was a great chance for me to hack around with new technologies, so I used [Svelte](https://svelte.dev/) to create it. I have seen a lot of praise for `Svelete` as a new and upcoming underdog in the frontend space, so this was a great chance for me to get first hand experience with it. I also got the chance to use `Rollup` as my bundler instead of `Webpack`, as well as using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to do more complex stuff than I had ever done in the past. 

I chose to use the [Svelte TypeScript starter template](https://github.com/sveltejs/template) and quickly found it quite limiting and felt like it wasn't adding any benefit. It seemed more like a hiderance more than anything, so I decided to rip out the [TypeScript](https://www.typescriptlang.org/) and use it with regular JS. The whole project was really fun to build and I enjoyed my short time working with these new technologies. I am proudly hosting the tool on Netlify and it can be accessed [here](https://life-in-weeks.netlify.com), it is fully open-source so the repository is available on my [Github](https://github.com/rahman95/life-in-weeks). Any contributions and feedback on this project are welcomed and apprciated. 🤝