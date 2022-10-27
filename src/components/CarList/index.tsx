import Image from "next/image";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatCurrency } from "../../utils/formatCurrency";
import { Card, CardBox, Cards, Content, Info, Price, TextMedium, Title, Img } from "./styles";

type CarProps = {
  id: number,
  name: string,
  marca: string,
  imgUrl: string,
  price: number
}

export default function CarList() {
  const [cars, setCars] = useState<CarProps[]>([])
  console.log('cars: ', cars)

  async function buscaDados() {
    const response = await api.get('http://localhost:3332/cars')

    setCars(response.data)
  }

  useEffect(() => {
    buscaDados()
  }, [])

  return (
    <>
      <CardBox>
        <Cards>
          {cars.length
            ? (cars.map((car) => {
              return (
                <Link href={`/car/${car.id}`} key={car.id} prefetch={false}>
                  <Card >
                    <Img src={car.imgUrl} alt="" width={264} height={198} />
                    <Content>
                      <Title>
                        {car.name}
                      </Title>
                      <Info>
                        <TextMedium>{car.marca}</TextMedium>
                        <Price>{formatCurrency(car.price)}</Price>
                      </Info>
                    </Content>
                  </Card>
                </Link>

              )
            })
            ) : 'Nenhum Item encontrado'}

          {/* <Card>
            <Image src="/imgCard.jpg" alt="" width={264} height={198} />
            <Content>
              <Title>
                Formulário Animado com JS puro e CSS Animation | Mayk Brito
              </Title>
              <Info>
                <TextMedium>57 Min</TextMedium>
                <Price>Free</Price>
              </Info>
            </Content>
          </Card>
          <Card>
            <Image src="/imgCard.jpg" alt="" width={264} height={198} />
            <Content>
              <Title>
                Formulário Animado com JS puro e CSS Animation | Mayk Brito
              </Title>
              <Info>
                <TextMedium>57 Min</TextMedium>
                <Price>Free</Price>
              </Info>
            </Content>
          </Card>
          <Card>
            <Image src="/imgCard.jpg" alt="" width={264} height={198} />
            <Content>
              <Title>
                Formulário Animado com JS puro e CSS Animation | Mayk Brito
              </Title>
              <Info>
                <TextMedium>57 Min</TextMedium>
                <Price>Free</Price>
              </Info>
            </Content>
          </Card> */}
        </Cards>
      </CardBox>
    </>
  )
}