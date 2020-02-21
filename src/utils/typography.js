import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "@media (prefers-color-scheme: dark)": {
      body: {
        color: `var(--nord4)`,
      },
      blockquote: {
        color: `var(--nord5)`,
        "border-left-color": `var(--nord3)`,
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
      color: `var(--nord10)`,
      fontWeight: `bold`,
      textDecoration: `none`,
      cursor: `help`,
      borderBottom: `3px dotted var(--nord10)`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const css = typography.toString()
