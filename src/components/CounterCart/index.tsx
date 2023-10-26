import { CounterCartContainer } from './styles'

interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  img: string
  qtd: number
}

interface CoffeeProps {
  coffee: Coffee
  addItem: (data: Coffee) => void
  subtractItem: (data: Coffee) => void
}

export function CounterCart({ coffee, addItem, subtractItem }: CoffeeProps) {
  function handleAddItemToCart(coffee: Coffee) {
    addItem(coffee)
  }

  function handleSubtractItemFromCart(coffee: Coffee) {
    subtractItem(coffee)
  }

  return (
    <CounterCartContainer>
      <button onClick={() => handleSubtractItemFromCart(coffee)}>-</button>
      <label>{coffee.qtd}</label>
      <button onClick={() => handleAddItemToCart(coffee)}>+</button>
    </CounterCartContainer>
  )
}
