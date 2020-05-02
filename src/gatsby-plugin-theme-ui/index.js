export default {
  breakpoints: ['640px', '768px', '1024px', '1200px'],
  space: [0, 4, 8, 10, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Jost, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#4433FF',
    secondary: '#e60067',
    tertiary: '#2c0b8e',
    muted: '#E2E8F0',
    homepageLight: '#D3EAF8',
    homepageDark: '#BFDEF2',
    bluredBackground: 'rgba(255, 255, 255, 0.85)',
    preBackground: '#f5f6f9',
    preText: '#2A2A2A',
    tokenComment: '#467790',
    tokenPunctuation: '#999',
    tokenFunction: '#3D5AFE',
    tokenProp: '#da0079',
    tokenName: '#AA00FF',
    tokenStr: '#651fff',
    tokenVal: '#78909C',
    tokenRegex: '#e90',
    tokenHightlight: '#e9ebf2',
    tokenBool: '#bf00b8',
    tokenDel: '#c8b8f9',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text',
    },
  },
  sizes: {
    container: '1100px',
    nav: '60px',
  },
  links: {
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: '60px',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
      '.token.comment,.token.prolog,.token.doctype, .token.cdata': {
        color: 'tokenComment',
      },
      '.token.punctuation': {
        color: 'tokenPunctuation',
      },
      '.token.class-name, .token.tag, .token.constant, .token.parameter, .token.tag.punctiation, .token.template-string.interpolation.constant': {
        color: 'tokenProp',
      },
      '.token.function': {
        color: '#3D5AFE',
      },
      '.token.selector, .token.attr-name, .token.char, .token.builtin, .token.inserted, .token.script-punctuation': {
        color: 'tokenName',
      },
      '.token.keyword, .token.operator, .token.entity, .token.dom.variable, .token.variable, .token.dom, .token.string, .token.script.string, .token.template-string.template-punctuation, .token.template-string, .token.tag.string, .token.tag.operator, .token.url,.language-css.token.string,.style.token.string': {
        color: 'tokenStr',
      },
      '.token.attr-value, .token.atrule': {
        color: 'tokenVal',
      },
      '.token.regex, .token.important': {
        color: 'tokenRegex',
      },
      '.token.number, .token.boolean, .token.property, .token.symbol, .token.deleted': {
        color: 'tokenBool',
      },
      '.token.namespace': {
        opacity: '.7',
      },
      '.token.important, .token.bold': {
        fontWeight: 'bold',
      },
      '.token.italic': {
        fontStyle: 'italic',
      },

      '.token.entity': {
        cursor: 'help',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}
