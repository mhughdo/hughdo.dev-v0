/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
import {graphql} from 'gatsby'

// import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Event from '../components/Event'
import Post from '../components/Post'

const Index = () => {
  return (
    <Layout>
      <SEO title='Homepage' />
      {/* <Bio /> */}
      <Box>
        <Post />
        <Event />
      </Box>
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
    #   allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    #     edges {
    #       node {
    #         excerpt
    #         fields {
    #           slug
    #         }
    #         frontmatter {
    #           date(formatString: "MMMM DD, YYYY")
    #           title
    #           description
    #         }
    #       }
    #     }
    #   }
  }
`
