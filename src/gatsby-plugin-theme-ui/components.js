import React from 'react'
import Pre from '../components/mdx/pre'
import A from '../components/mdx/a'
import Code from '../components/mdx/code'
import Ul from '../components/mdx/ul'

const components = {
  pre: props => <Pre {...props} />,
  code: props => <Code {...props} />,
  a: props => <A {...props} />,
  ul: props => <Ul {...props} />,
}
export default components
