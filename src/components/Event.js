/** @jsx jsx */
import {jsx, Text, Box} from 'theme-ui'

const Event = ({node}) => {
  const {title, date} = node.frontmatter

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
}

export default Event
