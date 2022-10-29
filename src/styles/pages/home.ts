import { styled } from "..";

import * as LabelPrimitive from '@radix-ui/react-label';

import { pixelToRem } from '../../utils/pixelTorem'

export const Container = styled('div', {
  maxWidth: '440px',
  padding: '0 20px',
  margin: '170px auto',
})

export const Wrapper = styled('div', {
  width: '100%',
  background: '#fff',
  borderRadius: '5px',
  boxShadow: '0px 4px 10px 1px rgba(0,0,0,0.1)',
})

export const Title = styled('div', {
  height: '90px',
  background: '#16a085',
  borderRadius: '5px 5px 0 0',
  color: '#fff',
  fontSize: '30px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const FormCotainer = styled('form', {
  //  minHeight: '100vh',
  width: '100%',
  padding: '0 0.5rem',
  background: 'white',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  //  height: '100vh',
})

export const Input = styled('input', {
  // width: '100%',
  all: 'unset',
  width: '90%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: 'Black',
  // background: '$gray100',
  // backgroundColor: '$gray800',
  boxShadow: 'rgba(0, 0, 0, 0.44) 0px 0px 0px 1px',
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const Label = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: 'Black',
  userSelect: 'none',
});

export const Button = styled('button', {
  width: '10rem',
  height: '4.1rem',
  display: 'inline-block',
  padding: '0.3rem 1.2rem',
  backgroundColor: '#16a085',
  color: 'white', 
  borderRadius: '8px',
  boxSizing: 'border-box',
  border: 'none',
  fontSize: '20px',
  fontWeight: 600,
  textAlign: 'center',
  transition: '0.2s',
  cursor: 'pointer',
  margin: '20px 0 20px 0',
})
