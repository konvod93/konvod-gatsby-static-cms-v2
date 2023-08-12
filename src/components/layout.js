/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          <div>
            <SocialIcon url="#" network="facebook" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="telegram" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="instagram" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="twitter" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="linkedin" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="pinterest" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="github" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="gitlab" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
          <div>
            <SocialIcon url="#" network="youtube" style={{ height: 20, width: 20, margin: 5}}/>
          </div>
        </div>
        <div
          style={{  
            marginTop: `10px`,          
            marginLeft: `10px`,
            marginRight: `10px`,            
          }}
        >
          <div style={{ textAlign: `center`}}>
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            {` `}
          </div>
          <div style={{ textAlign: `end`, fontSize: `x-small`, marginTop: `10px`}}>
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
