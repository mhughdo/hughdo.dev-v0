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
      {/* <GlobalStyles /> */}
      <Box
        sx={{
          flex: '1 1 auto',
          backgroundColor: `${backgroundColor || 'gray100'}`,
        }}>
        {hero ? (
          <HeroHeader />
        ) : (
          <>
            <HeaderNav backgroundColor={backgroundColor} fixed={true} />
            <BlurGradient />
          </>
        )}
        <main sx={{}}>
          <Box
            sx={{
              maxWidth: 'container',
              mx: 'auto',
              pt: 6,
              px: [4, 5],
            }}>
            {children}
          </Box>
        </main>
      </Box>
      <Footer backgroundColor={backgroundColor} />
    </Flex>
  )
}

export default Layout
