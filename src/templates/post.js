/** @jsx jsx */
import {jsx, Box, Text} from 'theme-ui'
import {graphql} from 'gatsby'

import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Post = ({data, pageContext}) => {
  const post = data.mdx
  const {slug} = post.fields
  const {frontmatter} = post
  const siteTitle = data.site.siteMetadata.title
  const {previous, next, pathPrefix} = pageContext
  const path = `${pathPrefix}${slug}`

  return (
    <Layout hero={false} backgroundColor='background'>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
        image={frontmatter?.image}
        pathname={path}
      />
      <Box
        sx={{
          pt: 8,
          px: [4, 5],
          pb: 7,
          textAlign: 'center',
        }}>
        <Text
          sx={{
            fontSize: 7,
            fontWeight: 'medium',
          }}>
          {frontmatter.title}
        </Text>
      </Box>
      <main
        key={slug}
        sx={{
          maxWidth: 'article',
          mx: 'auto',
        }}>
        <article>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      </main>

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
      fields {
        slug
      }
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
