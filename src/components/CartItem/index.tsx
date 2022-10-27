import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useShoppingCart } from '../../context/ProductCartContext'

import { api } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartContainer, ImgCart } from './styles'

type CartItemProps = {
  id: number
  quantity: number
}

type CoffeeProps = {
  id: number
  imgUrl: string
  tag?: string[]
  title: string
  description: string
  price: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  const { removeFromCart } = useShoppingCart()

  async function buscaDados() {
    const response = await api.get('http://localhost:3000/coffees')

    setCoffees(response.data)
  }

  useEffect(() => {
    buscaDados()
  }, [])

  const item = coffees.find((i) => i.id === id)
  if (item == null) return null

  return (
    <CartContainer>
      <ImgCart src={item.imgUrl} alt="" />

      <div>
        <div>
          {item.title} {quantity > 1 && <span>{quantity}x</span>}
          <div>{formatCurrency(item.price)}</div>
        </div>
      </div>

      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        style={{ border: 'none' }}
        onClick={() => removeFromCart(item.id)}
      >
        <Trash size={32} color="red" weight="fill" />
      </button>
    </CartContainer>
  )
}