import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { useShoppingCart } from '../../context/ProductCartContext'
import { api } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartItem } from '../CartItem/index'
import { Content, Overlay, TotalContainer } from './styles'

type CoffeeProps = {
  id: number
  imgUrl: string
  tag?: string[]
  title: string
  description: string
  price: number
}

export function CartSales() {
  const { cartItems } = useShoppingCart()
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  async function buscaDados() {
    const response = await api.get('http://localhost:3000/coffees')

    setCoffees(response.data)
  }

  useEffect(() => {
    buscaDados()
  }, [])

  // if (item == null) return null

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title asChild>
          <h1>Cart</h1>
        </Dialog.Title>

        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <TotalContainer>
          Total{' '}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = coffees.find((i) => i.id === cartItem.id)

              return total + (item?.price || 0) * cartItem.quantity
            }, 0),
          )}
        </TotalContainer>
      </Content>
    </Dialog.Portal>
  )
}