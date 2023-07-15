import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";

export default function AllCategories({ data }) {
  return (
    <Layout>
      <div>
        <h1>It Is Categories Page</h1>
        {data.allcategories.edges.map(({ node }) => (
            <p>{node.frontmatter.category}</p>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Categories" />

export const query = graphql`
  query {
    allcategories: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`