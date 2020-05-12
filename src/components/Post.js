/** @jsx jsx */
import {jsx, Text, Box} from 'theme-ui'
import {Link} from 'gatsby'

const Post = ({node}) => {
  const {frontmatter, excerpt, fields} = node
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
        <Text>Read more →</Text>
      </Link>
    </Box>
  )
}

export default Post
