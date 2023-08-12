/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react";
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import '../fonts/Roboto-Bold.ttf';
import '../fonts/Roboto-Italic.ttf';
import '../fonts/Roboto-Light.ttf';
import '../fonts/Roboto-Medium.ttf';
import '../fonts/Roboto-Regular.ttf';
import { SocialIcon } from "react-social-icons";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const socials = [
    {
      network: "facebook",
      url: "https://facebook.com",
    },
    {
      network: "telegram",
      url: "https://t.me",
    },
    {
      network: "instagram",
      url: "https://instagram.com",
    },
    {
      network: "twitter",
      url: "https://twitter.com",
    },
    {
      network: "linkedin",
      url: "https://linkedin.com",
    },
    {
      network: "pinterest",
      url: "https://pinterest.com",
    },
    {
      network: "github",
      url: "https://github.com",
    },
    {
      network: "gitlab",
      url: "https://gitlab.com",
    },
    {
      network: "youtube",
      url: "https://youtube.com",
    },
  ]

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const socIconStyle = {
    height: isHover ? 30 : 20,
    width: isHover ? 30 : 20,
    margin: 5,
    cursor: "pointer",
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer
        style={{
          boxSizing: `border-box`,
          width: `100%`,
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          backgroundColor: `black`,
          color: `white`,
          opacity: `0.9`,
          marginTop: `80px`,
          paddingTop: `10px`,
          paddingBottom: `10px`,
        }}
      >
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          {socials.map(social => {
            return (
              <div>
                <SocialIcon
                  url={social.url}
                  network={social.network}
                  style={socIconStyle}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                />
              </div>
            )
          })}
        </div>
        <div
          style={{
            marginTop: `10px`,
            marginLeft: `10px`,
            marginRight: `10px`,
          }}
        >
          <div style={{ textAlign: `center` }}>
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            {` `}
          </div>
          <div
            style={{ textAlign: `end`, fontSize: `x-small`, marginTop: `10px` }}
          >
            Background image from
            {` `}
            <a href="https://ru.freepik.com/free-vector/white-abstract-background_11852424.htm#query=%D1%84%D0%BE%D0%BD%D0%B4%D0%BB%D1%8F%D1%81%D0%B0%D0%B9%D1%82%D0%B0&position=5&from_view=keyword&track=ais#position=5&query=%D1%84%D0%BE%D0%BD%D0%B4%D0%BB%D1%8F%D1%81%D0%B0%D0%B9%D1%82%D0%B0?log-in=google">
              Freepik
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
