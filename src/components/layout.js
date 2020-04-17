import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import {Flex, Box} from 'theme-ui'
import GlobalStyles from './styles/GlobalStyles'
import 'normalize.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({children}) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <GlobalStyles />
      <Header />
      <main>
        <Box
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            // px: 4,
          }}>
          {children}
        </Box>
      </main>
      <Footer />
    </Flex>
  )
}

export default Layout
