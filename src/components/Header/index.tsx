import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, MenuContainer, MenuItem, Counter } from './styles'
import logo from '../../assets/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { CartItemContext } from '../../contexts/CartItemsContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { cartItems, userOrderConfirmation } = useContext(CartItemContext)
  const [cartTotalItems, setCartTotalItems] = useState(0)
  const [city, setCity] = useState('São Paulo')
  const [state, setState] = useState('SP')

  useEffect(() => {
    setCartTotalItems(cartItems.reduce((acc, item) => (acc += item.qtd), 0))
  }, [cartItems])

  useEffect(() => {
    if (userOrderConfirmation) {
      setCity(userOrderConfirmation.address.city)
      setState(userOrderConfirmation.address.state)
    }
  }, [userOrderConfirmation])

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <MenuContainer>
        <MenuItem>
          <MapPin size={32} weight="fill" />
          <span>
            {city}, {state}
          </span>
        </MenuItem>
        <MenuItem>
          <a href="/checkout">
            <ShoppingCart size={32} weight="fill" />
          </a>
          {cartTotalItems > 0 && <Counter>{cartTotalItems}</Counter>}
        </MenuItem>
      </MenuContainer>
    </HeaderContainer>
  )
}
