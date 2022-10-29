import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 980,
  width: '90%',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '90%',
  position: 'sticky',
  maxWidth: 350,
  height: 213,
  borderRadius: 8,
  padding: '0.25rem',
  margin: 'auto',
  objectFit: 'cover'
})

export const ProductDetails = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  maxWidth: 600,
  margin: '100px auto 0',
  borderRadius: 8,

  background: '$gray800',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    alignSelf: 'center'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    alignSelf: 'center',
    color: '$green300',
  },

  p: {
    marginTop: '1rem',
    marginBottom: '2rem',
    fontSize: '$xl',
    lineHeight: 1.6,
    alignSelf: 'center',
    color: '$gray300',
  },

  button: {
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 20,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-alloowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },

  '@bo1': {
    margin: 'auto',
  }
})