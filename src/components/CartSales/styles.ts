import { styled } from '../../styles/index'

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgb(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  borderRadius: '6px',
  padding: '2.5rem 3rem',
  backgroundColor: '#fafafa',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})
  
export const TotalContainer = styled('div', {
  marginTop: '2rem',
  fontWeight: 'bold',

  textAlign: 'end',
})