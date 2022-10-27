import Link from "next/link";
import { Car, MapPin, ShoppingCart } from "phosphor-react";
import { ActionsContainer, CartContainer, LocationContainer, LogoContainer, NavBarContainer, } from "./styles";

import * as Dialog from '@radix-ui/react-dialog'

import { useShoppingCart } from '../../context/ProductCartContext'
import { CartSales } from "../CartSales";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <>
      <NavBarContainer>
        <Link href="/">
          <LogoContainer>
            <Car size={32} color="black" />
            <span>| Car Sale</span>
          </LogoContainer>
        </Link>
        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span>Fortaleza, CE</span>
          </LocationContainer>
          {cartQuantity > 0 && (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <CartContainer onClick={openCart}>
                  <ShoppingCart size={22} weight="fill" color="#C47F17" />
                  <div>{cartQuantity}</div>
                </CartContainer>
              </Dialog.Trigger>

              <CartSales />
            </Dialog.Root>
          )}
        </ActionsContainer>
      </NavBarContainer>
    </>
  )
}