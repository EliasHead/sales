import { CarContainer } from "./styles";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useRouter } from 'next/router'
import { formatCurrency } from "../../utils/formatCurrency";
import { CarConstext, CarProvider } from "../../context/CarContext";
import { Key } from "phosphor-react";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/car";

type Car = {
  id: string,
  name: string,
  marca: string,
  imgUrl: string,
  price: number
}

export default function Car() {
  const { query } = useRouter()
  const id = query.id

  const { cars } = useContext(CarConstext)

  console.log('cars:', cars, typeof (cars))

  const car = cars.filter((car => car.id === id))
  console.log('car', car)

  return (
    <ProductContainer>
      {cars.filter(item => item.id === id).map(car => (
        <>
          <ProductDetails>
            <Image src={car.imgUrl} alt="" width={200} height={106} />
            <h1 key={car.id}>{car.name}</h1>
            <span>{car.marca}</span>
            <p>{formatCurrency(car.price)}</p>
            <button>Comprar</button>
          </ProductDetails>
        </>
      ))}
    </ProductContainer>
  )
}