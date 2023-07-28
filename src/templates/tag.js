import React from "react"
import { graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostsList from "../components/PostsList"

const CategoryTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  return (
    <Layout>
      <Seo title={tag}/>
      <Container className="m-4">      
        <Row className="g-4">
          <PostsList posts={data.allMarkdownRemark.nodes} />
        </Row>
      </Container>
    </Layout>
  )
}

// export const Head = ({category}) => <Seo title={{category}} />

export default CategoryTemplate


export const pageQuery = graphql`
query TagPage($tag: String) {
  site {
      siteMetadata {
        title
      }
    }
  allMarkdownRemark(filter: {fields: {tags: {in: [$tag]}}}) {
    nodes {
      fields {
        slug
        tags
      }
      frontmatter {
        title
        travel_dates
        featured_image {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.5, width: 600, formats: [AUTO, AVIF], placeholder: BLURRED)
          }
        }
        category        
      }
    }
  }
}
`