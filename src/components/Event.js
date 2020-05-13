/** @jsx jsx */
import {jsx, Text} from 'theme-ui'
import {motion} from 'framer-motion'

const Event = ({node}) => {
  const {title, date} = node.frontmatter

  return (
    <motion.div
      initial={{scale: 0.6, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      exit={{scale: 0.6, opacity: 0}}
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
    </motion.div>
  )
}

export default Event
