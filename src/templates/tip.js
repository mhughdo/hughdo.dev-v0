/** @jsx jsx */
import {jsx, Box, Text} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Tip = ({data, pageContext}) => {
  const tip = data.mdx
  const {slug} = tip.fields
  const {frontmatter} = tip
  const {title} = frontmatter
  const {previous, next, pathPrefix} = pageContext
  const {siteUrl} = data.site.siteMetadata
  const path = `${siteUrl}${pathPrefix}${slug}`

  return (
    <Layout hero={false} backgroundColor='background'>
      <SEO
        title={title}
        description={frontmatter.description || tip.excerpt}
        image={frontmatter?.image}
        pathname={path}
      />
      <Box
        sx={{
          pt: 8,
        }}>
        <main
          key={slug}
          sx={{
            maxWidth: 'article',
            mx: 'auto',
          }}>
          <h1
            sx={{
              textAlign: 'center',
              m: 0,
              fontSize: 7,
              mb: 8,
            }}>
            {title}
          </h1>
          <article>
            <MDXRenderer>{tip.body}</MDXRenderer>
          </article>
          <nav
            sx={{
              display: ['block', 'flex'],
              justifyContent: [null, 'space-between'],
              width: [null, '100%'],
              mt: 6,
            }}>
            <Box
              sx={{
                width: [null, '48%'],
              }}>
              {previous && (
                <Link
                  sx={{
                    variant: 'links.fakelink',
                  }}
                  to={`${pathPrefix}${previous.fields.slug}`}>
                  <p
                    sx={{
                      mb: 3,
                      mt: 0,
                      p: 0,
                      mx: 0,
                      fontWeight: 'normal',
                      color: 'gray600',
                    }}>
                    Previous
                  </p>
                  <span
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      color: 'primary',
                      ml: [null, null, -5],
                    }}>
                    <svg
                      sx={{
                        flexShrink: 0,
                        mr: '14px',
                        verticalAlign: 'middle',
                      }}
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
                    </svg>
                    {previous.frontmatter.title}
                  </span>
                </Link>
              )}
            </Box>
            <Box
              sx={{
                width: [null, '48%'],
                textAlign: 'right',
              }}>
              {next && (
                <Link
                  sx={{
                    variant: 'links.fakelink',
                  }}
                  rel='prev'
                  to={`${pathPrefix}${next.fields.slug}`}>
                  <p
                    sx={{
                      mb: 3,
                      mt: 0,
                      p: 0,
                      mx: 0,
                      fontWeight: 'normal',
                      color: 'gray600',
                    }}>
                    Next
                  </p>
                  <span
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      color: 'primary',
                      mr: [null, null, -5],
                    }}>
                    {next.frontmatter.title}
                    <svg
                      sx={{
                        verticalAlign: 'middle',
                        flexShrink: 0,
                        ml: '14px',
                      }}
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 24 24'
                      class='css-jmo9lw'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' />
                    </svg>
                  </span>
                </Link>
              )}
            </Box>
          </nav>
        </main>
      </Box>
    </Layout>
  )
}

export default Tip

export const pageQuery = graphql`
  query TipBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    mdx(fields: {slug: {eq: $slug}}) {
      id
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM DD, YYYY")
        }
      }
      body
    }
  }
`
