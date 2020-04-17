import React from 'react'
import {graphql} from 'gatsby'

// import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Index = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title='Homepage' />
      {/* <Bio /> */}
      This is Homepage
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
