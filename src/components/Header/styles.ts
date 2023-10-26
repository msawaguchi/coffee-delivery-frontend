import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`
export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  &:first-child {
    padding: 10px;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
      transition: background-color 500ms;

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }

  &:nth-child(2) {
    border-radius: 8px;
    background-color: transparent;
  }

  &:nth-child(2) a {
    padding: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      transition: background-color 500ms;
    }
  }
`
export const Counter = styled.div`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 12px;
  font-weight: 700;
  margin-top: -3rem;
  margin-left: -0.7rem;
`
