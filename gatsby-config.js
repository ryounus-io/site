module.exports = {
  siteMetadata: {
    title: `RYounus`,
    author: `Rahman Younus`,
    description: `My experiences as a Software Developer`,
    siteUrl: `https://ryounus.dev/`,
    icon: `https://ryounus.dev/assets/icon.png`,
    social: {
      twitter: `rahmancodes`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
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
              showCaptions: true,
              maxWidth: 650,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              align: `center`,
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
        trackingId: `UA-78805173-1`,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      //PWA manifest
      options: {
        name: `RYounus Site`,
        short_name: `RYounus`,
        description: `My experiences as a Software Developer`,
        start_url: `/`,
        background_color: `#E5E9F0`,
        theme_color: `#434C5E`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // Todo: Update the correct icon when ready
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
  ],
}
