import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const img = getImage(frontmatter.featured_image)
  return (
    <Layout>
      <Container>
        <div>
          <h1>{frontmatter.title}</h1>
        </div>
        <div>
          <GatsbyImage image={img} alt={frontmatter.title} />
        </div>
        <div dangerouslySetInnerHTML={{__html: html}} />        
      </Container>
    </Layout>
  )
}

export const Head = ({data}) => <Seo title={data.markdownRemark.frontmatter.title} />

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {        
        slug
        title
        featured_image {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.5, width: 600, placeholder: BLURRED)
        }
      }
      }
    }
  }
`