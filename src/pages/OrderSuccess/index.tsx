import { SuccessMessageContainer, SummaryInfo } from './styles'
import successImg from '../../assets/Illustration.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartItemContext } from '../../contexts/CartItemsContext'

export function Success() {
  const { userOrderConfirmation } = useContext(CartItemContext)

  const [address] = useState(userOrderConfirmation?.address)
  const [payment] = useState(userOrderConfirmation?.paymentMethod)

  return (
    <SuccessMessageContainer>
      <div>
        <h2>Uhu! Pedido Confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <section>
          <SummaryInfo variant="purple">
            <MapPin size={32} weight="fill" />
            <div>
              <span>
                Entrega em{' '}
                <b>
                  Rua {address?.street}, {address?.number}
                </b>
              </span>
              <span>
                {address?.neighborhood} - {address?.city}, {address?.state}
              </span>
            </div>
          </SummaryInfo>
          <SummaryInfo variant="yellow">
            <Timer size={32} weight="fill" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <b>20 min - 30 min</b>
              </span>
            </div>
          </SummaryInfo>
          <SummaryInfo variant="yellow-dark">
            <CurrencyDollar size={32} weight="fill" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <b>{payment}</b>
              </span>
            </div>
          </SummaryInfo>
        </section>
      </div>
      <img src={successImg} alt="" />
    </SuccessMessageContainer>
  )
}
