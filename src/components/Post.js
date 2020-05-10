/** @jsx jsx */
import {jsx, Text, Box} from 'theme-ui'
import {useStaticQuery, Link, graphql} from 'gatsby'

const Event = () => {
  const data = useStaticQuery(graphql`
    query AllPosts {
      allMdx(filter: {fields: {collection: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges

  return (
    <div>
      {posts.map(post => {
        const {frontmatter, excerpt, fields} = post.node
        const {title, description, date} = frontmatter
        const {slug} = fields

        return (
          <Box
            key={title}
            sx={{
              backgroundColor: 'background',
              border: theme => `1px ${theme.colors.gray300} solid`,
              py: 4,
              px: 4,
              mb: 3,
            }}>
            <Text
              sx={{
                backgroundColor: 'gray300',
                p: 1,
                fontSize: 0,
                fontWeight: 'medium',
                display: 'inline-block',
              }}>
              {date}
            </Text>
            <Link
              to={slug}
              sx={{
                variant: 'links.fakelink',
                ':hover': {
                  h3: {
                    color: 'primary',
                  },
                },
              }}>
              <h3
                sx={{
                  fontWeight: 'medium',
                  fontSize: 4,
                  color: 'inherit',
                  m: 0,
                }}>
                {title}
              </h3>
              {description && (
                <Text
                  sx={{
                    fontWeight: 'medium',
                    color: 'gray600',
                  }}>
                  {description}
                </Text>
              )}
              <p
                sx={{
                  my: 4,
                  fontWeight: 'body',
                }}>
                {excerpt}
              </p>
              <Link
                sx={{
                  variant: 'links.fakelink',
                }}
                to={slug}>
                Read more →
              </Link>
            </Link>
          </Box>
        )
      })}
    </div>
  )
}

export default Event
