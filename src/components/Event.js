/** @jsx jsx */
import {jsx, Text, Box} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'

const Event = () => {
  const data = useStaticQuery(graphql`
    query AllEvents {
      allMdx(filter: {fields: {collection: {eq: "event"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  const events = data.allMdx.edges

  return (
    <div>
      {events.map(event => {
        const {title, date} = event.node.frontmatter

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
            <Text
              sx={{
                fontSize: 3,
              }}>
              {title}
            </Text>
          </Box>
        )
      })}
    </div>
  )
}

export default Event
