const shadow = (scale = 8) => {
  const d = Math.abs((8 * scale) / 8)
  const blur = Math.abs((14 * scale) / 8)
  const spread = -Math.abs((2 * scale) / 8)
  const inset = scale < 0 ? 'inset' : ''
  return [
    `${inset} ${d}px ${d}px ${blur}px ${spread}px hsla(231, 8%, 45%, 0.5)`,
    `${inset} ${-d}px ${-d}px ${blur}px ${spread}px white`
  ].join(', ')
}

const padding = 14

const common = {
  fontWeight: 'body',
  color: 'text',
  bg: 'background',
  padding,
  margin: 14,
  fontSize: 2,
  letterSpacing: '0.04em',
  height: 'min-content',

  '&:focus': {
    outline: 'none'
  }
}

const buttonCommon = {
  cursor: 'pointer',
  userSelect: 'none'
}

const squareButton = {
  ...common,
  ...buttonCommon,
  borderRadius: 'small',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 46,
  width: 46,
  padding: 0,
  boxShadow: shadow(8),
  '&:hover': {
    boxShadow: shadow(5)
  },
  '&:active': {
    boxShadow: shadow(-4),

    paddingTop: +1,
    paddingBottom: -1
  }
}

const input = {
  ...common,
  borderRadius: 'pill',
  border: 'none',
  boxShadow: shadow(-3),
  textAlign: 'center'
}

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
    secondary: '#40D9E7'
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
    primary: {
      ...common,
      ...buttonCommon,
      my: 18,
      borderRadius: 'pill',
      boxShadow: shadow(8),
      '&:hover': {
        boxShadow: shadow(5)
      },
      '&:active': {
        boxShadow: shadow(-4),
        paddingTop: padding + 2,
        paddingBottom: padding - 2
      }
    },
    square: squareButton,
    circular: { ...squareButton, borderRadius: 'pill' },
    bigsquare: {
      ...common,
      ...buttonCommon,
      my: 18,
      borderRadius: 'big',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 123,
      width: 123,
      padding: 0,
      boxShadow: shadow(8),
      '&:hover': {
        boxShadow: shadow(5)
      },
      '&:active': {
        boxShadow: shadow(-4),
        paddingTop: padding + 2,
        paddingBottom: padding - 2
      }
    }
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
