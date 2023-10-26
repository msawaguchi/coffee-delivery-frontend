import { useContext, useEffect, useState } from 'react'
import {
  MapPin,
  CurrencyDollar,
  Trash,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { api } from '../../lib/axios'
import {
  CompleteOrderSection,
  Card,
  SelectedProductsSection,
  CheckoutScreen,
  FormAddressContainer,
  CardSubtitle,
  Input,
  ProductItemCart,
  RemoveFromCartButton,
  OrderSummaryContainer,
  PaymentOptionButton,
  PaymentOptions,
  ConfirmOrderButton,
} from './styles'
import { CounterCart } from '../../components/CounterCart'

import { CartItemContext } from '../../contexts/CartItemsContext'
import { priceFormatter } from '../../utils/formatter'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const {
    cartItems,
    setCartItems,
    removeFromCart,
    addItemCounterCheckout,
    subItemFromCounterCheckout,
    setUserOrderConfirmation,
  } = useContext(CartItemContext)

  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('')
  const [shippingCost, setShippingCost] = useState(0)
  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [foundZipCode, setFoundZipCode] = useState(true)
  const [required, setRequired] = useState(false)

  async function handleGetCepInfo(userZipCode: string) {
    const response = await api.get(
      `https://viacep.com.br/ws/${userZipCode}/json/`,
    )

    if (!response.data.erro) {
      const { logradouro, bairro, localidade, uf } = response.data
      setStreet(logradouro)
      setNeighborhood(bairro)
      setCity(localidade)
      setState(uf)
    } else {
      setFoundZipCode(false)
      toast.warn('CEP não encontrado, digite o endereço.')
    }
  }

  const handleCEPInputChange = (e: { target: { value: string } }) => {
    const userZipCode = e.target.value.replace(/\D/g, '')
    setZipCode(userZipCode)

    if (userZipCode.length === 8) {
      handleGetCepInfo(userZipCode)
    }
  }

  function handleSelectPaymenthMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  function handleConfirmOrder() {
    if (!cartItems.length) {
      return toast.warn('Carrinho vazio')
    }

    if (!zipCode || !street || !number || !city || !state || !neighborhood) {
      setRequired(true)
      return toast.error('Preencha o endereço corretamente')
    }

    if (paymentMethod === '') {
      return toast.error('Escolha método de pagamento')
    }

    const address = {
      zipcode: zipCode,
      street,
      number,
      complement,
      city,
      neighborhood,
      state,
    }

    const orderConfirmation = {
      address,
      paymentMethod,
    }

    setUserOrderConfirmation(orderConfirmation)

    navigate('/success')
    setCartItems([])
  }

  const cartSummary = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.qtd)
  }, 0)

  useEffect(() => {
    if (cartItems.length) {
      setShippingCost(5.99)
    }
  }, [cartItems])

  return (
    <CheckoutScreen>
      <CompleteOrderSection>
        <h3>Complete seu pedido</h3>
        <Card>
          <CardSubtitle>
            <MapPin size={32} color="#C47F17" />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CardSubtitle>
          <FormAddressContainer>
            <div>
              <Input
                placeholder="CEP*"
                required={required && !zipCode}
                onChange={handleCEPInputChange}
                value={zipCode}
                maxLength={8}
              ></Input>
            </div>
            <div>
              <Input
                placeholder="Rua*"
                value={street}
                disabled={foundZipCode}
                required={required && !street}
              ></Input>
            </div>
            <div>
              <Input
                placeholder="Número*"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required={required && !number}
                maxLength={5}
              ></Input>
              <Input
                placeholder="Complemento"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              ></Input>
            </div>
            <div>
              <Input
                placeholder="Bairro*"
                value={neighborhood}
                disabled={foundZipCode}
                required={required && !neighborhood}
              ></Input>
              <Input
                placeholder="Cidade*"
                value={city}
                disabled={foundZipCode}
                required={required && !city}
              ></Input>
              <Input
                placeholder="UF*"
                value={state}
                disabled={foundZipCode}
                required={required && !state}
                maxLength={2}
              ></Input>
            </div>
          </FormAddressContainer>
        </Card>
        <Card>
          <CardSubtitle>
            <CurrencyDollar size={32} color="#8047F8" />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CardSubtitle>
          <PaymentOptions>
            <PaymentOptionButton
              selected={paymentMethod === 'CARTÃO DE CRÉDITO'}
              onClick={() => handleSelectPaymenthMethod('CARTÃO DE CRÉDITO')}
            >
              <CreditCard size={20} color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentOptionButton>
            <PaymentOptionButton
              selected={paymentMethod === 'CARTÃO DE DÉBITO'}
              onClick={() => handleSelectPaymenthMethod('CARTÃO DE DÉBITO')}
            >
              <Bank size={20} color="#8047F8" />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentOptionButton>
            <PaymentOptionButton
              selected={paymentMethod === 'DINHEIRO'}
              onClick={() => handleSelectPaymenthMethod('DINHEIRO')}
            >
              <Money size={20} color="#8047F8" />
              <span>DINHEIRO</span>
            </PaymentOptionButton>
          </PaymentOptions>
        </Card>
      </CompleteOrderSection>
      <SelectedProductsSection>
        <h3>Cafés selecionados</h3>
        <Card>
          <ul>
            {cartItems.length ? (
              cartItems.map((coffee) => (
                <ProductItemCart key={coffee.id}>
                  <img src={coffee.img} alt="" />
                  <div>
                    <span>{coffee.name}</span>
                    <div className="control-cart-item">
                      <CounterCart
                        addItem={addItemCounterCheckout}
                        subtractItem={subItemFromCounterCheckout}
                        coffee={coffee}
                      />
                      <RemoveFromCartButton
                        onClick={() => removeFromCart(coffee)}
                      >
                        <Trash size={20} color="#8047F8" />
                        <span>REMOVER</span>
                      </RemoveFromCartButton>
                    </div>
                  </div>
                  <span className="price-cart-item">
                    {priceFormatter.format(coffee.price * coffee.qtd)}
                  </span>
                </ProductItemCart>
              ))
            ) : (
              <small>nenhum item aqui...</small>
            )}
          </ul>
          <OrderSummaryContainer>
            <div>
              <span>Total de itens</span>
              <span>{priceFormatter.format(cartSummary)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{priceFormatter.format(shippingCost)}</span>
            </div>
            <div>
              <span>Total </span>
              <span>{priceFormatter.format(cartSummary + shippingCost)}</span>
            </div>
            <ConfirmOrderButton onClick={handleConfirmOrder}>
              Confirmar pedido
            </ConfirmOrderButton>
          </OrderSummaryContainer>
        </Card>
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          autoClose={2000}
        />
      </SelectedProductsSection>
    </CheckoutScreen>
  )
}
