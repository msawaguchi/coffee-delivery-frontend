/* eslint-disable react-hooks/exhaustive-deps */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface CartItemContextProviderProps {
  children: ReactNode
}

interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  img: string
  qtd: number
}

interface UserAddress {
  zipcode: string
  street: string
  number: string
  complement: string
  city: string
  neighborhood: string
  state: string
}

interface UserOrderConfirmation {
  address: UserAddress
  paymentMethod: string
}

interface CartItemContextType {
  coffees: Coffee[]
  cartItems: Coffee[]
  userOrderConfirmation: UserOrderConfirmation | null
  setUserOrderConfirmation: Dispatch<
    SetStateAction<UserOrderConfirmation | null>
  >
  setCartItems: Dispatch<SetStateAction<Coffee[]>>
  updateCartItems: (data: Coffee) => void
  removeFromCart: (data: Coffee) => void
  addItemCounter: (data: Coffee) => void
  subItemFromCounter: (data: Coffee) => void
  addItemCounterCheckout: (data: Coffee) => void
  subItemFromCounterCheckout: (data: Coffee) => void
}

export const CartItemContext = createContext({} as CartItemContextType)

export function CartItemContextProvider({
  children,
}: CartItemContextProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>(() => {
    return (
      JSON.parse(localStorage.getItem('@coffee-delivery:cart-1.0.0') || '{}') ||
      []
    )
  })
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [userOrderConfirmation, setUserOrderConfirmation] =
    useState<UserOrderConfirmation | null>(null)

  async function fetchCoffees() {
    const response = await api.get('coffees')
    setCoffees(response.data)
    updateCoffees(response.data)
  }

  function updateCoffees(response: Coffee[]) {
    if (cartItems.length) {
      const coffeesMerged = response.map((coffee: Coffee) => {
        const matchCoffee = cartItems.find(
          (cartItem) => cartItem.id === coffee.id,
        )
        if (matchCoffee) coffee.qtd = matchCoffee.qtd

        return coffee
      })
      setCoffees(coffeesMerged)
    }
  }

  useEffect(() => {
    fetchCoffees()
    const storedCartAsJSON = localStorage.getItem('@coffee-delivery:cart-1.0.0')

    if (storedCartAsJSON) {
      setCartItems(JSON.parse(storedCartAsJSON))
    }
  }, [])

  useEffect(() => {
    updateJSONCart(cartItems)
  }, [cartItems])

  function addItemCounter(coffee: Coffee) {
    setCoffees(
      coffees.map((item) =>
        item.id === coffee.id ? { ...item, qtd: coffee.qtd + 1 } : item,
      ),
    )
  }

  function subItemFromCounter(coffee: Coffee) {
    if (coffee.qtd > 1) {
      setCoffees(
        coffees.map((item) =>
          item.id === coffee.id ? { ...item, qtd: coffee.qtd - 1 } : item,
        ),
      )
    }
  }

  function addItemCounterCheckout(coffee: Coffee) {
    setCoffees(
      coffees.map((item) =>
        item.id === coffee.id ? { ...item, qtd: coffee.qtd + 1 } : item,
      ),
    )
    setCartItems(
      cartItems.map((item) =>
        item.id === coffee.id ? { ...item, qtd: item.qtd + 1 } : item,
      ),
    )
  }

  function subItemFromCounterCheckout(coffee: Coffee) {
    if (coffee.qtd > 1) {
      setCoffees(
        coffees.map((item) =>
          item.id === coffee.id ? { ...item, qtd: coffee.qtd - 1 } : item,
        ),
      )
      setCartItems(
        cartItems.map((item) =>
          item.id === coffee.id ? { ...item, qtd: item.qtd - 1 } : item,
        ),
      )
    }
  }

  function updateCartItems(coffee: Coffee) {
    const isAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === coffee.id,
    )

    if (isAlreadyInCart) {
      addItemCounter(coffee)
      setCartItems(
        cartItems.map((item) =>
          item.id === coffee.id ? { ...item, qtd: item.qtd + 1 } : item,
        ),
      )
    } else {
      if (cartItems.length) {
        setCartItems((items) => [...items, coffee])
      } else {
        setCartItems([coffee])
      }
    }
  }

  function removeFromCart(coffee: Coffee) {
    const filteredItems = cartItems.filter((item) => {
      return item.id !== coffee.id
    })
    setCartItems(filteredItems)
  }

  function updateJSONCart(cartItemsUpdated: Coffee[]) {
    const cartJSON = JSON.stringify(cartItemsUpdated)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', cartJSON)
  }

  return (
    <CartItemContext.Provider
      value={{
        coffees,
        cartItems,
        userOrderConfirmation,
        setUserOrderConfirmation,
        setCartItems,
        updateCartItems,
        removeFromCart,
        addItemCounter,
        subItemFromCounter,
        addItemCounterCheckout,
        subItemFromCounterCheckout,
      }}
    >
      {children}
    </CartItemContext.Provider>
  )
}
