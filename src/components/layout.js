/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import '../fonts/Roboto-Bold.ttf';
import '../fonts/Roboto-Italic.ttf';
import '../fonts/Roboto-Light.ttf';
import '../fonts/Roboto-Medium.ttf';
import '../fonts/Roboto-Regular.ttf';
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { socials } from "../data/socdata"


const Footer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  font-size: var(--font-sm);
  background-color: black;
  color: white;
  opacity: 0.9;
  margin-top: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const SocBlock = styled.div`
  display: flex;
  justify-content: center;
`

const CopyWright = styled.div`
 margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`


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
  
  const socIconStyle = {
    height: 20,
    width: 20,
    margin: 5,    
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer>
        <SocBlock>
          {socials?.map(social => {
            return (
              <div key={social.id}>
                <SocialIcon
                  url={social.url}
                  network={social.network} 
                  style={socIconStyle}                                                  
                />
              </div>
            )
          })}
        </SocBlock>
        <CopyWright>
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
        </CopyWright>
      </Footer>
    </>
  )
}

export default Layout
