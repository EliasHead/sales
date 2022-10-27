import { css, styled } from '../../styles/index'

export const IntroContainer = styled('section', {
  margin: '80px 0',
})

export const Introbox = styled('div', {
  width: '90%',
  maxWidth: '980px',

  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    width: '45%',

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

// export const TitleContainer = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   padding: '0px',
//   gap: '1rem',

//   position: 'absolute',
//   width: '36.75rem',
//   height: '12rem',
//   left: '10rem',
//   top: '5.875rem',
// })

// export const Title = styled('h1', {
//   width: '36.75rem',
//   height: '7.75rem',

//   fontFamily: 'Baloo 2',
//   fontWeight: 800,
//   fontStyle: 'normal',
//   fontSize: '3rem',
//   lineHeight: '130%',

//   color: '#272221',

//   flex: 'none',
//   order: 0,
//   alignSelf: 'stretch',
//   flexGrow: 0,
// })

// export const SubTitle = styled('h3', {
//   width: '36.75rem',
//   height: '3.25rem',

//   fontSamily: 'Roboto',
//   fontWeight: 400,
//   fontSize: '1.25rem',
//   fontStretch: 100,
//   lineHeight: '130%',

//   flex: 'none',
//   order: 1,
//   alignSelf: 'stretch',
//   flexGrow: 0,
// })

// export const ItemsContainer = styled('div', {
//   position: 'absolute',
//   width: '35.4375rem',
//   height: '5.25rem',
//   marginTop: '22rem',
//   marginLeft: '10rem',
// })

// export const BaseItem = styled('div', {
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   padding: 0,
//   gap: '0.75rem',

//   position: 'absolute',
//   height: '2rem',
// })

// export const Item1 = styled(BaseItem, {
//   width: '14.4375rem',
//   marginLeft: '0px',
//   marginTop: '0px',

//   div: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '0.5rem',
//     gap: '0.5rem',

//     width: 32,
//     height: 32,

//     background: '#C47F17',
//     borderRadius: '1000px',

//     svg: {
//       color: 'white',
//     },

//     span: {
//       fontWeight: 400,
//       fontSize: '1rem',
//       lineHeight: '130%',
//       color: '#574F4D',
//     }
//   }
// })

// export const Item2 = styled(BaseItem, {
//   width: '14.4375rem',
//   marginLeft: '0px',
//   marginTop: '3.25rem',

//   div: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '0.5rem',
//     gap: '0.5rem',

//     width: 32,
//     height: 32,

//     background: '#DBAC2C',
//     borderRadius: '1000px',

//     svg: {
//       color: 'white',
//     },

//     span: {
//       fontWeight: '400',
//       fontSize: '1rem',
//       lineHeight: '130%',
//       color: '#574F4D',
//     }
//   }
// })

// export const Item3 = styled(BaseItem, {
//   width: '18.375rem',
//   marginLeft: '16.9375rem',
//   marginTop: '0px',

//   div: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '0.5rem',
//     gap: '0.5rem',

//     width: 32,
//     height: 32,

//     background: '#574F4D',
//     borderRadius: '1000px',

//     svg: {
//       color: 'white',
//     },

//     span: {
//       fontWeight: 400,
//       fontSize: '1rem',
//       lineHeight: '130%',
//       color: '574F4D',
//     }
//   }
// })

// export const Item4 = styled(BaseItem, {
//   width: '18.375rem',
//   marginLeft: '16.9375rem',
//   marginTop: '3.25rem',

//   div: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '0.5rem',
//     gap: '0.5rem',

//     width: 32,
//     height: 32,

//     background: '#8047F8',
//     borderRadius: '1000px',

//     svg: {
//       color: 'white',
//     },

//     span: {
//       fontWeight: 400,
//       fontSize: '1rem',
//       lineHeight: '130%',
//       color: '#574F4D',
//     }
//   }
// })