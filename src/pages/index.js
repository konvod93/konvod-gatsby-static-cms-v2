import * as React from "react"
import { Link, graphql, Script } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";

import { Container, Row, Col, Card } from "react-bootstrap"


const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Container>
        <h1 style={{ padding: `30px`, textAlign: `center` }}>
          Blog about travelings with Static CMS & Gatsby
        </h1>

        <Row className="g-4">
          {posts.map(post => {
            const title = post.frontmatter.title || post.slug
            return (            
            <Col lg={4} xs={12} sm={6} key={post.id}>
              <Card>
                <GatsbyImage
            image={getImage(post.frontmatter.featured_image)}
            alt={post.frontmatter.title}
            className="card-img-top"
            />
                <Card.Body>
                  <Card.Title>{post.frontmatter.title}</Card.Title>
                  <p style={{ fontFamily: `Roboto`, fontStyle: `italic` }}>{post.frontmatter.travel_dates}</p>
                  <p style={{ fontFamily: `Roboto`, fontWeight: `500` }}>Category: <span style={{fontFamily: `Roboto`, fontStyle: `italic`}}>{post.frontmatter.category}</span></p>
                  <Link to={post.fields.slug}>
                    Read <AiOutlineDoubleRight />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}
      

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
    nodes {
      id      
      fields {
        slug
      }
      frontmatter {
        category
        title
        travel_dates
        featured_image {
          childImageSharp {
            gatsbyImageData(width: 600, aspectRatio: 1.5)
          }
        }
      }
    }
  }
  }
`