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

// h2 {
//   color: rgb(75, 75, 75);
//   font-size: 3.6rem;
//   line-height: 4.6rem;
// }

// h3 {
//   color: rgb(75, 75, 75);
//   font-size: 2.8rem;
//   line-height: 3.8rem;
// }

// .button {
//   display: inline-block;
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: rgb(255, 255, 255);
//   background-color: rgb(113, 89, 193);
//   margin: 15px 0px 0px;
//   padding: 12px 30px;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: all 150ms linear 0s;
// }

// .button:hover {
//   opacity: 0.9;
// }
