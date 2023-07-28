import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import TagsList from "../components/TagsList"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, category, featured_image } = data.markdownRemark.frontmatter
  const { tags } = data.markdownRemark.fields
  const img = getImage(featured_image)
  
  return (
    <Layout>
      <Container>
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage image={img} alt={title} />
        </div>
        <div style={{marginTop: "20px", fontStyle: "italic"}}>
          <p>{data.markdownRemark.frontmatter.travel_dates}</p>          
        </div>
        <div>
          <p style={{fontStyle: "italic"}}>Category: <Link to={`/category/${category}`}>{category}</Link></p>
        </div>
        <div dangerouslySetInnerHTML={{__html: html}} className="postbox"/>
        <div style={{marginBottom: `50px`}}>
          <TagsList tags={tags} />
        </div>
      </div>
      </Container>
    </Layout>
  )
}

export const Head = ({data}) => <Seo title={data.markdownRemark.frontmatter.title} />

export default SinglePost

export const pageQuery = graphql`
query PostQuery($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    fields {
      slug
      tags
    }
    frontmatter {
      title
      category
      travel_dates
      featured_image {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.5, width: 600, placeholder: BLURRED)
        }
      }
    }
  }
}
`