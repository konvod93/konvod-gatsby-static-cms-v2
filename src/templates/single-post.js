import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, featured_image } = data.markdownRemark.frontmatter
  const img = getImage(featured_image)
  return (
    <Layout>
      <Container>
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage image={img} alt={title} />
        </div>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </div>
      </Container>
    </Layout>
  )
}

export const Head = ({data}) => <Seo title={data.markdownRemark.frontmatter.title} />

export default SinglePost

export const query = graphql`
query PostQuery($url: String) {
  markdownRemark(frontmatter: {url: {eq: $url}}) {
    html
    frontmatter {
      title      
      featured_image {
        childImageSharp {
          gatsbyImageData(width: 600)
        }
      }
    }
  }
}
`