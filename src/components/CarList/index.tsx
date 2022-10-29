import Link from 'next/link'
import { useContext } from "react";
import { CarConstext } from "../../context/CarContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { Card, CardBox, Cards, Content, Info, Price, TextMedium, Title, Img } from "./styles";

export default function CarList() {
  const { cars } = useContext(CarConstext)

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
        </Cards>
      </CardBox>
    </>
  )
}