import React from "react"
import Helmet from "react-helmet"

function Analytics() {
  const nodeEnv = process.env.NODE_ENV
  const configEnv = process.env.GATSBY_ACTIVE_ENV || nodeEnv
  const isProduction = configEnv === 'production'

  return (
    <Helmet>
        {isProduction && 
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e961d1871034878aaf946457de7ce97"}'></script>
        }
    </Helmet>
  )
}

export default Analytics
