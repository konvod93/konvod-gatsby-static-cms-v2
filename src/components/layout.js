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
          display: `flex`,
          boxSizing: `border-box`,
          width: `100%`,
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          backgroundColor: `black`,
          color: `white`,
          position: `fixed`,
          bottom: `0`,
          opacity: `0.9`,
          padding: `10px`,
        }}
      >
        
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        Background image from
        {` `}
        <a href="https://ru.freepik.com/free-vector/white-abstract-background_11852424.htm#query=%D1%84%D0%BE%D0%BD%D0%B4%D0%BB%D1%8F%D1%81%D0%B0%D0%B9%D1%82%D0%B0&position=5&from_view=keyword&track=ais#position=5&query=%D1%84%D0%BE%D0%BD%D0%B4%D0%BB%D1%8F%D1%81%D0%B0%D0%B9%D1%82%D0%B0?log-in=google">Freepik</a>
      </footer>
    </>
  )
}

export default Layout
