import { Container } from './styles';
// import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import { X } from 'phosphor-react';

//@ts-ignore
export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    //@ts-ignore
    <Container isVisible={menuIsVisible}>
      <X size={45} color="white" onClick={() => setMenuIsVisible(false)}/>
      {/* <IoClose size={45} onClick={() => setMenuIsVisible(false)}/> */}
      <nav>
        <a href="#">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Sobre nós</a>
        <a href="#">Contato</a>
      </nav>
    </Container>
  )
}