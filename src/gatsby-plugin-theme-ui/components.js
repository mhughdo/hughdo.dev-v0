import Prism from '@theme-ui/prism'
import React from 'react'
import Pre from '../components/mdx/pre'

const components = {
  pre: props => <Pre {...props} />,
  code: Prism,
}
export default components
