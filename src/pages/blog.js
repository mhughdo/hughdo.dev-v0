/** @jsx jsx */
import {jsx, Box, AspectRatio, Text, Badge} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import colorMapper from '../utils/colorMapper'
import SEO from '../components/seo'

const Blog = ({data}) => {
  const posts = data.allMdx.edges

  return (
    <Layout hero={false} backgroundColor='subtleBackground'>
      <SEO title='Blog' />
      <main
        sx={{
          pt: 9,
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}>
          <h1
            sx={{
              fontSize: 7,
              fontWeight: 'medium',
              pb: 4,
            }}>
            Posts
          </h1>
          <span
            sx={{
              fontSize: 3,
            }}>
            {posts.length} Posts
          </span>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '32px',
            ml: -5,
            mr: -5,
          }}>
          {posts.map(({node}) => {
            const {id, frontmatter, excerpt, fields} = node
            const {slug} = fields
            const path = `/blog${slug}`
            const {title, date, category, image} = frontmatter
            console.log(frontmatter)

            return (
              <Box
                key={id}
                sx={{
                  background: theme => `${theme.colors.subtleFloating}`,
                  borderRadius: '8px',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    transition: 'all .25s cubic-bezier(.4,0,.2,1) 0s',
                  },
                }}>
                <article>
                  <Link
                    to={path}
                    sx={{
                      variant: 'links.fakelink',
                    }}>
                    <Box
                      sx={{
                        overflow: 'hidden',
                      }}>
                      {image?.childImageSharp && (
                        <AspectRatio ratio={16 / 9}>
                          <Img fluid={image.childImageSharp.fluid} />
                        </AspectRatio>
                      )}
                    </Box>
                    <Box
                      sx={{
                        p: 5,
                        pt: 4,
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                      <h3
                        sx={{
                          fontSize: 4,
                          m: 0,
                        }}>
                        {title}
                      </h3>
                      <Text
                        sx={{
                          color: 'gray600',
                          fontSize: 2,
                          m: 0,
                        }}>
                        {date}
                      </Text>
                      <p
                        sx={{
                          mt: 4,
                          fontWeight: 'normal',
                        }}>
                        {excerpt}
                      </p>
                      <Box
                        sx={{
                          alignSelf: 'flex-end',
                          '> :not(:last-child)': {
                            mr: 3,
                          },
                        }}>
                        {category &&
                          category.map(item => {
                            return (
                              <Badge
                                key={item}
                                sx={{
                                  backgroundColor: colorMapper[item],
                                  fontSize: 1,
                                  py: '5px',
                                  px: 2,
                                  borderRadius: '8px',
                                }}>
                                {item}
                              </Badge>
                            )
                          })}
                      </Box>
                    </Box>
                  </Link>
                </article>
              </Box>
            )
          })}
        </Box>
      </main>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query Blogs {
    allMdx(filter: {fields: {collection: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            description
            category
            image {
              ...ImageFields
            }
          }
          fields {
            slug
            collection
          }
        }
      }
    }
  }
`
