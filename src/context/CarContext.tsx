import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

type Car = {
  id: string,
  name: string,
  marca: string,
  imgUrl: string,
  price: number
}

type CarConstextData = {
  cars: Car[]
}

type CarProviderProps = {
  children: ReactNode;
}

export const CarConstext = createContext({} as CarConstextData)

export function CarProvider({ children }: CarProviderProps) {
  const [cars, setCars] = useState<Car[]>([])

  async function buscaDados() {
    const response = await api.get(`http://localhost:3332/cars`)

    setCars(response.data)
  }

  useEffect(() => {
    buscaDados()
  }, [])
  
  return (
    <CarConstext.Provider value={{ cars }}>
      {children}
    </CarConstext.Provider>
  )
}