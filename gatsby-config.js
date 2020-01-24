module.exports = {
  siteMetadata: {
    title: `RYounus`,
    author: `Rahman Younus`,
    description: `My experiences as a Full-stack Software Developer`,
    siteUrl: `https://ryounus.dev/`,
    social: {
      twitter: `rahmancodes`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-acronyms`,
            options: {
              acronyms: {
                CSS: `Cascading Style Sheets`,
                HTML: `Hypertext Markup Language`,
                PHP: `Hypertext Preprocessor`,
                JS: `JavaScript`,
                TS: `TypeScript`,
                FOMO: `Fear Of Missing Out`,
                "R&D": `Research & Development`,
                "In'sha'Allah": `God willing`,
                Alhamdulilah: `All the praise and thanks be to God`,
              },
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-a11y-emoji`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      //PWA manifest
      options: {
        name: `RYounus Site`,
        short_name: `RYounus`,
        description: `My experiences as a Full-stack Software Developer`,
        start_url: `/`,
        background_color: `#E5E9F0`,
        theme_color: `#434C5E`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // Todo: Update the correct icon when ready
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
