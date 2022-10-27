import { styled } from '../../styles/index'
import Link from "next/link";
import Image from "next/future/image";

export const NavBarContainer = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 10rem',

  width: '90rem',
  height: '6.5rem',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex - end',
  alignItems: 'center',
  padding: '0px',
  gap: '0.75rem',

  width: '12rem',
  height: '2.5rem',

  /* Inside auto layout */

  flex: 'none',
  order: 1,
  flexGrow: 0,
})

export const LocationContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  gap: '0.25rem',

  width: '8.9375rem',
  height: '2.375rem',

  /* Brand/Purple Light */

  background: 'Purple',
  borderRadius: '0.375rem',

  /* Inside auto layout */

  flex: 'none',
  order: 0,
  flexGrow: 0,

  span: {
    lineHeight: '130%',
    color: 'purple',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '0.875rem',
  },
})

export const CartContainer = styled('button', {
  width: '2.375rem',
  height: '2.375rem',
  border: 'none',
  background: 'yellow',
  borderRadius: '0.375rem',

  div: {
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '50%',
    background: 'red',
    color: 'white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  color: 'black',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray300',
    color: '$gray100',
    transition: '2s',
  },

})