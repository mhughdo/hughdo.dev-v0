/** @jsx jsx */
import {jsx, Box, Text} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Tips = ({data}) => {
  const tips = data.allMdx.edges

  return (
    <Layout hero={false} backgroundColor='subtleBackground'>
      <SEO title='Tips' description='All tips' />
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
              m: 0,
              pl: [5, 5, 5, 5, '0px'],
              pb: 4,
            }}>
            Tips
          </h1>
          <span
            sx={{
              fontSize: 3,
              display: ['none', 'inline-block'],
              pr: 5,
            }}>
            {tips.length} Tips
          </span>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', 'repeat(auto-fill, minmax(400px, 1fr))'],
            gap: '32px',
            ml: [null, null, null, null, -5],
            mr: [null, null, null, null, -5],
          }}>
          {tips.map(({node}) => {
            const {id, frontmatter, excerpt, fields} = node
            const {slug} = fields
            const path = `/tip${slug}`
            const {title, date} = frontmatter
            // console.log(frontmatter)

            return (
              <Box
                key={id}
                sx={{
                  background: theme => `${theme.colors.subtleFloating}`,
                  borderRadius: '8px',
                  p: 5,
                  pl: [4, 5],
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
                      ':hover': {
                        h3: {
                          color: 'primary',
                        },
                      },
                    }}>
                    <Box
                      sx={{
                        overflow: 'hidden',
                      }}
                    />
                    <Box
                      sx={{
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
                      <Text>Read more →</Text>
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

export default Tips

export const pageQuery = graphql`
  query AllTips {
    allMdx(filter: {fields: {collection: {eq: "tip"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
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
