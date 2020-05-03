/** @jsx jsx */
import {jsx, Flex, Box} from 'theme-ui'
import GlobalStyles from './styles/GlobalStyles'
// import 'normalize.css'
import Footer from './footer/Footer'
import Header from './header/Header'

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
            pt: 6,
            px: [4, 5],
          }}>
          {children}
        </Box>
      </main>
      <Footer />
    </Flex>
  )
}

export default Layout
