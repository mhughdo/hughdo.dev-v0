import React from 'react'
import {Link, graphql} from 'gatsby'

import {MDXRenderer} from 'gatsby-plugin-mdx'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Post = ({data, pageContext, location}) => {
  const post = data.mdx
  const {frontmatter} = post
  const siteTitle = data.site.siteMetadata.title
  const {previous, next} = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
        image={frontmatter?.image?.publicURL}
        pathname={frontmatter.slug}
      />
      <MDXRenderer>{post.body}</MDXRenderer>

      {/* <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: {slug: {eq: $slug}}) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        image {
          ...ImageFields
        }
      }
      body
    }
  }
`
