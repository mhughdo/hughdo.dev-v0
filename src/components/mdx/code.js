/** @jsx jsx */
import {jsx} from 'theme-ui'

const code = ({children, ...props}) => {
  return (
    <code
      sx={{
        fontSize: '60px',
        variant: 'code',
      }}
      {...props}>
      {children}
    </code>
  )
}

export default code
