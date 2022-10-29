import { styled } from '../../styles/index';

export const Container = styled('section', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(3px)',

  background: '$gray900',
  // background: 'linear-gradient(34deg, rgba(25,88,24,0.95) 0%, rgba(17,18,17,0.95) 95%)',

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateY(0px)',

        '> svg': {
          transform: 'rotate(0deg)',
        },

        nav: {
          transform: 'scale(1)',
        }
      }
    }
  },

  opacity: '0',
  pointerEvents: 'none',
  transform: 'translateY(50px)',

  transition: '.5s',

  svg: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    transform: 'rotate(45deg)',
    transition: '.7s',
  },
})

export const NavContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',
  transform: 'scale(0.7)',
  transition: '0.7s',
  fontSize: '2.4rem',
})
