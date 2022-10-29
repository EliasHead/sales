import Image from "next/image";
import { ImgContainer, Introbox, IntroContainer } from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <Introbox>
        <div>
          <h2>
            As melhores ofertas da cidade, com planos personalizados para voocê.
          </h2>
          <p>
            Benefícios exclusivos, experiências únicas&nbsp;e as melhores vantagens para você viver&nbsp;uma história de amor com o seu carro...
          </p>
        </div>
        <ImgContainer>
          <Image className="img" src="/capa.png" alt="" width={400} height={213} />
        </ImgContainer>
      </Introbox>

    </IntroContainer>
  )
}