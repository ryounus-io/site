---
title: Implementing Dark mode is a breeze in Tailwind
date: "2020-02-24T15:00:00.000Z"
description: How I very quickly and efficiently added dark mode support to my site
---
> Disclaimer: I like to consider myself more of backend developer than frontend, but I don’t shy away from frontend work I actually find it quite fun and challenging. This post is based on my personal experience on styling my site and the lessons I learnt. I’m sure there are other ways this could’ve been implemented and they maybe even better than my approach, but this works quite well for me.

**TL;DR** I implemented Dark mode using Tailwind relatively easily and in an expressive manner via a dark mode breakpoint I added.

The eager eyed amongst you may have had a look under the hood of my website and seen what tech it’s built up on, you don’t need to look far to see the utility first approach I have taken to my CSS.

Before I dive into my implementation of dark mode, I will dedicate some time to explaining my approach on styling on this site. 😬

### Why Tailwind

Tailwind CSS is a utility-first CSS framework for rapidly building custom solutions, it is relatively new and recently received its first 1.0 release. To those who may not be familiar with what a utility first approach is, pretty much all the classes you will need already exists. For example, there are width and height utilities available which have an incremental approach allowing you to use classes in your mark-up that look like this

```html
<div class="d-block bg-white h-10 w-5 p-5"></div>
```

So, in the above code block, I have applied several utilities to the div, all applied as several separated utility classes. In a more traditional setting, you would need define your own classes with all those properties, give those a name and then use them for this div. You may not see a big benefit in having all the utility classes pre-defined but what it allows you to do is rapidly build and prototype interfaces.

This utility first approach can lead to long and ugly class names in your mark up, but it allows you to develop really quick and efficiently without writing any custom CSS. I believe it’s one of those concepts that you have to try out for yourself to appreciate.

In the Tailwind Docs, Adam Wathan, the creator of Tailwind, has specifically created a page on utility first and outlined all its benefits and criticisms, I would recommended doing some further reading [here]( https://tailwindcss.com/docs/utility-first)

My whole site uses this approach to styling and because of it I have had to use very little custom CSS. Pretty much all of it is predefined for me to use by Tailwind. Below is a snippet of my hero component on my site

```html
<h2 class="heading text-nord-1 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Hello, I'm Rahman.
</h2>
<h3 class="heading text-nord-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Full-Stack Software Developer.
</h3>
```

As you can see I have quite a few classes in my mark up, it leads to a more expressive way of styling as you know exactly what each class brings. As you can also see from the example all my breakpoints are also defined so when they apply the browser will automatically apply those. It’s actually quite powerful in what it brings, no more messing with your naming scheme for classes, no need for large custom CSS files and no more slow development.

### What is Dark mode

Dark mode support simply adds a darker variant of the interface that will not use lighter colours, the colours chosen should be easier on the eye and aim to reduce strain. 

Dark mode support for websites and apps has slowly been rolling out, more and more apps are now using it. I think one of the first apps that I encountered with dark mode support was the twitter app, they were quite early to implement it. Most social media platforms have now released dark mode support. I personally love dark mode as it reduces strain on my eyes especially at night, no more blaring white light trying to blind me 😂

On the web, most browsers now support dark mode via a [media query]( https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). This now allows you to define media queries to choose the correct colour based on the end users system setting on dark mode. If you have a look at the browser adoption on [CanIUse]( https://caniuse.com/#feat=prefers-color-scheme) it is looking really good, most browsers now have support for it out of the box.

### My implementation

My inspiration for adding Dark mode on my website was based on a tweet I saw where someone had quite easily achieved it on tailwind via a custom screen/breakpoint in the config. I tried to search for the tweet but can no longer find it now.

So the kicker to this whole implementation is one simple addition the default tailwind config file, I simply added one more screen on top of the default ones already available.

```javascript
module.exports = {
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
}
```

That one line addition under the extend screens object is all that’s needed, it basically allows us to separate our utilities based on that breakpoint. So if the media query applies it will apply those styles otherwise default to the existing ones.

```html
<div class="bg-white dark:bg-grey"> 
```

Above is an example of how it would look when its implemented, the default background is white but if the media query applied it would use grey as the background instead. As you can imagine this makes implementing dark mode a breeze as all I need to do is simply just add a dark class to each element in the mark-up. This is super quick, expressive and simple to implement.

