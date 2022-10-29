import { Container, NavContainer } from './styles';
import { useEffect } from 'react';
import { X } from 'phosphor-react';
import Link from 'next/link'

//@ts-ignore
export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    //@ts-ignore
    <Container isVisible={menuIsVisible}>
      <X size={45} color="white" onClick={() => setMenuIsVisible(false)}/>
      <NavContainer>
        <Link href="#">Home</Link>
        <Link href="#">Produtos</Link>
        <Link href="#">Sobre nós</Link>
        <Link href="#">Contato</Link>
      </NavContainer>
    </Container>
  )
}