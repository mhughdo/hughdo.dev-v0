/** @jsx jsx */
import {jsx, Flex, Box} from 'theme-ui'
import React from 'react'
import './styles/FontFace.css'
import Footer from './Footer/Footer'
import HeroHeader from './Header/HeroHeader'
import HeaderNav from './HeaderNav'
import BlurGradient from './BlurGradient'

const Layout = ({children, hero = true, backgroundColor}) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      {hero ? (
        <HeroHeader />
      ) : (
        <>
          <HeaderNav backgroundColor={backgroundColor} sticky={true} />
          <BlurGradient backgroundColor={backgroundColor} />
        </>
      )}
      <Box
        sx={{
          flex: '1 1 0%',
          maxWidth: '100vw',
          transition: 'background 350ms ease 0s',
          overflow: 'hidden',
          background: theme => `${theme.colors[backgroundColor] || theme.colors.defaultBackground}`,
        }}>
        <Box
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: [4, 5],
          }}>
          {children}
        </Box>
      </Box>
      <Footer backgroundColor={backgroundColor} />
    </Flex>
  )
}

export default Layout
