import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "@media (prefers-color-scheme: dark)": {
      body: {
        color: `var(--nord-4)`,
      },
      blockquote: {
        color: `var(--nord-5)`,
        "border-left-color": `var(--nord-3)`,
      },
    },

    "h2.heading": {
      marginTop: `0rem`,
    },
    "h3.heading": {
      marginTop: `0rem`,
    },
    "h5.sub-heading": {
      marginTop: `0rem`,
    },
    "a.no-underline": {
      textDecoration: `none`,
      boxShadow: `none`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "abbr[title]": {
      color: `var(--nord-10)`,
      fontWeight: `bold`,
      textDecoration: `none`,
      cursor: `help`,
      borderBottom: `3px dotted var(--nord-10)`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

export const rhythm = typography.rhythm
export const scale = typography.scale
export const css = typography.toString()
