import Image from 'next/image';
import { css, styled } from '../../styles/index';

export const CardBox = styled('main', {
  marginBottom: '8rem',
})

export const Cards = styled('section', {
  width: '90%',
  maxWidth: '980px',
  margin: 'auto',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gridGap: '20px',
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#7159c1',
  cursor: 'pointer',
  transition: 'all 0.3s ease 0s',
  borderRadius: '8px',

  '&:hover': {
    transform: 'translateY(-7px)',
  }
})


export const ImageBox = styled('div', {
  width: 'auto%',
  // paddingTop: '56.25%', /* 16:9 */

  overflow: 'hidden',
  position: 'relative',

})

export const Content = styled('div', {
  margin: '20px'
})

export const TextMedium = styled('p', {
  fontSize: '1.6rem',
  lineHeight: '2.6rem',
  fontWeight: 400,
  color: '#ecf0f1',
})

export const Title = styled(TextMedium, {
  marginBottom: '20px',
  fontWeight: 'bold',
})

export const Info = styled('div', {
  display: 'flex',
  alignSelf: 'end',
  alignItems: 'center',
})

export const Price = styled(TextMedium, {
  marginLeft: 'auto',
  padding: '5px 20px',
  borderRadius: '20px',
  backgroundColor: '#7159c1',
  filter: 'brightness(90%)',
})

export const Img = styled(Image, {
  width: "100%"
})

