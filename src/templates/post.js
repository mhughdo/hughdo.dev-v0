/** @jsx jsx */
import {jsx, Box, Text, Link as ThemeUILink} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Post = ({data, pageContext}) => {
  const post = data.mdx
  const {slug} = post.fields
  const {frontmatter, fileAbsolutePath, parent} = post
  const {image, description} = frontmatter
  const updatedDate = parent.modifiedTime
  const {previous, next, pathPrefix} = pageContext
  const editURL = `https://github.com/mhughdo/hughdo.dev/tree/master/src/${fileAbsolutePath.split('/src/')[1]}`
  const {siteUrl} = data.site.siteMetadata
  const path = `${siteUrl}${pathPrefix}${slug}`

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
          pb: 4,
          textAlign: 'center',
        }}>
        <Text
          sx={{
            fontSize: 7,
            fontWeight: 'medium',
          }}>
          {frontmatter.title}
        </Text>
        {description && (
          <Text
            sx={{
              fontSize: 4,
              color: 'gray700',
              mt: 4,
            }}>
            {description}
          </Text>
        )}
      </Box>
      {image?.childImageSharp && (
        <Box
          sx={{
            maxWidth: 'article',
            mx: 'auto',
          }}>
          <Img fluid={image.childImageSharp.fluid} />
        </Box>
      )}

      <main
        key={slug}
        sx={{
          maxWidth: 'article',
          mx: 'auto',
        }}>
        <article>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 6,
            color: 'gray600',
            fontWeight: 'normal',
          }}>
          <ThemeUILink
            sx={{
              variant: 'links.fakelink',
              py: 3,
              ':hover': {
                color: 'primary',
              },
            }}
            target='_blank'
            rel='noopener noreferrer'
            href={editURL}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              sx={{mr: 3}}
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
            </svg>
            Edit this page on GitHub
          </ThemeUILink>
          <span>
            Last updated: <time dateTime={updatedDate}>{updatedDate}</time>
          </span>
        </Box>
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
                    strokeWidth='0'
                    viewBox='0 0 24 24'
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
        siteUrl
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
        description
        image {
          ...ImageFields
        }
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
