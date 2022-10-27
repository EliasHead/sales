import Image from "next/image";
import { Introbox, IntroContainer } from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <Introbox>
        <div>
          <h2>
            As melhores tecnologias em programação, direto ao ponto e do jeito certo.
          </h2>
          <p>
            No meio de tanta informação e da quantidade de ferramentas que
            surgem todos os dias, você precisa de alguém que te leve na direção certa.
          </p>
        </div>
        <div>
          <Image className="img" src="/melhores-tecnologias.svg" alt="" width={362} height={427} />
        </div>
      </Introbox>
      
    </IntroContainer>
  )
}