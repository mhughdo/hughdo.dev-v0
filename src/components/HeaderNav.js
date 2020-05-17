/** @jsx jsx */
import {jsx, Box, Flex, Text} from 'theme-ui'
import {Link} from 'gatsby'
import MobileNav from './MobileNav'

const HeaderNav = ({sticky, backgroundColor}) => {
  return (
    <Box
      sx={{
        ...(backgroundColor && {
          background: theme => `${theme.colors[backgroundColor] || theme.colors.defaultBackground}`,
        }),
        ...(sticky && {
          position: 'sticky',
          top: 0,
          zIndex: 3,
          transition: 'all 350ms ease 0s',
          width: '100%',
        }),
      }}>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 'container',
          mx: 'auto',
          height: '60px',
          px: [4, 5],
        }}>
        <Flex
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}>
          <Link
            to='/'
            sx={{
              fontSize: [4],
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'primary',
            }}>
            Hugh Do
          </Link>
          <MobileNav />
          <Flex
            as='nav'
            sx={{
              display: ['none', 'none', 'block'],
              '& > a': {
                margin: 3,
                position: 'relative',
                display: 'inline-block',
                variant: 'links.fakelink',
                '&[aria-current]': {
                  variant: 'activeLink',
                },
                ':hover': {
                  cursor: 'pointer',
                  variant: 'activeLink',
                },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  borderRadius: '4px',
                  backgroundColor: 'primary',
                  bottom: '0px',
                  left: '0px',
                  // px: '1',
                  opacity: 0,
                  transform: 'scaleX(0)',
                  transition: 'all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)',
                },
              },
            }}>
            <Link to='/blog/'>
              <Text p={3}>Blog</Text>
            </Link>
            <Link to='/tips/'>
              <Text p={3}>Tips</Text>
            </Link>
            <Link to='/about/'>
              <Text p={3}>About</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default HeaderNav
