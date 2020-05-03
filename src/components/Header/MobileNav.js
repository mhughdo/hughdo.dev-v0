/** @jsx jsx */
import {jsx, Box, Button, Flex} from 'theme-ui'
import {useState, useEffect, useRef} from 'react'
import {Link} from 'gatsby'

const MobileNav = () => {
  const [isToggledOn, setToggle] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

  useEffect(() => {
    setTimeout(() => {
      setMobileNav(isToggledOn)
    }, 300)
  }, [isToggledOn])

  return (
    <Box
      sx={{
        display: ['block', 'block', 'none'],
      }}>
      <Button
        sx={{
          display: 'block',
          margin: 0,
          padding: 0,
          border: 'medium none',
          background: 'transparent none repeat scroll 0% 0%',
          width: '36px',
          height: '36px',
          position: 'relative',
          cursor: 'pointer',
          top: '5px',
          zIndex: 10000,
        }}
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}>
        <svg
          sx={{
            width: '30px',
            height: '30px',
          }}>
          <line
            sx={{
              stroke: theme => `${theme.colors.text}`,
              strokeWidth: 3,
              transition: 'transform 350ms ease',
              ...(isToggledOn && {transform: 'translate(8px, 0px) rotate(45deg)'}),
            }}
            x1='0'
            y1='5'
            x2='30'
            y2='5'
            stroke-linecap='round'
          />

          <line
            sx={{
              stroke: theme => `${theme.colors.text}`,
              strokeWidth: 3,
              transition: 'transform 350ms ease',
              transform: `${isToggledOn ? 'translateX(-105%)' : 'translateX(0)'}`,
            }}
            x1='30'
            y1='15'
            x2='0'
            y2='15'
            stroke-linecap='round'
          />
          <line
            sx={{
              stroke: theme => `${theme.colors.text}`,
              strokeWidth: 3,
              transition: 'transform 350ms ease',
              ...(isToggledOn && {transform: 'translate(-12px, 7px) rotate(-45deg)'}),
            }}
            x1='30'
            y1='25'
            x2='0'
            y2='25'
            stroke-linecap='round'
          />
        </svg>
      </Button>
      {/* TODO using react portal */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 9999,
          ...(!mobileNav && {visibility: 'hidden'}),
          ...(isToggledOn && {visibility: 'visible'}),
        }}>
        <Box
          sx={{
            m: 0,
            p: 0,
            display: 'block',
            position: 'absolute',
            zIndex: 1,
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            width: '100vw',
            height: '100vh',
            opacity: `${isToggledOn ? 1 : 0}`,
            transition: 'opacity 500ms ease 0ms',
            background: theme => `${theme.colors.bluredBackground}`,
          }}
        />
        <Flex
          as='nav'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            height: '80%',
            fontSize: 5,
            zIndex: 2,
            '& > div': {
              width: '100%',
              padding: 4,
              textAlign: 'center',
              transform: 'translateX(100%)',
              transitionProperty: 'transform',
              transitionDuration: `${isToggledOn ? '500ms' : '200ms'}`,
              transitionTimingFunction: 'ease',
              ...(isToggledOn && {transform: 'translateX(0%)'}),
            },
            '&  a': {
              margin: 3,
              p: 2,
              fontWeight: 'normal',
              position: 'relative',
              color: 'text',
              textDecoration: 'none',
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
                opacity: 0,
                transform: 'scaleX(0)',
                transition: 'all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)',
              },
            },
          }}>
          <Box>
            <Link to='/blog'>Blog</Link>
          </Box>
          <Box
            sx={{
              transitionDelay: '0.1s',
            }}>
            <Link to='/tips'>Tips</Link>
          </Box>
          <Box
            sx={{
              transitionDelay: '0.2s',
            }}>
            <Link to='/about'>About</Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default MobileNav
