import {Global, css} from '@emotion/core'

import React from 'react'
import fonts from './fonts'

const global = css``

const GlobalStyles = () => {
  return <Global styles={[global, fonts]} />
}

export default GlobalStyles
