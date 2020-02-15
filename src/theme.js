import { darken, lighten } from '@theme-ui/color'

const shadow = (scale = 8) => {
  const d = Math.abs((8 * scale) / 8)
  const blur = Math.abs((12 * scale) / 8)
  const spread = -Math.abs((2 * scale) / 8)
  const inset = scale < 0 ? 'inset' : ''
  return [
    `${inset} ${d}px ${d}px ${blur}px ${spread}px hsla(231, 8%, 45%, 0.5)`,
    `${inset} ${-d}px ${-d}px ${blur}px ${spread}px white`
  ].join(', ')
}

////////////////////////////////////////
// buttons
const padding = 14

const common = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontWeight: 'body',
  color: 'text',
  background: 'linear-gradient(90deg, #F1F1F3, #E5E5EA)',
  padding,
  margin: 14,
  fontSize: 2,
  letterSpacing: '0.04em',
  height: 'min-content',

  // spacing between text and icon
  'svg + span, span + svg': {
    ml: 2
  },
  svg: {
    display: 'block'
  },

  '&:focus': {
    outline: 'none'
  }
}

const buttonCommon = {
  cursor: 'pointer',
  userSelect: 'none'
}

const primaryButton = {
  ...common,
  ...buttonCommon,
  mx: 18,
  borderRadius: 'pill',
  boxShadow: shadow(8),
  '&:hover': {
    boxShadow: shadow(5),
    bg: darken('background', 0.01)
  },
  '&:active': {
    boxShadow: shadow(-4),
    bg: darken('background', 0.04),
    // move text down
    paddingTop: padding + 2,
    paddingBottom: padding - 2
  }
}

const squareButton = {
  ...common,
  ...buttonCommon,
  borderRadius: 'small',
  height: 46,
  width: 46,
  padding: 0,
  boxShadow: shadow(6),
  '&:hover': {
    boxShadow: shadow(5),
    bg: darken('background', 0.01)
  },
  '&:active': {
    boxShadow: shadow(-3),
    bg: darken('background', 0.04),

    paddingTop: +1,
    paddingBottom: -1
  }
}

const circularButton = {
  ...squareButton,
  borderRadius: 'pill',
  color: 'gray'
}

const bigSquareButton = {
  ...common,
  ...buttonCommon,
  my: 18,
  borderRadius: 'big',
  height: 123,
  width: 123,
  padding: 0,
  boxShadow: shadow(8),
  '&:hover': {
    boxShadow: shadow(5),
    bg: darken('background', 0.01)
  },
  '&:active': {
    boxShadow: shadow(-4),
    bg: darken('background', 0.04),
    // move text down
    paddingTop: padding + 2,
    paddingBottom: padding - 2
  }
}

////////////////////////////////////////
// input

const input = {
  ...common,
  borderRadius: 'pill',
  border: 'none',
  boxShadow: shadow(-3),
  textAlign: 'center'
}

////////////////////////////////////////
// theme

export default {
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: 'inherit'
  },
  colors: {
    text: '#707281',
    background: '#EBECF0',
    primary: '#1B5BF3',
    secondary: '#40D9E7',
    gray: '#8B92A5' // used for circular buttons
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  radii: {
    pill: 1000,
    small: 11,
    big: 21
  },
  buttons: {
    primary: primaryButton,
    square: squareButton,
    circular: circularButton,
    bigsquare: bigSquareButton
  },
  forms: {
    input: {
      ...input,
      maxWidth: 'max-content'
    },
    search: {
      ...input,
      textAlign: 'left',
      textIndent: '40px'
    }
  }
}
