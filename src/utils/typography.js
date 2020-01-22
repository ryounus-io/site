import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
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
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const css = typography.toString()
