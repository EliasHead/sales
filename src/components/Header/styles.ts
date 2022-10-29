import { styled } from '../../styles/index';

export const HeaderTag = styled('header', {
  backgroundColor: '#7159c1',

  
})

export const HeaderBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '90%',
  maxWidth: '980px',

  margin: 'auto',

  '@bp1': {
    display: 'none'
  }

})

export const ImageBox = styled('div', {
  marginLeft: '2rem',
  padding: '1.5rem 0',
})

export const HeaderUl = styled('ul', {
  display: 'flex',

  li: {
    listStyle: 'none',

    a: {
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '1.4rem', 
      padding: '2.4rem',
      transition: 'all 250ms linear 0s',

      '&:hover': {
        background: 'rgba(255,255,255, 0.15)',
      }
    }
  }
})

export const IsMobile = styled('section', {
  display: 'flex',
  justifyContent: 'right',
  paddingRight: '20px',

  '@bp4': {
    display: 'none'
  },
})
