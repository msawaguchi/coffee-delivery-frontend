import styled from 'styled-components'

export const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 62px 32px;
  @media (max-width: 968px) {
    flex-direction: column;
  }
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));

  gap: 24px;
`

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 62px 32px;

  h2 {
    font-weight: 800;
    font-size: 26px;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 54px;
  }
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 256px;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  color: ${(props) => props.theme['base-subtitle']};
  border-radius: 6px 36px 6px 36px;
  padding: 16px;
  margin-bottom: 16px;

  img {
    margin-top: -32px;
    margin-bottom: 16px;

    &:hover {
      transition: transform 3s ease-in-out;
      transform: rotate(360deg);
    }
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
    margin-bottom: 16px;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-input']};
    transition: background-color 500ms;
  }
`

export const DescriptionTags = styled.div`
  display: flex;
  gap: 6px;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 12px;
  }
`

export const ProductPriceCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const Price = styled.div`
  font-family: 'Baloo 2', sans-serif;
  margin-left: 2px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-label']};

  strong {
    font-size: 24px;
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
  }
`

export const CartButton = styled.button`
  margin-top: 4px;
  border-radius: 6px;

  svg {
    padding: 6px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme.purple};
      transition: background-color 500ms;
    }
  }
`
