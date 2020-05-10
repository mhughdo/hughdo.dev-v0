/** @jsx jsx */
import {jsx, Flex, Box} from 'theme-ui'
// import GlobalStyles from './styles/GlobalStyles'
// import 'normalize.css'
import './styles/FontFace.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({children}) => {
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
          backgroundColor: 'gray100',
        }}>
        <Header />
        <main sx={{}}>
          <Box
            sx={{
              maxWidth: 'article',
              mx: 'auto',
              pt: 6,
              px: [4, 5],
            }}>
            {children}
          </Box>
        </main>
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
