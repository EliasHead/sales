import { styled } from '../../styles/index'

export const IntroContainer = styled('section', {
  margin: '80px 0',
})

export const Introbox = styled('div', {
  width: '90%',
  maxWidth: '980px',

  margin: 'auto',
  display: 'flex',
  // flexDirection: {media: { @initial: 'row', @bp1: 'column'}},
  justifyContent: 'space-between',

  '@bp1': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  div: {
    width: '100%',

    h2: {
      color: 'rgb(75, 75, 75)',
      fontSize: '3.6rem',
      lineHeight: '4.6rem',

      '@bp1': {
        marginTop: '2rem',
        fontSize: '2.8rem',
        lineHeight: '3.4rem',
      },
    },

    p: {
      color: 'gray100',
      fontSize: '1.8rem',
      lineHeight: '3.2rem',
      margin: '2rem 0px 0px',
    },

  },

})

export const ImgContainer = styled('div', {
  '@bp1': {
    order: -1,
    display: 'flex',
    justifyContent: 'center',
  },

})
