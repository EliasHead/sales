import { HeaderBox, HeaderTag, HeaderUl, ImageBox, IsMobile } from "./styles";

import Image from "next/image";
import { List } from "phosphor-react";
import Link from 'next/link'

//@ts-ignore
export default function Header({ handleSetMenuIsVisible }) {

  return (
    <HeaderTag>
      <HeaderBox>
        <ImageBox>
          <Image
            src="/LogoCar.svg"
            alt=""
            width={100}
            height={32}
          />
        </ImageBox>

        <nav>
          <HeaderUl>
            <li>
              <Link href="#">Sobre</Link>
            </li>
            <li>
              <Link href="#">Nossa lojas</Link>
            </li>
            <li>
              <Link href="#">Contatos</Link>
            </li>
          
          </HeaderUl>
        </nav>

      </HeaderBox>
      <IsMobile>
        <List size={32} color="#ffffff" onClick={() => handleSetMenuIsVisible()} />
      </IsMobile>
    </HeaderTag>
  )
}