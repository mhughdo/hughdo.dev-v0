/* eslint-disable no-shadow */
/** @jsx jsx */

import {jsx, Box} from 'theme-ui'

import {preToCodeBlock} from 'mdx-utils'
import Highlight, {defaultProps} from 'prism-react-renderer'
import colorMapper from '../../utils/colorMapper'

const Code = props => {
  const codeProps = preToCodeBlock(props)

  // unknown code
  if (!codeProps) {
    return <pre {...props} />
  }

  const {codeString, language} = codeProps

  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => {
        return (
          <pre
            sx={{
              variant: 'prism-highlight',
              m: 0,
              position: 'relative',
              '::before': {
                content: `"${language}"`,
                color: 'language',
                position: 'absolute',
                left: '0px',
                top: '0px',
                textAlign: 'right',
                textTransform: 'uppercase',
                borderRadius: '0px 0px 4px 4px',
                background: theme => `${theme.colors[colorMapper[language]] || 'preBackground'} `,
                fontSize: 2,
                letterSpacing: '0.075em',
                lineHeight: '1',
                py: 1,
                px: 2,
              },
            }}>
            <Box
              sx={{
                mt: 5,
                mb: 7,
              }}>
              <Box
                sx={{
                  borderRadius: '6px',
                  maxWidth: ['100vw', '100vw', '100vw', 'calc(-16px + 100vw)'],
                  maxHeight: '75vh',
                  overflow: 'auto',
                  mx: [-4, -5],
                  pt: 5,
                  pb: [4, 5],
                  px: [4, 5],
                  background: theme => `${theme.colors.preBackground}`,
                }}>
                {tokens.map((line, i) => {
                  const {style, ...lineProps} = getLineProps({line, key: i})
                  return (
                    <div
                      sx={{
                        fontSize: [1, 2],
                      }}
                      {...lineProps}>
                      {line.map((token, key) => {
                        const {style, ...tokenProps} = getTokenProps({token, key})
                        return <span {...tokenProps} />
                      })}
                    </div>
                  )
                })}
              </Box>
            </Box>
          </pre>
        )
      }}
    </Highlight>
  )
}

export default Code
