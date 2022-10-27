import { styled } from '../../styles/index';

export const CarContainer = styled('div', {
  width: '90%',
  maxWidth: '980px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    width: '45%',
    marginTop: '40px',

    h2: {
      color: 'rgb(75, 75, 75)',
      fontSize: '3.6rem',
      lineHeight: '4.6rem',
    },

    p: {
      color: 'rgb(154, 142, 191)',
      fontSize: '1.8rem',
      lineHeight: '3.2rem',
      margin: '2rem 0px 0px',
    },
  }
})

