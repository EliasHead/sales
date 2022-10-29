import { HeaderBox, HeaderTag, HeaderUl, ImageBox, IsMobile } from "./styles";

import Image from "next/image";
import { List } from "phosphor-react";

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
              <a href="#">Starter</a>
            </li>
            <li>
              <a href="#">Bootcamp</a>
            </li>
            <li>
              <a href="#">Comunidade</a>
            </li>
            <li>
              <a href="#">Blog</a>
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