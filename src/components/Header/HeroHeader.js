/** @jsx jsx */
import {jsx, Box, Flex, Image, Text} from 'theme-ui'
import {motion} from 'framer-motion'
import Whale from '../../assets/images/whale.png'
import HeaderNav from '../HeaderNav'

const animatedTexts = ['Everything i find interesting', 'Technology', 'My journey', 'Tips and tricks']

const Header = () => {
  return (
    <Box
      sx={{
        height: ['240px', '240px', '400px'],
        background: theme => `linear-gradient( 0deg, ${theme.colors.homepageLight}, ${theme.colors.homepageDark})`,
        position: 'relative',
      }}>
      <Box
        sx={{
          width: '48px',
          height: '48px',
          display: ['none', 'none', 'block'],
        }}
      />
      <HeaderNav />
      <Box
        sx={{
          maxWidth: 'container',
          mt: 4,
          mx: 'auto',
          height: '60px',
          fontSize: [3, 4, 5],
        }}>
        <Text
          sx={{
            pl: [4, 5],
          }}>
          Hi, I'm Hung
        </Text>
        <Flex
          sx={{
            flexDirection: 'row',
          }}>
          <Text
            sx={{
              pl: [4, 5],
            }}>
            I write about
          </Text>
          <Box
            sx={{
              position: 'relative',
              display: 'block',
              // width: '100%',
              flex: '1 1 auto',
              height: '60px',
            }}>
            {animatedTexts.map((text, idx) => {
              return (
                <span
                  key={idx}
                  sx={{
                    position: 'absolute',
                    left: ['2%', '1%'],
                    top: ['-38%', '-45%', '-54%'],
                    animationName: 'slide-word',
                    animationDuration: `${animatedTexts.length * 1.8}s`,
                    animationTimingFunction: 'cubic-bezier(0.19,0.82,0.84,1.06)',
                    animationIterationCount: 'infinite',
                    animationDelay: `${idx * 1.8}s`,
                    opacity: 0,
                    overflow: 'hidden',
                    letterSpacing: '-1px',
                    whiteSpace: 'nowrap',
                    // fontSize: 5,
                    '@keyframes slide-word': {
                      '0%': {
                        opacity: 0,
                        transform: 'translate3d(0%, 25%, 0px)',
                        visibility: 'visible',
                      },
                      '0.9%': {
                        opacity: 1,
                        transform: 'translate3d(0%,75%,0px)',
                      },
                      '25%': {
                        opacity: 1,
                        transform: 'translate3d(0%,75%,0px)',
                        visibility: 'visible',
                      },
                      '27.5%': {
                        opacity: 0,
                        transform: 'translate3d(0%,135%,0px)',
                        visibility: 'hidden',
                      },
                      '100%': {
                        opacity: 0,
                        visibility: 'hidden',
                      },
                    },
                  }}>
                  {text}
                </span>
              )
            })}
          </Box>
        </Flex>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          display: 'block',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '90px',
        }}>
        <svg
          preserveAspectRatio='none'
          width='1440'
          height='74'
          viewBox='0 0 1440 74'
          sx={{
            fill: 'gray100',
            position: 'absolute',
            left: '-3%',
            right: '-3%',
            bottom: '0px',
            width: '106%',
            minWidth: '600px',
            transition: 'fill 350ms ease 0s',
          }}>
          <path d='M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z' />
        </svg>
      </Box>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        sx={{
          display: ['none', 'none', 'block'],
          position: 'absolute',
          left: [null, null, '65%'],
          top: [null, null, '250px'],
        }}>
        <Image
          sx={{
            width: '264px',
          }}
          src={Whale}
        />
      </motion.div>
    </Box>
  )
}

export default Header
