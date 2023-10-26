import { ShoppingCart, Coffee } from 'phosphor-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  HeaderSection,
  ProductList,
  ProductsSection,
  ProductCard,
  ProductPriceCart,
  DescriptionTags,
  CartButton,
  Price,
} from './styles'
import homeImage from '../../assets/coffee-image-home.png'
import { useContext } from 'react'
import { CounterCart } from '../../components/CounterCart'
import { CartItemContext } from '../../contexts/CartItemsContext'
import { priceFormatter } from '../../utils/formatter'
import { HeaderDescription } from './components/HeaderDescription'

interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  img: string
  qtd: number
}

export function Home() {
  const { coffees, updateCartItems, addItemCounter, subItemFromCounter } =
    useContext(CartItemContext)

  function handleAddItemToCart(coffee: Coffee) {
    toast.success('Adicionado ao carrinho')
    updateCartItems(coffee)
  }

  function splitPrice(price: number) {
    const formattedPrice = priceFormatter.format(price)
    const splittedPrice = formattedPrice.split('R$')
    const splitted = formattedPrice.split('')

    return (
      <>
        {splitted[0] + splitted[1]}
        <strong>{splittedPrice}</strong>
      </>
    )
  }

  return (
    <>
      <HeaderSection>
        <HeaderDescription />
        <img src={homeImage} alt="" />
      </HeaderSection>
      <ProductsSection>
        <h2>Nossos cafés</h2>

        <ProductList>
          {coffees.map((coffee) => {
            return (
              <ProductCard key={coffee.id}>
                <img src={coffee.img} alt="" />
                <DescriptionTags>
                  {coffee.tags.map((tag) => {
                    return <span key={tag}>{tag}</span>
                  })}
                </DescriptionTags>

                <h3>{coffee.name}</h3>
                <span>{coffee.description}</span>
                <ProductPriceCart>
                  <div>
                    <Price>{splitPrice(coffee.price)}</Price>
                  </div>
                  <div>
                    <CounterCart
                      addItem={addItemCounter}
                      subtractItem={subItemFromCounter}
                      coffee={coffee}
                    />
                    <CartButton>
                      <ShoppingCart
                        size={32}
                        weight="fill"
                        onClick={() => handleAddItemToCart(coffee)}
                      />
                    </CartButton>
                  </div>
                </ProductPriceCart>
              </ProductCard>
            )
          })}
          <ToastContainer
            position="bottom-right"
            hideProgressBar={true}
            autoClose={2000}
          />
        </ProductList>
      </ProductsSection>
    </>
  )
}
