/** @jsx jsx */
import {jsx, Box, Flex, Text, Link} from 'theme-ui'
import {AiFillGithub, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'

const Footer = ({backgroundColor}) => {
  return (
    <footer>
      <Box
        sx={{
          ...(backgroundColor
            ? {background: theme => `${theme.colors[backgroundColor] || theme.colors.defaultBackground}`}
            : {
                background: theme =>
                  `linear-gradient( 0deg, ${theme.colors.homepageLight}, ${theme.colors.homepageDark})`,
              }),
        }}>
        <Flex
          sx={{
            flexDirection: 'column',
            maxWidth: 'container',
            mx: 'auto',
            padding: 4,
            alignItems: 'center',
          }}>
          <Text>
            Made with{' '}
            <span role='img' aria-label='heart'>
              ❤️
            </span>
            ,{' '}
            <span role='img' aria-label='fire'>
              🔥
            </span>
            , and a{' '}
            <span role='img' aria-label='laptop'>
              💻
            </span>
          </Text>
          <Box>
            <Link
              href='https://www.facebook.com/mhughdo'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'text',
                fontSize: 4,
                p: 2,
              }}>
              <AiFillFacebook
                sx={{
                  ':hover': {
                    fill: '#4267B2',
                    transition: 'all 300ms ease-in',
                  },
                }}
              />
            </Link>
            <Link
              href='https://github.com/mhughdo'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'text',
                fontSize: 4,
              }}>
              <AiFillGithub />
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'text',
                fontSize: 4,
                p: 2,
              }}
              href='https://twitter.com/mhughdo'>
              <AiOutlineTwitter
                sx={{
                  ':hover': {
                    fill: '#1da0f2',
                    transition: 'all 300ms ease-in',
                  },
                }}
              />
            </Link>
          </Box>
          <Text
            sx={{
              fontSize: 1,
            }}>
            © 2020 Hung Do
          </Text>
        </Flex>
      </Box>
    </footer>
  )
}

export default Footer
