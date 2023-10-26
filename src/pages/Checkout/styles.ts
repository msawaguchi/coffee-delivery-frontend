import { styled, css } from 'styled-components'

export const CheckoutScreen = styled.section`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 32px;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`

export const CompleteOrderSection = styled.div`
  width: 100%;
  flex: 1.5;
`

export const Card = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 16px;
`

export const SelectedProductsSection = styled.div`
  width: 100%;
  flex: 1;
`

export const FormAddressContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const CardSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  div {
    margin-left: 6px;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 18px;
      margin: 6px 0;
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 14px;
    }
  }
`
export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  padding: 12px;
  border: none;

  &:focus {
    background-color: ${(props) => props.theme['base-button']};
  }

  ${(props) =>
    props.required &&
    css`
      background-color: ${(props) => props.theme['red-light']};
      border: 1px solid ${(props) => props.theme.red};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme['base-button']};
      cursor: not-allowed;
    `}
`
export const ProductItemCart = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 6px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  .price-cart-item {
    margin-bottom: 40px;
    font-weight: 700;
  }

  .control-cart-item {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  img {
    width: 4rem;
  }

  &:first-child {
    padding-top: 0px;
  }
`

export const RemoveFromCartButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  padding: 0 10px;
  gap: 4px;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: background-color 500ms;
  }
`
export const OrderSummaryContainer = styled.div`
  margin-top: 16px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px 0px;

    &:nth-child(3) {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  }
`

interface PaymentOptionButtonProps {
  selected: boolean
}

export const PaymentOptionButton = styled.div<PaymentOptionButtonProps>`
  width: 100%;
  background-color: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  gap: 6px;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: background-color 500ms;
    cursor: pointer;
  }

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${props.theme.purple};
    `}
`
export const PaymentOptions = styled.div`
  display: flex;
  gap: 6px;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  text-align: center;
  font-weight: 700;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  padding: 18px;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: background-color 500ms;
    cursor: pointer;
  }
`
