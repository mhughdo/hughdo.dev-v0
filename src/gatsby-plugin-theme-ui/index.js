export default {
  breakpoints: ['640px', '768px', '1024px', '1200px'],
  space: [0, 4, 8, 10, 16, 32, 48, 64, 128, 256, 512],
  fonts: {
    body: 'Jost, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000000',
    language: '#232129',
    background: '#ffffff',
    primary: '#4433FF',
    secondary: '#e60067',
    tertiary: '#2c0b8e',
    muted: '#E2E8F0',
    gray700: '#5a6072',
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
    JS: '#f7de1e',
    TS: '#007acc',
    JSX: '#61dafb',
    TSX: '#007acc',
    CSS: '#264de4',
    GRAPHQL: '#e10098',
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
    article: '800px',
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
      // BUG using custom Code component and code in styles object not working
      code: {
        variant: 'code',
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6,
      mt: 4,
      mb: 3,
      pt: 5,
      pb: 3,
      lineHeight: '1.35',
    },
    h2: {
      variant: 'text.heading',
      lineHeight: 'body',
      fontWeight: 'medium',
      color: 'tertiary',
      mt: 6,
      mb: 4,
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontWeight: 'medium',
      mt: 5,
      mb: 3,
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontWeight: 'medium',
      mt: 4,
      mb: 3,
      fontSize: 3,
    },
    p: {
      fontSize: 3,
      mb: 5,
    },
    code: {
      variant: 'code',
    },
    ol: {
      li: {
        display: 'flex',
        alignItems: 'baseline',
        counterIncrement: 'muffins',
        mb: 3,
        '::before': {
          content: 'counter(muffins) ". "',
          color: 'primary',
          pr: 3,
          fontWeight: 'medium',
          fontFeatureSettings: 'tnum',
        },
      },
      p: 0,
      mt: 0,
      mb: 5,
      listStyle: 'none',
      counterReset: 'muffins',
    },
    ul: {
      variant: 'ul',
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
  'prism-highlight': {
    fontFamily: 'monospace',
    'div.token-line': {
      color: 'preText',
      fontSize: 2,
    },
    '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
      color: 'tokenComment',
    },
    '.token.punctuation': {
      color: 'inherit',
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
    '.token.keyword, .token.url, .token.operator, .token.entity, .token.variable, .token.dom, .token.string, .token.template-string, .token.template-punctuation, .token.language-css.string, .token.style.string': {
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
    fontSize: '0.8em',
    padding: '2px 6px',
    letterSpacing: '-0.5px',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '-1px',
      right: '-1px',
      opacity: '0.15',
      backgroundColor: 'gray700',
      borderRadius: '3px',
    },
  },
  ul: {
    mt: 0,
    mb: 5,
    p: 0,
    fontSize: 3,
    listStyle: 'none',
    li: {
      mb: 4,
      display: 'flex',
      alignItems: 'baseline',
    },
  },
}
