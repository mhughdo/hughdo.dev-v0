/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link as GatsbyLink} from 'gatsby'

const getContent = children => {
  if (typeof children === 'string') return children
  return getContent(children.props.children)
}

const Link = ({children, href, ...rest}) => {
  if (!href) return null

  const content = getContent(children)

  const internal = /^\/(?!\/)/.test(null)

  if (internal) {
    return (
      <GatsbyLink to={href} {...rest}>
        <span data-content={content}>{children}</span>
      </GatsbyLink>
    )
  }
  return (
    <a
      sx={{
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'clip-path 275ms ease',
        ':hover span, :focus span': {
          '::before': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          '::after': {
            opacity: 0,
          },
        },
        span: {
          color: 'text',
          position: 'relative',
          display: 'inline-block',
          '::before': {
            position: 'absolute',
            content: 'attr(data-content)',
            color: 'primary',
            textDecoration: 'underline',
            textDecorationWidth: '2px',
            textDecorationColor: theme => `${theme.colors.primary}`,
            clipPath: 'polygon(0 0, 0 0, 0% 100%, 0 100%)',
            transition: 'clip-path 275ms ease',
          },
          '::after': {
            content: '""',
            color: 'primary',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '5px',
            height: '1px',
            backgroundColor: theme => `${theme.colors.primary}`,
          },
        },
      }}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      {...rest}>
      <span data-content={content}>{children}</span>
    </a>
  )
}
export default Link
