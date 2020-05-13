/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx, Box, Flex, NavLink} from 'theme-ui'
import MobileNav from './MobileNav'

const HeaderNav = ({fixed, backgroundColor}) => {
  return (
    <Box
      sx={{
        ...(backgroundColor && {backgroundColor}),
        ...(fixed && {
          position: 'fixed',
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
                fontWeight: 'normal',
                position: 'relative',
                ':hover': {
                  '::before': {
                    opacity: 1,
                    transform: 'scaleX(1)',
                  },
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
            <NavLink href='/blog' p={2}>
              Blog
            </NavLink>
            <NavLink href='/tips' p={2}>
              Tips
            </NavLink>
            <NavLink href='/about' p={2}>
              About
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default HeaderNav
