import { HeaderBox, HeaderTag, HeaderUl, ImageBox } from "./styles";

import Image from "next/image";
import { Car } from "phosphor-react";


export default function Header() {
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
    </HeaderTag>
  )
}