import { GetStaticProps, GetStaticPaths } from 'next'
import Image from "next/image";
import { api } from "../../services/api";
import { useRouter } from 'next/router'
import { formatCurrency } from "../../utils/formatCurrency";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/car";

type Car = {
  id: string,
  name: string,
  marca: string,
  imgUrl: string,
  price: number
}

type Cars = {
  cars: Car[]
}

export default function Car({ cars }: Cars) {
  const { query } = useRouter()
  const id = query.id

  function addSales(props: string) {
    api
      .post('http://localhost:3332/purchase', {
        "id-car": props,
      })
  }

  return (
    <ProductContainer>
      {cars.filter(item => item.id === id).map(car => (
        <>
          <ProductDetails>
            <ImageContainer>
              <Image src={car.imgUrl} alt="" layout="fill" />
            </ImageContainer>
            <h1 key={car.id}>{car.name}</h1>
            <span>{car.marca}</span>
            <p>{formatCurrency(car.price)}</p>
            <button onClick={() => addSales(car.id)}>Comprar</button>
          </ProductDetails>
        </>
      ))}
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get('http://localhost:3332/cars')
  const cars = res.data

  return {
    props: {
      cars,
    },

    revalidate: 10, // In seconds
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get('http://localhost:3332/cars')
  const cars = res.data

  const paths = cars.map((car: Car) => ({
    params: { id: car.id },
  }))

  return { paths, fallback: 'blocking' }
}
