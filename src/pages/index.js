import * as React from "react"
import { Link, graphql, Script } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Card } from "react-bootstrap"


const IndexPage = ({ data }) => ( 
 
  <Layout>
    
    <Container>
      <h1>Static CMS & Gatsby</h1>
      <ul>
        {data.fileInformation.edges.map(({ node }) => (
          <li key={node.id}>
            {node.base} | {node.prettySize}
          </li>
        ))}
      </ul>
     
      
      <Row className="g-4">
      {data.travelLocations.edges.map(({ node }) => (                        
        <Col lg={4} xs={6} key={node.id}>
          <Card>
          <GatsbyImage
            image={getImage(node.frontmatter.featured_image)}
            alt={node.frontmatter.title}
            className="card-img-top"
            />
            <Card.Body>
              <Card.Title>{node.frontmatter.title}</Card.Title>
              <p>{node.frontmatter.travel_dates}</p>
            </Card.Body>
          </Card>         
        </Col>
      ))}
      </Row>
    </Container>
  </Layout>
  
  )
      

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
    travelLocations:  allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
    edges {
      node {
        id
        frontmatter {
          travel_dates
          title
          featured_image {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 600)
            }
          }
        }
      }
    }
  }
  }
`