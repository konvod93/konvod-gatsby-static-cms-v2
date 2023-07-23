
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const singlePost = path.resolve(`./src/templates/single-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const singlePost = path.resolve('./src/templates/single-post.js')

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  

  const posts = result.data.allMarkdownRemark.nodes 
    
  if (posts.length > 0) {
    posts.forEach((post) => {
      

      createPage({
        path: post.fields.slug,
        component: singlePost,
        context: {
          id: post.id,          
        },
      })
    })
  }
}
  
/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      
    }

    type Fields {
      slug: String
    }
  `)
}

const express= require('express');

exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}