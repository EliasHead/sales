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
  width: '100%',
  maxWidth: 576,
  height: 400,
  background: '$gray800',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: 100,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }

})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-around',
  height: 400,
  width: 600,
  margin: '100px auto 0',
  borderRadius: 8,

  background: '$gray800',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    marginTop: '5rem',
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
    margin: '0 4rem',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-alloowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },
})